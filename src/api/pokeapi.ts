import type {
  AlolanData,
  EvolutionInfo,
  EvolutionStage,
  EvoLink,
  MoveInfo,
  PokedexEntry,
  PokemonData,
  TypeMatchup,
} from "../types";
import { TYPE_LABELS } from "../data/types";
import { findItemUse } from "../data/evolutionItems";
import { getExclusive } from "../data/exclusives";
import { DAMAGE_CLASS_LABELS, STAT_LABELS } from "../data/labels";
import { KANTO_ENCOUNTERS } from "../data/kantoEncounters";
import { ALOLAN_FORMS, isAlolanInPikachu } from "../data/alolanForms";

const API = "https://pokeapi.co/api/v2";
const LETS_GO_GROUP = "lets-go-pikachu-lets-go-eevee";
const LETS_GO_PIKACHU = "lets-go-pikachu";

// --- Forme des réponses de PokeAPI (seulement les champs utilisés)

interface NamedResource {
  name: string;
  url: string;
}
interface Translated {
  name: string;
  language: NamedResource;
}
interface ApiPokedex {
  pokemon_entries: { entry_number: number; pokemon_species: NamedResource }[];
  descriptions: { description: string; language: NamedResource }[];
}
interface ApiSpecies {
  id: number;
  name: string;
  names: Translated[];
  genera: { genus: string; language: NamedResource }[];
  flavor_text_entries: {
    flavor_text: string;
    language: NamedResource;
    version: NamedResource;
  }[];
  is_legendary: boolean;
  is_mythical: boolean;
  gender_rate: number;
  capture_rate: number;
  evolution_chain: { url: string };
  varieties: { is_default: boolean; pokemon: NamedResource }[];
}
interface ApiPokemon {
  id: number;
  types: { type: NamedResource }[];
  stats: { base_stat: number; stat: NamedResource }[];
  height: number;
  weight: number;
  moves: {
    move: NamedResource;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: NamedResource;
      version_group: NamedResource;
    }[];
  }[];
}
interface ApiType {
  damage_relations: Record<
    | "double_damage_from"
    | "half_damage_from"
    | "no_damage_from"
    | "double_damage_to",
    NamedResource[]
  >;
}
interface ApiMove {
  names: Translated[];
  type: NamedResource;
  damage_class: NamedResource;
  power: number | null;
  accuracy: number | null;
  pp: number;
  flavor_text_entries: {
    flavor_text: string;
    language: NamedResource;
    version_group: NamedResource;
  }[];
}
interface ApiEvolutionDetail {
  trigger: NamedResource;
  item: NamedResource | null;
  min_level: number | null;
  min_happiness: number | null;
  version_group?: NamedResource | null;
}
interface ApiChainNode {
  species: NamedResource;
  evolution_details: ApiEvolutionDetail[];
  evolves_to: ApiChainNode[];
}

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json() as Promise<T>;
}

// --- Petits outils

export function getFrenchName(names: Translated[]): string {
  const frenchName = names.find((n) => n.language.name === "fr");
  return frenchName ? frenchName.name : "";
}

function cleanText(text: string): string {
  return text.replace(/[\n\f­]/g, " ").replace(/\s+/g, " ");
}

// Texte du Pokédex : celui de Let's Go Pikachu, sinon d'Évoli, sinon le
// dernier texte français disponible.
function getFrenchDescription(entries: ApiSpecies["flavor_text_entries"]) {
  const fr = entries.filter((e) => e.language.name === "fr");
  const entry =
    fr.find((e) => e.version.name === LETS_GO_PIKACHU) ??
    fr.find((e) => e.version.name === "lets-go-eevee") ??
    fr[fr.length - 1];
  return entry ? cleanText(entry.flavor_text) : "";
}

function getDefaultVarietyUrl(species: ApiSpecies): string {
  const variety =
    species.varieties.find((v) => v.is_default) ?? species.varieties[0];
  return variety.pokemon.url;
}

