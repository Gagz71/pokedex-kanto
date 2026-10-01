import type { Encounter } from "./data/kantoEncounters";

// Version de Let's Go où un Pokémon est exclusif (voir data/exclusives.ts)
export type Exclusive = "pikachu" | "eevee" | null;

// Une ligne de l'index
export interface PokedexEntry {
  id: number; // numéro dans le Pokédex de Kanto de Let's Go
  name: string;
  apiName: string;
  isLegendary: boolean;
  isMythical: boolean;
  typeSlugs: string[];
  exclusive: Exclusive;
}

export interface EvoLink {
  apiName: string;
  name: string;
  sprite: string;
}

export interface EvolutionInfo extends EvoLink {
  condition: string; // comment on l'obtient depuis le stade précédent
  itemSlug?: string; // objet d'évolution (lien vers le filtre Objet)
}

// Un stade de la lignée : plusieurs Pokémon quand la chaîne se ramifie (Évoli)
export type EvolutionStage = EvolutionInfo[];

export interface TypeMatchup {
  type: string;
  slug: string;
  multiplier: number;
}

export interface MoveInfo {
  name: string;
  type: string;
  typeSlug: string;
  damageClass: string;
  power: number | null;
  accuracy: number | null;
  pp: number;
  effect: string;
  method: string; // « level-up », « machine »...
  level: number;
}

// Tout ce que la fiche d'un Pokémon affiche
export interface PokemonData {
  apiName: string;
  name: string;
  sprite: string;
  shinySprite: string;
  typeSlugs: string[];
  stats: { name: string; value: number }[];
  kantoNumber: number | null;
  isLegendary: boolean;
  isMythical: boolean;
  exclusive: Exclusive;
  height: number; // en mètres
  weight: number; // en kg
  femaleRatio: number | null; // 0-1, null = asexué
  captureRate: number; // 0-255
  genus: string;
  description: string;
  evolutions: EvolutionInfo[]; // évolutions directes
  previousEvolution: EvoLink | null;
  evolvedFromCondition: string;
  evolvedFromItem?: string;
  evolutionLine: EvolutionStage[];
  weaknesses: TypeMatchup[];
  resistances: TypeMatchup[];
  immunities: TypeMatchup[];
  strengths: TypeMatchup[];
  locations: Encounter[];
  moves: MoveInfo[];
}
