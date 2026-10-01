import { useSyncExternalStore } from "react";

// Progression de la partie, enregistrée sur l'appareil (localStorage).
// Chaque entrée porte la date de sa dernière modification (updatedAt, en ms) :
// la synchronisation entre appareils garde la plus récente, entrée par
// entrée, plutôt que d'écraser toute la progression d'un appareil.
//
// Équivalent du store Pinia de Hisui : les données vivent dans ce module, les
// composants s'y abonnent avec le hook useProgress(), et chaque modification
// remplace l'objet `data` (jamais modifié sur place) pour que React voie le
// changement.

export interface PokemonProgress {
  seen: boolean;
  caught: boolean;
  shiny: boolean; // un chromatique capturé
  // Le Pokémon capturé a évolué : on ne l'a plus sous cette forme, mais il
  // reste « capturé » au Pokédex, comme dans le jeu.
  evolved: boolean;
  // Mon Pokémon à moi (une fois capturé) : niveau et stats telles que le jeu
  // les affiche, saisis à la main. Clés des stats = libellés de l'appli.
  level?: number;
  stats?: Record<string, number>;
  updatedAt: number;
}

export type PokemonFlag = "seen" | "caught" | "shiny";
export type PokemonState = Omit<PokemonProgress, "updatedAt">;

// L'équipe du moment (6 places comme dans le jeu). Nom et illustration sont
// copiés à l'ajout pour afficher l'équipe sans recharger chaque fiche.
export const TEAM_SIZE = 6;

export interface TeamMember {
  id: string;
  apiName: string;
  name: string;
  sprite: string;
  shiny: boolean;
}

export interface ProgressData {
  pokemon: Record<string, PokemonProgress>; // clé = apiName
  team: { members: TeamMember[]; updatedAt: number };
}

const STORAGE_KEY = "pokedex-letsgo-progress-v1";

const EMPTY: PokemonState = {
  seen: false,
  caught: false,
  shiny: false,
  evolved: false,
};

const EMPTY_DATA: ProgressData = {
  pokemon: {},
  team: { members: [], updatedAt: 0 },
};

function load(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      return {
        pokemon: saved.pokemon ?? {},
        team: saved.team ?? EMPTY_DATA.team,
      };
    }
  } catch {
    // stockage indisponible (navigation privée...) : on repart de zéro
  }
  return EMPTY_DATA;
}

let data: ProgressData = load();
const listeners = new Set<() => void>();

function commit(next: ProgressData) {
  data = next;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // stockage plein ou indisponible : la progression reste en mémoire
  }
  listeners.forEach((listener) => listener());
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getProgressData(): ProgressData {
  return data;
}

// Hook : le composant se redessine à chaque modification de la progression.
export function useProgress(): ProgressData {
  return useSyncExternalStore(subscribe, getProgressData);
}

// --- Lecture

export function getPokemon(apiName: string): PokemonState {
  return { ...EMPTY, ...data.pokemon[apiName] };
}

// Total de mes stats saisies (null si aucune).
export function statTotal(apiName: string): number | null {
  const values = Object.values(getPokemon(apiName).stats ?? {});
  return values.length ? values.reduce((a, b) => a + b, 0) : null;
}

export function teamCount(apiName: string): number {
  return data.team.members.filter((m) => m.apiName === apiName).length;
}

export function isTeamFull(): boolean {
  return data.team.members.length >= TEAM_SIZE;
}

// --- Écriture

function setPokemon(entries: Record<string, PokemonState>) {
  const now = Date.now();
  const pokemon = { ...data.pokemon };
  for (const [apiName, state] of Object.entries(entries)) {
    pokemon[apiName] = { ...state, updatedAt: now };
  }
  commit({ ...data, pokemon });
}

function setTeam(members: TeamMember[]) {
  commit({ ...data, team: { members, updatedAt: Date.now() } });
}