// Illustration officielle, à partir du numéro national de l'espèce (les 153
// Pokémon de Let's Go sont tous des formes par défaut).
export function artworkUrl(nationalId: number, shiny = false): string {
  const base =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";
  return `${base}${shiny ? "/shiny" : ""}/${nationalId}.png`;
}

// --- Index

export async function fetchIndex(): Promise<{
  title: string;
  entries: PokedexEntry[];
}> {
  const data = await getJson<ApiPokedex>(`${API}/pokedex/letsgo-kanto`);

  // Un appel par espèce : nom français, légendaire / fabuleux...
  const speciesResponses = await Promise.all(
    data.pokemon_entries.map((entry) =>
      getJson<ApiSpecies>(entry.pokemon_species.url),
    ),
  );

  // ...puis un appel par variante par défaut : les types
  const pokemonResponses = await Promise.all(
    speciesResponses.map((species) =>
      getJson<ApiPokemon>(getDefaultVarietyUrl(species)),
    ),
  );

  const entries = data.pokemon_entries.map((entry, i) => ({
    id: entry.entry_number,
    name: getFrenchName(speciesResponses[i].names),
    apiName: entry.pokemon_species.name,
    isLegendary: speciesResponses[i].is_legendary,
    isMythical: speciesResponses[i].is_mythical,
    typeSlugs: pokemonResponses[i].types.map((t) => t.type.name),
    exclusive: getExclusive(entry.pokemon_species.name),
  }));

  const frenchTitle = data.descriptions.find((d) => d.language.name === "fr");
  return { title: frenchTitle ? frenchTitle.description : "", entries };
}

// --- Fiche d'un Pokémon

// Faiblesses / résistances / forces : on combine les damage_relations de
// chaque type du Pokémon (les multiplicateurs se cumulent en double type).
const ALL_TYPES = Object.keys(TYPE_LABELS);

function computeTypeMatchups(typeResponses: ApiType[]) {
  const defense = new Map<string, number>(ALL_TYPES.map((t) => [t, 1]));
  const mult = (t: string) => defense.get(t) ?? 1;
  const offensive = new Set<string>();

  for (const { damage_relations: dr } of typeResponses) {
    for (const t of dr.double_damage_from) defense.set(t.name, mult(t.name) * 2);
    for (const t of dr.half_damage_from) defense.set(t.name, mult(t.name) * 0.5);
    for (const t of dr.no_damage_from) defense.set(t.name, 0);
    for (const t of dr.double_damage_to) offensive.add(t.name);
  }

  const matchup = (t: string): TypeMatchup => ({
    type: TYPE_LABELS[t] ?? t,
    slug: t,
    multiplier: mult(t),
  });

  return {
    weaknesses: ALL_TYPES.filter((t) => mult(t) > 1)
      .sort((a, b) => mult(b) - mult(a))
      .map(matchup),
    resistances: ALL_TYPES.filter((t) => mult(t) > 0 && mult(t) < 1)
      .sort((a, b) => mult(a) - mult(b))
      .map(matchup),
    immunities: ALL_TYPES.filter((t) => mult(t) === 0).map(matchup),
    strengths: ALL_TYPES.filter((t) => offensive.has(t)).map(matchup),
  };
}

// Condition pour obtenir ce stade depuis le précédent. Les objets viennent de
// evolutionItems.ts (règles de Let's Go), le reste des détails de PokeAPI.
function describeCondition(fromName: string | undefined, node: ApiChainNode) {
  const itemUse = findItemUse(fromName, node.species.name);
  if (itemUse) {
    return {
      condition: `Utiliser l'objet : ${itemUse.name}${itemUse.note ? ` (${itemUse.note})` : ""}`,
      itemSlug: itemUse.slug,
    };
  }
  const details = node.evolution_details;
  const detail =
    details.find((d) => d.version_group?.name === LETS_GO_GROUP) ?? details[0];
  if (!detail) return { condition: "" };
  if (detail.trigger.name === "trade") return { condition: "Par échange" };
  if (detail.min_level)
    return { condition: `Atteindre le niveau ${detail.min_level}` };
  if (detail.min_happiness) return { condition: "Par amitié" };
  return { condition: "Montée de niveau" };
}

