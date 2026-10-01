// Lieux de Kanto où l'on rencontre des Pokémon dans Let's Go Pikachu (les
// « locations » de PokeAPI), avec leur nom français et leur position sur la
// carte du jeu (public/kanto-map.jpg, 1024 × 724 px, récupérée sur
// Poképédia : Fichier:Kanto_LGPE.png). x / y en pixels de l'image, placés à
// l'œil sur la carte.
// Les rencontres de chaque Pokémon sont dans kantoEncounters.ts (généré).

export type PlaceKind = "ville" | "route" | "lieu";

export interface KantoPlace {
  name: string;
  kind: PlaceKind;
  x: number;
  y: number;
}

export const MAP_SRC = "/kanto-map.jpg";
export const MAP_WIDTH = 1024;
export const MAP_HEIGHT = 724;

export const KANTO_PLACES: Record<string, KantoPlace> = {
  // Villes
  "pallet-town": { name: "Bourg Palette", kind: "ville", x: 242, y: 462 },
  "cerulean-city": { name: "Azuria", kind: "ville", x: 662, y: 122 },
  "vermilion-city": { name: "Carmin sur Mer", kind: "ville", x: 640, y: 392 },
  "saffron-city": { name: "Safrania", kind: "ville", x: 662, y: 250 },
  "cinnabar-island": { name: "Cramois'Île", kind: "ville", x: 238, y: 672 },

  // Routes
  "kanto-route-1": { name: "Route 1", kind: "route", x: 250, y: 400 },
  "kanto-route-2": { name: "Route 2", kind: "route", x: 255, y: 240 },
  "kanto-route-3": { name: "Route 3", kind: "route", x: 345, y: 152 },
  "kanto-route-4": { name: "Route 4", kind: "route", x: 510, y: 112 },
  "kanto-route-5": { name: "Route 5", kind: "route", x: 662, y: 175 },
  "kanto-route-6": { name: "Route 6", kind: "route", x: 662, y: 335 },
  "kanto-route-7": { name: "Route 7", kind: "route", x: 555, y: 252 },
  "kanto-route-8": { name: "Route 8", kind: "route", x: 790, y: 252 },
  "kanto-route-9": { name: "Route 9", kind: "route", x: 780, y: 115 },
  "kanto-route-10": { name: "Route 10", kind: "route", x: 905, y: 175 },
  "kanto-route-11": { name: "Route 11", kind: "route", x: 790, y: 398 },
  "kanto-route-12": { name: "Route 12", kind: "route", x: 905, y: 425 },
  "kanto-route-13": { name: "Route 13", kind: "route", x: 830, y: 505 },
  "kanto-route-14": { name: "Route 14", kind: "route", x: 742, y: 528 },
  "kanto-route-15": { name: "Route 15", kind: "route", x: 650, y: 552 },
  "kanto-route-16": { name: "Route 16", kind: "route", x: 330, y: 246 },
  "kanto-route-17": { name: "Route 17", kind: "route", x: 347, y: 430 },
  "kanto-route-18": { name: "Route 18", kind: "route", x: 410, y: 545 },
  "kanto-sea-route-19": { name: "Route 19", kind: "route", x: 555, y: 625 },
  "kanto-sea-route-20": { name: "Route 20", kind: "route", x: 455, y: 650 },
  "kanto-sea-route-21": { name: "Route 21", kind: "route", x: 268, y: 565 },
  "kanto-route-22": { name: "Route 22", kind: "route", x: 180, y: 332 },
  "kanto-route-23": { name: "Route 23", kind: "route", x: 125, y: 235 },
  "kanto-route-24": { name: "Route 24", kind: "route", x: 642, y: 48 },
  "kanto-route-25": { name: "Route 25", kind: "route", x: 770, y: 42 },

  // Grottes, forêts et bâtiments
  "viridian-forest": { name: "Forêt de Jade", kind: "lieu", x: 215, y: 248 },
  "mt-moon": { name: "Mont Sélénite", kind: "lieu", x: 428, y: 82 },
  "cerulean-cave": { name: "Caverne Azurée", kind: "lieu", x: 600, y: 62 },
  "rock-tunnel": { name: "Grotte", kind: "lieu", x: 838, y: 198 },
  "kanto-power-plant": { name: "Centrale", kind: "lieu", x: 930, y: 132 },
  "pokemon-tower": { name: "Tour Pokémon", kind: "lieu", x: 915, y: 232 },
  "digletts-cave": { name: "Cave Taupiqueur", kind: "lieu", x: 728, y: 382 },
  "seafoam-islands": { name: "Îles Écume", kind: "lieu", x: 385, y: 682 },
  "pokemon-mansion": { name: "Manoir Pokémon", kind: "lieu", x: 198, y: 664 },
  "kanto-victory-road-1": { name: "Route Victoire", kind: "lieu", x: 125, y: 112 },
};

export const PLACE_GROUPS: { title: string; kind: PlaceKind }[] = [
  { title: "Villes", kind: "ville" },
  { title: "Routes", kind: "route" },
  { title: "Grottes et bâtiments", kind: "lieu" },
];
