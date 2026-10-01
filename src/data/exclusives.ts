import type { Exclusive } from "../types";

// Pokémon qu'on ne trouve que dans une des deux versions de Let's Go. Ceux de
// l'autre version s'obtiennent par échange.
const PIKACHU_ONLY = [
  "sandshrew",
  "sandslash",
  "oddish",
  "gloom",
  "vileplume",
  "mankey",
  "primeape",
  "growlithe",
  "arcanine",
  "grimer",
  "muk",
  "scyther",
];

const EEVEE_ONLY = [
  "ekans",
  "arbok",
  "vulpix",
  "ninetales",
  "meowth",
  "persian",
  "bellsprout",
  "weepinbell",
  "victreebel",
  "koffing",
  "weezing",
  "pinsir",
];

export function getExclusive(apiName: string): Exclusive {
  if (PIKACHU_ONLY.includes(apiName)) return "pikachu";
  if (EEVEE_ONLY.includes(apiName)) return "eevee";
  return null;
}

export const EXCLUSIVE_LABELS = {
  pikachu: "Exclusif Let's Go Pikachu",
  eevee: "Exclusif Let's Go Évoli",
} as const;