async function fetchEvolutions(
  chainUrl: string,
  apiName: string,
  inDex: (name: string) => boolean,
) {
  const chain = (await getJson<{ chain: ApiChainNode }>(chainUrl)).chain;

  // Tous les nœuds de la chaîne, en ne gardant que les Pokémon présents dans
  // Let's Go (ex. Mentali ou Pichu n'y sont pas).
  const nodes: ApiChainNode[] = [];
  const parentOf = new Map<string, string>();
  const collect = (node: ApiChainNode) => {
    nodes.push(node);
    for (const child of node.evolves_to) {
      parentOf.set(child.species.name, node.species.name);
      collect(child);
    }
  };
  collect(chain);

  const resolved = new Map<string, EvolutionInfo>();
  await Promise.all(
    nodes
      .filter((n) => inDex(n.species.name))
      .map(async (node) => {
        const species = await getJson<ApiSpecies>(node.species.url);
        const parent = parentOf.get(node.species.name);
        resolved.set(node.species.name, {
          apiName: node.species.name,
          name: getFrenchName(species.names),
          sprite: artworkUrl(species.id),
          ...(parent && inDex(parent)
            ? describeCondition(parent, node)
            : { condition: "" }),
        });
      }),
  );

  // Lignée stade par stade
  const evolutionLine: EvolutionStage[] = [];
  let stage = [chain];
  while (stage.length) {
    const members = stage
      .filter((n) => inDex(n.species.name))
      .map((n) => resolved.get(n.species.name)!);
    if (members.length) evolutionLine.push(members);
    stage = stage.flatMap((n) => n.evolves_to);
  }

  const current = nodes.find((n) => n.species.name === apiName);
  const evolutions = (current?.evolves_to ?? [])
    .filter((n) => inDex(n.species.name))
    .map((n) => resolved.get(n.species.name)!);

  const parentName = parentOf.get(apiName);
  const parentInfo = parentName ? resolved.get(parentName) : undefined;
  const previousEvolution: EvoLink | null = parentInfo
    ? { apiName: parentInfo.apiName, name: parentInfo.name, sprite: parentInfo.sprite }
    : null;

  return {
    evolutions,
    evolutionLine,
    previousEvolution,
    evolvedFromCondition: resolved.get(apiName)?.condition ?? "",
    evolvedFromItem: resolved.get(apiName)?.itemSlug,
  };
}

// Capacités apprises dans Let's Go, un appel par capacité
async function fetchMoves(pokemon: ApiPokemon): Promise<MoveInfo[]> {
  const stubs = pokemon.moves.flatMap((m) =>
    m.version_group_details
      .filter((vd) => vd.version_group.name === LETS_GO_GROUP)
      .map((vd) => ({
        url: m.move.url,
        method: vd.move_learn_method.name,
        level: vd.level_learned_at,
      })),
  );
  const urls = [...new Set(stubs.map((s) => s.url))];
  const responses = await Promise.all(urls.map((u) => getJson<ApiMove>(u)));
  const byUrl = new Map(urls.map((u, i) => [u, responses[i]]));

  // Ordre : par niveau d'abord, puis CT, puis capacités enseignées
  const methodOrder = ["level-up", "machine", "tutor"];
  return stubs
    .map((stub) => {
      const move = byUrl.get(stub.url)!;
      const frTexts = move.flavor_text_entries.filter(
        (f) => f.language.name === "fr",
      );
      const text =
        frTexts.find((f) => f.version_group.name === LETS_GO_GROUP) ??
        frTexts[frTexts.length - 1];
      return {
        name: getFrenchName(move.names),
        type: TYPE_LABELS[move.type.name] ?? move.type.name,
        typeSlug: move.type.name,
        damageClass:
          DAMAGE_CLASS_LABELS[move.damage_class.name] ?? move.damage_class.name,
        power: move.power,
        accuracy: move.accuracy,
        pp: move.pp,
        effect: text ? cleanText(text.flavor_text) : "",
        method: stub.method,
        level: stub.level,
      };
    })
    .sort(
      (a, b) =>
        (methodOrder.indexOf(a.method) + 1 || 9) -
          (methodOrder.indexOf(b.method) + 1 || 9) ||
        a.level - b.level ||
        a.name.localeCompare(b.name, "fr"),
    );
}