// Les états s'enchaînent comme dans le jeu : capturé implique vu. Décocher
// « vu » ou « capturé » décoche aussi ce qui en dépend.
export function toggle(apiName: string, flag: PokemonFlag) {
  const next = { ...getPokemon(apiName) };
  const value = !next[flag];
  next[flag] = value;
  if (value) {
    if (flag === "caught" || flag === "shiny") next.seen = true;
  } else {
    if (flag === "seen") next.caught = next.shiny = next.evolved = false;
    if (flag === "caught") next.evolved = false;
  }
  setPokemon({ [apiName]: next });
}

// Le Pokémon capturé a évolué en `to` : il reste capturé au Pokédex (comme
// dans le jeu) mais passe en « a évolué » ; la forme évoluée devient vue et
// capturée ; dans l'équipe, le premier membre de l'espèce est remplacé par
// sa forme évoluée (en gardant sa marque chromatique).
export function evolve(apiName: string, to: { apiName: string; name: string; sprite: string }) {
  setPokemon({
    [apiName]: { ...getPokemon(apiName), seen: true, caught: true, evolved: true },
    [to.apiName]: { ...getPokemon(to.apiName), seen: true, caught: true },
  });
  const index = data.team.members.findIndex((m) => m.apiName === apiName);
  if (index >= 0) {
    const members = [...data.team.members];
    members[index] = { ...members[index], apiName: to.apiName, name: to.name, sprite: to.sprite };
    setTeam(members);
  }
}

// Annule seulement l'état « a évolué » (la forme évoluée reste capturée).
export function undoEvolve(apiName: string) {
  setPokemon({ [apiName]: { ...getPokemon(apiName), evolved: false } });
}

// Niveau et stats de mon Pokémon (null = effacer). Les noter suppose de
// l'avoir capturé.
export function setLevel(apiName: string, level: number | null) {
  const next: PokemonState = { ...getPokemon(apiName), seen: true, caught: true };
  if (level === null) delete next.level;
  else next.level = Math.min(100, Math.max(1, Math.round(level)));
  setPokemon({ [apiName]: next });
}

export function setStat(apiName: string, stat: string, value: number | null) {
  const current = getPokemon(apiName);
  const stats = { ...current.stats };
  if (value === null || Number.isNaN(value)) delete stats[stat];
  else stats[stat] = Math.max(0, Math.round(value));
  setPokemon({ [apiName]: { ...current, seen: true, caught: true, stats } });
}

// Avoir un Pokémon dans l'équipe suppose de l'avoir capturé.
export function addToTeam(apiName: string, name: string, sprite: string) {
  if (isTeamFull()) return;
  if (!getPokemon(apiName).caught) toggle(apiName, "caught");
  setTeam([
    ...data.team.members,
    { id: `${apiName}-${Date.now()}`, apiName, name, sprite, shiny: false },
  ]);
}

export function removeFromTeam(id: string) {
  setTeam(data.team.members.filter((m) => m.id !== id));
}

export function toggleMemberShiny(id: string) {
  setTeam(
    data.team.members.map((m) => (m.id === id ? { ...m, shiny: !m.shiny } : m)),
  );
}

// --- Synchronisation (voir sync.ts)

// Fusion de deux progressions (cet appareil + celle du compte en ligne) :
// pour chaque Pokémon, la modification la plus récente l'emporte ; l'équipe
// est prise en bloc, la plus récemment modifiée.
export function mergeProgress(a: ProgressData, b: Partial<ProgressData>): ProgressData {
  const pokemon = { ...a.pokemon };
  for (const [key, value] of Object.entries(b.pokemon ?? {})) {
    const current = pokemon[key];
    if (!current || (value.updatedAt ?? 0) > (current.updatedAt ?? 0)) pokemon[key] = value;
  }
  const teamB = b.team ?? EMPTY_DATA.team;
  return { pokemon, team: teamB.updatedAt > a.team.updatedAt ? teamB : a.team };
}

// Remplace toute la progression (après fusion avec celle du compte).
export function replaceAll(next: ProgressData) {
  commit(next);
}
