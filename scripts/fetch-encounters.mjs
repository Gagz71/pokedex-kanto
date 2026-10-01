// Génère src/data/kantoEncounters.ts : où rencontrer chacun des 153 Pokémon
// du Pokédex de Kanto dans Let's Go Pikachu, d'après PokeAPI.
// À relancer seulement si PokeAPI corrige ses données :
//   node scripts/fetch-encounters.mjs

import { writeFile } from "node:fs/promises";

const API = "https://pokeapi.co/api/v2";
const VERSION = "lets-go-pikachu";

// Modes de rencontre de Let's Go (champ method des encounters de PokeAPI)
const METHOD_LABELS = {
  overworld: "En liberté",
  "overworld-special": "En liberté, rare",
  "overworld-water": "En liberté, sur l'eau",
  "overworld-water-special": "En liberté sur l'eau, rare",
  "overworld-flying": "En liberté, dans les airs",
  "overworld-flying-special": "En liberté dans les airs, rare",
  gift: "Offert",
  static: "Rencontre unique",
  pokeflute: "Rencontre unique (Pokéflûte)",
  "only-one": "Rencontre unique",
};

const getJson = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
};
const fr = (names) => names.find((n) => n.language.name === "fr")?.name ?? "";
const simplify = (s) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const dex = await getJson(`${API}/pokedex/letsgo-kanto`);
const areaCache = new Map();
async function getArea(url) {
  if (!areaCache.has(url)) {
    areaCache.set(
      url,
      (async () => {
        const area = await getJson(url);
        const location = await getJson(area.location.url);
        return { area, location };
      })(),
    );
  }
  return areaCache.get(url);
}

const result = {};
for (const entry of dex.pokemon_entries) {
  const species = await getJson(entry.pokemon_species.url);
  const variety = species.varieties.find((v) => v.is_default) ?? species.varieties[0];
  const encounters = await getJson(`${variety.pokemon.url}encounters`);
  const list = [];
  for (const e of encounters) {
    const v = e.version_details.find((d) => d.version.name === VERSION);
    if (!v) continue;
    const { area, location } = await getArea(e.location_area.url);
    // Sous-zone : « 1er s-sol » dans « Mont Sélénite (1er s-sol) », ou le nom
    // complet quand ce n'est pas un étage (« Laboratoire », « Sylphe SARL »).
    const areaName = fr(area.names);
    const match = areaName.match(/^(.*?)\s*\((.*)\)$/);
    let sub = "";
    // « …-area » : la zone unique du lieu, pas une sous-zone
    if (area.name.endsWith("-area")) sub = "";
    else if (match && simplify(match[1]).startsWith(simplify(fr(location.names)))) sub = match[2];
    else if (match) sub = match[1];
    else if (simplify(areaName) !== simplify(fr(location.names))) sub = areaName;

    const min = Math.min(...v.encounter_details.map((d) => d.min_level));
    const max = Math.max(...v.encounter_details.map((d) => d.max_level));
    const methods = [
      ...new Set(v.encounter_details.map((d) => METHOD_LABELS[d.method.name] ?? d.method.name)),
    ];
    list.push({
      place: location.name,
      area: sub,
      details: [min === max ? `Niv. ${min}` : `Niv. ${min} à ${max}`, ...methods].join(" · "),
    });
  }
  if (list.length) result[entry.pokemon_species.name] = list;
  process.stdout.write(".");
}

const header = `// Généré par scripts/fetch-encounters.mjs à partir de PokeAPI (version
// Let's Go Pikachu) : ne pas modifier à la main.
// Clé = apiName du Pokémon ; place = clé de KANTO_PLACES (kantoPlaces.ts).

export interface Encounter {
  place: string;
  area: string; // sous-zone (« 1er s-sol »), vide si aucune
  details: string; // « Niv. 3 à 4 · En liberté »
}

export const KANTO_ENCOUNTERS: Record<string, Encounter[]> = `;
await writeFile(
  new URL("../src/data/kantoEncounters.ts", import.meta.url),
  header + JSON.stringify(result, null, 2) + ";\n",
);
console.log(`\n${Object.keys(result).length} Pokémon avec des lieux de rencontre.`);