// Forme d'Alola : variante PokeAPI `${apiName}-alola`
async function fetchAlolan(
  apiName: string,
  name: string,
  index: PokedexEntry[],
): Promise<AlolanData | null> {
  const source = ALOLAN_FORMS[apiName];
  if (!source) return null;
  const pokemon = await getJson<ApiPokemon>(`${API}/pokemon/${apiName}-alola`);
  const from = source.evolvesFrom?.apiName;
  return {
    name: `${name} d'Alola`,
    sprite: artworkUrl(pokemon.id),
    shinySprite: artworkUrl(pokemon.id, true),
    typeSlugs: pokemon.types.map((t) => t.type.name),
    stats: pokemon.stats.map((s) => ({
      name: STAT_LABELS[s.stat.name] ?? s.stat.name,
      value: s.base_stat,
    })),
    height: pokemon.height / 10,
    weight: pokemon.weight / 10,
    source,
    evolvesFromName: from
      ? `${index.find((e) => e.apiName === from)?.name ?? from} d'Alola`
      : undefined,
    inPikachu: isAlolanInPikachu(apiName),
  };
}

export async function fetchPokemon(
  apiName: string,
  index: PokedexEntry[],
): Promise<PokemonData> {
  const species = await getJson<ApiSpecies>(
    `${API}/pokemon-species/${apiName}`,
  );
  const pokemon = await getJson<ApiPokemon>(getDefaultVarietyUrl(species));

  const dexNames = new Set(index.map((e) => e.apiName));
  // Tant que l'index n'est pas chargé, on ne filtre pas la lignée.
  const inDex = (name: string) => dexNames.size === 0 || dexNames.has(name);

  const name = getFrenchName(species.names);
  const [typeResponses, evolution, moves, alolan] = await Promise.all([
    Promise.all(pokemon.types.map((t) => getJson<ApiType>(t.type.url))),
    fetchEvolutions(species.evolution_chain.url, apiName, inDex),
    fetchMoves(pokemon),
    fetchAlolan(apiName, name, index),
  ]);

  const entry = index.find((e) => e.apiName === apiName);

  return {
    apiName,
    name,
    sprite: artworkUrl(species.id),
    shinySprite: artworkUrl(species.id, true),
    typeSlugs: pokemon.types.map((t) => t.type.name),
    stats: pokemon.stats.map((s) => ({
      name: STAT_LABELS[s.stat.name] ?? s.stat.name,
      value: s.base_stat,
    })),
    kantoNumber: entry?.id ?? null,
    isLegendary: species.is_legendary,
    isMythical: species.is_mythical,
    exclusive: getExclusive(apiName),
    height: pokemon.height / 10,
    weight: pokemon.weight / 10,
    femaleRatio: species.gender_rate < 0 ? null : species.gender_rate / 8,
    captureRate: species.capture_rate,
    genus:
      species.genera.find((g) => g.language.name === "fr")?.genus ?? "",
    description: getFrenchDescription(species.flavor_text_entries),
    ...evolution,
    ...computeTypeMatchups(typeResponses),
    // Lieux de rencontre : données générées (scripts/fetch-encounters.mjs)
    locations: KANTO_ENCOUNTERS[apiName] ?? [],
    moves,
    alolan,
  };
}
