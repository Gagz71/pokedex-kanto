// Généré par scripts/fetch-encounters.mjs à partir de PokeAPI (version
// Let's Go Pikachu) : ne pas modifier à la main.
// Clé = apiName du Pokémon ; place = clé de KANTO_PLACES (kantoPlaces.ts).

export interface Encounter {
  place: string;
  area: string; // sous-zone (« 1er s-sol »), vide si aucune
  details: string; // « Niv. 3 à 4 · En liberté »
}

export const KANTO_ENCOUNTERS: Record<string, Encounter[]> = {
  "bulbasaur": [
    {
      "place": "cerulean-city",
      "area": "",
      "details": "Niv. 12 · Offert"
    },
    {
      "place": "viridian-forest",
      "area": "",
      "details": "Niv. 3 à 6 · En liberté, rare"
    }
  ],
  "charmander": [
    {
      "place": "rock-tunnel",
      "area": "RdC",
      "details": "Niv. 18 à 23 · En liberté, rare"
    },
    {
      "place": "rock-tunnel",
      "area": "1er s-sol",
      "details": "Niv. 18 à 23 · En liberté, rare"
    },
    {
      "place": "kanto-route-3",
      "area": "",
      "details": "Niv. 3 à 8 · En liberté, rare"
    },
    {
      "place": "kanto-route-4",
      "area": "",
      "details": "Niv. 7 à 12 · En liberté, rare"
    },
    {
      "place": "kanto-route-24",
      "area": "",
      "details": "Niv. 14 · Offert"
    }
  ],
  "charizard": [
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-sea-route-19",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-sea-route-20",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-1",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-2",
      "area": "sud, vers Jadielle",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-3",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-4",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-7",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-8",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-9",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-14",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-15",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-16",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-22",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-24",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-25",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-2",
      "area": "nord, vers Argenta",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    }
  ],
  "squirtle": [
    {
      "place": "seafoam-islands",
      "area": "RdC",
      "details": "Niv. 39 à 44 · En liberté, rare"
    },
    {
      "place": "seafoam-islands",
      "area": "1er s-sol",
      "details": "Niv. 39 à 44 · En liberté, rare"
    },
    {
      "place": "seafoam-islands",
      "area": "2e s-sol",
      "details": "Niv. 39 à 44 · En liberté, rare"
    },
    {
      "place": "seafoam-islands",
      "area": "3e s-sol",
      "details": "Niv. 39 à 44 · En liberté, rare"
    },
    {
      "place": "seafoam-islands",
      "area": "4e s-sol",
      "details": "Niv. 39 à 44 · En liberté, rare"
    },
    {
      "place": "vermilion-city",
      "area": "",
      "details": "Niv. 16 · Offert"
    },
    {
      "place": "kanto-route-24",
      "area": "",
      "details": "Niv. 7 à 12 · En liberté, rare"
    },
    {
      "place": "kanto-route-25",
      "area": "",
      "details": "Niv. 9 à 14 · En liberté, rare"
    }
  ],
  "caterpie": [
    {
      "place": "kanto-route-2",
      "area": "sud, vers Jadielle",
      "details": "Niv. 3 à 4 · En liberté"
    },
    {
      "place": "kanto-route-2",
      "area": "nord, vers Argenta",
      "details": "Niv. 3 à 8 · En liberté"
    },
    {
      "place": "viridian-forest",
      "area": "",
      "details": "Niv. 3 à 6 · En liberté"
    }
  ],
  "metapod": [
    {
      "place": "viridian-forest",
      "area": "",
      "details": "Niv. 3 à 6 · En liberté"
    }
  ],
  "butterfree": [
    {
      "place": "viridian-forest",
      "area": "",
      "details": "Niv. 3 à 6 · En liberté"
    }
  ],
  "weedle": [
    {
      "place": "kanto-route-2",
      "area": "sud, vers Jadielle",
      "details": "Niv. 3 à 4 · En liberté"
    },
    {
      "place": "kanto-route-2",
      "area": "nord, vers Argenta",
      "details": "Niv. 3 à 8 · En liberté"
    },
    {
      "place": "viridian-forest",
      "area": "",
      "details": "Niv. 3 à 6 · En liberté"
    }
  ],
  "kakuna": [
    {
      "place": "viridian-forest",
      "area": "",
      "details": "Niv. 3 à 6 · En liberté"
    }
  ],
  "pidgey": [
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-sea-route-19",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-sea-route-20",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-1",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-2",
      "area": "sud, vers Jadielle",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-5",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-7",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-8",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-14",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-15",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-16",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-24",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-25",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-2",
      "area": "nord, vers Argenta",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "viridian-forest",
      "area": "",
      "details": "Niv. 3 à 6 · En liberté"
    }
  ],
  "pidgeotto": [
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-sea-route-19",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-sea-route-20",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-1",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-2",
      "area": "sud, vers Jadielle",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-5",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-7",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-8",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-14",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-15",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-16",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-24",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-25",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-2",
      "area": "nord, vers Argenta",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    }
  ],
  "pidgeot": [
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-sea-route-19",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-sea-route-20",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-1",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-2",
      "area": "sud, vers Jadielle",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-5",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-7",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-8",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-14",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-15",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-16",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-24",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-25",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-2",
      "area": "nord, vers Argenta",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    }
  ],
  "rattata": [
    {
      "place": "kanto-route-1",
      "area": "",
      "details": "Niv. 3 à 4 · En liberté"
    },
    {
      "place": "kanto-route-2",
      "area": "sud, vers Jadielle",
      "details": "Niv. 3 à 4 · En liberté"
    },
    {
      "place": "kanto-route-3",
      "area": "",
      "details": "Niv. 3 à 8 · En liberté"
    },
    {
      "place": "kanto-route-4",
      "area": "",
      "details": "Niv. 7 à 12 · En liberté"
    },
    {
      "place": "kanto-route-5",
      "area": "",
      "details": "Niv. 11 à 16 · En liberté"
    },
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 11 à 16 · En liberté"
    },
    {
      "place": "kanto-route-7",
      "area": "",
      "details": "Niv. 22 à 27 · En liberté"
    },
    {
      "place": "kanto-route-8",
      "area": "",
      "details": "Niv. 22 à 27 · En liberté"
    },
    {
      "place": "kanto-route-9",
      "area": "",
      "details": "Niv. 17 à 22 · En liberté"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 13 à 18 · En liberté"
    },
    {
      "place": "kanto-route-16",
      "area": "",
      "details": "Niv. 31 à 36 · En liberté"
    },
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté"
    },
    {
      "place": "kanto-route-22",
      "area": "",
      "details": "Niv. 3 à 4 · En liberté"
    },
    {
      "place": "kanto-route-2",
      "area": "nord, vers Argenta",
      "details": "Niv. 3 à 8 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "RdC",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "1er ét.",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "2e ét.",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "sous-sol",
      "details": "Niv. 39 à 44 · En liberté"
    }
  ],
  "raticate": [
    {
      "place": "kanto-route-7",
      "area": "",
      "details": "Niv. 22 à 27 · En liberté"
    },
    {
      "place": "kanto-route-8",
      "area": "",
      "details": "Niv. 22 à 27 · En liberté"
    },
    {
      "place": "kanto-route-9",
      "area": "",
      "details": "Niv. 17 à 22 · En liberté"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 13 à 18 · En liberté"
    },
    {
      "place": "kanto-route-16",
      "area": "",
      "details": "Niv. 31 à 36 · En liberté"
    },
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "RdC",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "1er ét.",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "2e ét.",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "sous-sol",
      "details": "Niv. 39 à 44 · En liberté"
    }
  ],
  "spearow": [
    {
      "place": "kanto-route-3",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-4",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-9",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-22",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    }
  ],
  "fearow": [
    {
      "place": "kanto-route-3",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-4",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-9",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-22",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté, dans les airs"
    },
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté · En liberté, dans les airs"
    }
  ],
  "pikachu": [
    {
      "place": "pallet-town",
      "area": "",
      "details": "Niv. 5 · Offert"
    },
    {
      "place": "viridian-forest",
      "area": "",
      "details": "Niv. 3 à 6 · En liberté"
    }
  ],
  "sandshrew": [
    {
      "place": "kanto-route-3",
      "area": "",
      "details": "Niv. 3 à 8 · En liberté"
    },
    {
      "place": "kanto-route-4",
      "area": "",
      "details": "Niv. 7 à 12 · En liberté"
    }
  ],
  "nidoran-f": [
    {
      "place": "kanto-route-9",
      "area": "",
      "details": "Niv. 17 à 22 · En liberté"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "kanto-route-22",
      "area": "",
      "details": "Niv. 3 à 4 · En liberté"
    },
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 41 à 46 · En liberté"
    }
  ],
  "nidorina": [
    {
      "place": "kanto-route-9",
      "area": "",
      "details": "Niv. 17 à 22 · En liberté"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 41 à 46 · En liberté"
    }
  ],
  "nidoqueen": [
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 41 à 46 · En liberté"
    }
  ],
  "nidoran-m": [
    {
      "place": "kanto-route-9",
      "area": "",
      "details": "Niv. 17 à 22 · En liberté"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "kanto-route-22",
      "area": "",
      "details": "Niv. 3 à 4 · En liberté"
    },
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 41 à 46 · En liberté"
    }
  ],
  "nidorino": [
    {
      "place": "kanto-route-9",
      "area": "",
      "details": "Niv. 17 à 22 · En liberté"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 41 à 46 · En liberté"
    }
  ],
  "nidoking": [
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 41 à 46 · En liberté"
    }
  ],
  "clefairy": [
    {
      "place": "mt-moon",
      "area": "RdC",
      "details": "Niv. 5 à 10 · En liberté"
    },
    {
      "place": "mt-moon",
      "area": "1er s-sol",
      "details": "Niv. 5 à 10 · En liberté"
    },
    {
      "place": "mt-moon",
      "area": "2e s-sol",
      "details": "Niv. 5 à 10 · En liberté"
    }
  ],
  "clefable": [
    {
      "place": "mt-moon",
      "area": "2e s-sol",
      "details": "Niv. 5 à 10 · En liberté"
    }
  ],
  "jigglypuff": [
    {
      "place": "kanto-route-5",
      "area": "",
      "details": "Niv. 11 à 16 · En liberté"
    },
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 11 à 16 · En liberté"
    },
    {
      "place": "kanto-route-7",
      "area": "",
      "details": "Niv. 22 à 27 · En liberté"
    },
    {
      "place": "kanto-route-8",
      "area": "",
      "details": "Niv. 22 à 27 · En liberté"
    }
  ],
  "zubat": [
    {
      "place": "seafoam-islands",
      "area": "RdC",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "1er s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "2e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "3e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "4e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "mt-moon",
      "area": "RdC",
      "details": "Niv. 5 à 10 · En liberté"
    },
    {
      "place": "rock-tunnel",
      "area": "RdC",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "rock-tunnel",
      "area": "1er s-sol",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "RdC",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "digletts-cave",
      "area": "",
      "details": "Niv. 13 à 18 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "1er ét.",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "2e ét.",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "RdC",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "étage",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "sous-sol",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "mt-moon",
      "area": "1er s-sol",
      "details": "Niv. 5 à 10 · En liberté"
    },
    {
      "place": "mt-moon",
      "area": "2e s-sol",
      "details": "Niv. 5 à 10 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "2e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "3e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "4e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "5e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    }
  ],
  "golbat": [
    {
      "place": "seafoam-islands",
      "area": "RdC",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "1er s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "2e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "3e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "4e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "rock-tunnel",
      "area": "RdC",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "rock-tunnel",
      "area": "1er s-sol",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "RdC",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "1er ét.",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "2e ét.",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "RdC",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "étage",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "sous-sol",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "2e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "3e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "4e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "5e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    }
  ],
  "oddish": [
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 31 à 36 · En liberté"
    },
    {
      "place": "kanto-route-1",
      "area": "",
      "details": "Niv. 3 à 4 · En liberté"
    },
    {
      "place": "kanto-route-2",
      "area": "sud, vers Jadielle",
      "details": "Niv. 3 à 4 · En liberté"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-route-14",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-route-15",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté"
    },
    {
      "place": "kanto-route-24",
      "area": "",
      "details": "Niv. 7 à 12 · En liberté"
    },
    {
      "place": "kanto-route-25",
      "area": "",
      "details": "Niv. 9 à 14 · En liberté"
    },
    {
      "place": "kanto-route-2",
      "area": "nord, vers Argenta",
      "details": "Niv. 3 à 8 · En liberté"
    },
    {
      "place": "viridian-forest",
      "area": "",
      "details": "Niv. 3 à 6 · En liberté"
    }
  ],
  "gloom": [
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 31 à 36 · En liberté"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-route-14",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-route-15",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté"
    }
  ],
  "vileplume": [
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté"
    }
  ],
  "paras": [
    {
      "place": "mt-moon",
      "area": "RdC",
      "details": "Niv. 5 à 10 · En liberté"
    },
    {
      "place": "mt-moon",
      "area": "1er s-sol",
      "details": "Niv. 5 à 10 · En liberté"
    },
    {
      "place": "mt-moon",
      "area": "2e s-sol",
      "details": "Niv. 5 à 10 · En liberté"
    }
  ],
  "venonat": [
    {
      "place": "kanto-route-14",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-route-15",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-route-24",
      "area": "",
      "details": "Niv. 7 à 12 · En liberté"
    },
    {
      "place": "kanto-route-25",
      "area": "",
      "details": "Niv. 9 à 14 · En liberté"
    }
  ],
  "venomoth": [
    {
      "place": "kanto-route-14",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-route-15",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    }
  ],
  "diglett": [
    {
      "place": "digletts-cave",
      "area": "",
      "details": "Niv. 13 à 18 · En liberté"
    }
  ],
  "dugtrio": [
    {
      "place": "digletts-cave",
      "area": "",
      "details": "Niv. 13 à 18 · En liberté"
    }
  ],
  "persian": [
    {
      "place": "vermilion-city",
      "area": "",
      "details": "Niv. 32 · Offert"
    }
  ],
  "psyduck": [
    {
      "place": "kanto-route-4",
      "area": "",
      "details": "Niv. 7 à 12 · En liberté"
    },
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 11 à 16 · En liberté"
    },
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-route-24",
      "area": "",
      "details": "Niv. 7 à 12 · En liberté"
    },
    {
      "place": "kanto-route-25",
      "area": "",
      "details": "Niv. 9 à 14 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "RdC",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "sous-sol",
      "details": "Niv. 51 à 56 · En liberté"
    }
  ],
  "golduck": [
    {
      "place": "cerulean-cave",
      "area": "RdC",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "sous-sol",
      "details": "Niv. 51 à 56 · En liberté"
    }
  ],
  "mankey": [
    {
      "place": "kanto-route-3",
      "area": "",
      "details": "Niv. 3 à 8 · En liberté"
    },
    {
      "place": "kanto-route-4",
      "area": "",
      "details": "Niv. 7 à 12 · En liberté"
    }
  ],
  "growlithe": [
    {
      "place": "kanto-route-5",
      "area": "",
      "details": "Niv. 11 à 16 · En liberté"
    },
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 11 à 16 · En liberté"
    },
    {
      "place": "kanto-route-7",
      "area": "",
      "details": "Niv. 22 à 27 · En liberté"
    },
    {
      "place": "kanto-route-8",
      "area": "",
      "details": "Niv. 22 à 27 · En liberté"
    }
  ],
  "arcanine": [
    {
      "place": "kanto-route-7",
      "area": "",
      "details": "Niv. 22 à 27 · En liberté"
    },
    {
      "place": "kanto-route-8",
      "area": "",
      "details": "Niv. 22 à 27 · En liberté"
    }
  ],
  "poliwag": [
    {
      "place": "kanto-route-22",
      "area": "",
      "details": "Niv. 3 à 4 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-25",
      "area": "",
      "details": "Niv. 9 à 14 · En liberté, sur l'eau"
    },
    {
      "place": "cerulean-cave",
      "area": "RdC",
      "details": "Niv. 51 à 56 · En liberté, sur l'eau"
    },
    {
      "place": "cerulean-cave",
      "area": "sous-sol",
      "details": "Niv. 51 à 56 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 41 à 46 · En liberté, sur l'eau"
    }
  ],
  "poliwhirl": [
    {
      "place": "kanto-route-22",
      "area": "",
      "details": "Niv. 3 à 4 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-25",
      "area": "",
      "details": "Niv. 9 à 14 · En liberté, sur l'eau"
    },
    {
      "place": "cerulean-cave",
      "area": "RdC",
      "details": "Niv. 51 à 56 · En liberté, sur l'eau"
    },
    {
      "place": "cerulean-cave",
      "area": "sous-sol",
      "details": "Niv. 51 à 56 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 41 à 46 · En liberté, sur l'eau"
    }
  ],
  "poliwrath": [
    {
      "place": "cerulean-cave",
      "area": "RdC",
      "details": "Niv. 51 à 56 · En liberté, sur l'eau"
    },
    {
      "place": "cerulean-cave",
      "area": "sous-sol",
      "details": "Niv. 51 à 56 · En liberté, sur l'eau"
    }
  ],
  "abra": [
    {
      "place": "kanto-route-5",
      "area": "",
      "details": "Niv. 11 à 16 · En liberté"
    },
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 11 à 16 · En liberté"
    },
    {
      "place": "kanto-route-7",
      "area": "",
      "details": "Niv. 22 à 27 · En liberté"
    },
    {
      "place": "kanto-route-8",
      "area": "",
      "details": "Niv. 22 à 27 · En liberté"
    }
  ],
  "kadabra": [
    {
      "place": "kanto-route-7",
      "area": "",
      "details": "Niv. 22 à 27 · En liberté"
    },
    {
      "place": "kanto-route-8",
      "area": "",
      "details": "Niv. 22 à 27 · En liberté"
    }
  ],
  "machop": [
    {
      "place": "rock-tunnel",
      "area": "RdC",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "rock-tunnel",
      "area": "1er s-sol",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "RdC",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "1er ét.",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "2e ét.",
      "details": "Niv. 41 à 46 · En liberté"
    }
  ],
  "machoke": [
    {
      "place": "kanto-victory-road-1",
      "area": "RdC",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "1er ét.",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "2e ét.",
      "details": "Niv. 41 à 46 · En liberté"
    }
  ],
  "tentacool": [
    {
      "place": "seafoam-islands",
      "area": "3e s-sol",
      "details": "Niv. 39 à 44 · En liberté, sur l'eau"
    },
    {
      "place": "seafoam-islands",
      "area": "4e s-sol",
      "details": "Niv. 39 à 44 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 31 à 36 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-sea-route-19",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-sea-route-20",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-4",
      "area": "",
      "details": "Niv. 7 à 12 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 18 à 23 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 13 à 18 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-24",
      "area": "",
      "details": "Niv. 7 à 12 · En liberté, sur l'eau"
    }
  ],
  "tentacruel": [
    {
      "place": "seafoam-islands",
      "area": "3e s-sol",
      "details": "Niv. 39 à 44 · En liberté, sur l'eau"
    },
    {
      "place": "seafoam-islands",
      "area": "4e s-sol",
      "details": "Niv. 39 à 44 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 31 à 36 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-sea-route-19",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-sea-route-20",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-4",
      "area": "",
      "details": "Niv. 7 à 12 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 18 à 23 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 13 à 18 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-24",
      "area": "",
      "details": "Niv. 7 à 12 · En liberté, sur l'eau"
    }
  ],
  "geodude": [
    {
      "place": "mt-moon",
      "area": "RdC",
      "details": "Niv. 5 à 10 · En liberté"
    },
    {
      "place": "rock-tunnel",
      "area": "RdC",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "rock-tunnel",
      "area": "1er s-sol",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "RdC",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "1er ét.",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "2e ét.",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "RdC",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "étage",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "sous-sol",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "mt-moon",
      "area": "1er s-sol",
      "details": "Niv. 5 à 10 · En liberté"
    },
    {
      "place": "mt-moon",
      "area": "2e s-sol",
      "details": "Niv. 5 à 10 · En liberté"
    }
  ],
  "graveler": [
    {
      "place": "rock-tunnel",
      "area": "RdC",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "rock-tunnel",
      "area": "1er s-sol",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "RdC",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "1er ét.",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "2e ét.",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "RdC",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "étage",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "sous-sol",
      "details": "Niv. 51 à 56 · En liberté"
    }
  ],
  "ponyta": [
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    }
  ],
  "rapidash": [
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    }
  ],
  "slowpoke": [
    {
      "place": "seafoam-islands",
      "area": "RdC",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "1er s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "2e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "3e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "4e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    }
  ],
  "slowbro": [
    {
      "place": "seafoam-islands",
      "area": "RdC",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "1er s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "2e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "3e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "4e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    }
  ],
  "magnemite": [
    {
      "place": "kanto-power-plant",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté"
    }
  ],
  "magneton": [
    {
      "place": "kanto-power-plant",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté"
    }
  ],
  "farfetchd": [
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 31 à 36 · En liberté"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    }
  ],
  "doduo": [
    {
      "place": "kanto-route-16",
      "area": "",
      "details": "Niv. 31 à 36 · En liberté"
    },
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    }
  ],
  "dodrio": [
    {
      "place": "kanto-route-16",
      "area": "",
      "details": "Niv. 31 à 36 · En liberté"
    },
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    }
  ],
  "seel": [
    {
      "place": "seafoam-islands",
      "area": "RdC",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "1er s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "2e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "3e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "4e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    }
  ],
  "dewgong": [
    {
      "place": "seafoam-islands",
      "area": "RdC",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "1er s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "2e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "3e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "4e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    }
  ],
  "grimer": [
    {
      "place": "kanto-power-plant",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "RdC",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "1er ét.",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "2e ét.",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "sous-sol",
      "details": "Niv. 39 à 44 · En liberté"
    }
  ],
  "muk": [
    {
      "place": "kanto-power-plant",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "RdC",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "1er ét.",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "2e ét.",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "sous-sol",
      "details": "Niv. 39 à 44 · En liberté"
    }
  ],
  "shellder": [
    {
      "place": "seafoam-islands",
      "area": "3e s-sol",
      "details": "Niv. 39 à 44 · En liberté, sur l'eau"
    },
    {
      "place": "seafoam-islands",
      "area": "4e s-sol",
      "details": "Niv. 39 à 44 · En liberté, sur l'eau"
    }
  ],
  "cloyster": [
    {
      "place": "seafoam-islands",
      "area": "3e s-sol",
      "details": "Niv. 39 à 44 · En liberté, sur l'eau"
    },
    {
      "place": "seafoam-islands",
      "area": "4e s-sol",
      "details": "Niv. 39 à 44 · En liberté, sur l'eau"
    }
  ],
  "gastly": [
    {
      "place": "pokemon-tower",
      "area": "2e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "3e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "4e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "5e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    }
  ],
  "haunter": [
    {
      "place": "pokemon-tower",
      "area": "2e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "3e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "4e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "5e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    }
  ],
  "onix": [
    {
      "place": "mt-moon",
      "area": "RdC",
      "details": "Niv. 5 à 10 · En liberté"
    },
    {
      "place": "rock-tunnel",
      "area": "RdC",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "rock-tunnel",
      "area": "1er s-sol",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "RdC",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "1er ét.",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "2e ét.",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "mt-moon",
      "area": "1er s-sol",
      "details": "Niv. 5 à 10 · En liberté"
    },
    {
      "place": "mt-moon",
      "area": "2e s-sol",
      "details": "Niv. 5 à 10 · En liberté"
    }
  ],
  "drowzee": [
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 13 à 18 · En liberté"
    }
  ],
  "krabby": [
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 31 à 36 · En liberté"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    }
  ],
  "kingler": [
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 31 à 36 · En liberté"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    }
  ],
  "voltorb": [
    {
      "place": "kanto-power-plant",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté"
    }
  ],
  "electrode": [
    {
      "place": "kanto-power-plant",
      "area": "",
      "details": "Niv. 37 à 43 · Rencontre unique · En liberté"
    }
  ],
  "exeggcute": [
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 41 à 46 · En liberté"
    }
  ],
  "exeggutor": [
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 41 à 46 · En liberté"
    }
  ],
  "cubone": [
    {
      "place": "rock-tunnel",
      "area": "RdC",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "rock-tunnel",
      "area": "1er s-sol",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "2e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "3e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "4e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    },
    {
      "place": "pokemon-tower",
      "area": "5e ét.",
      "details": "Niv. 27 à 32 · En liberté"
    }
  ],
  "hitmonlee": [
    {
      "place": "kanto-victory-road-1",
      "area": "1er ét.",
      "details": "Niv. 41 à 46 · En liberté, rare"
    },
    {
      "place": "saffron-city",
      "area": "Dojo de Combat",
      "details": "Niv. 30 · Offert"
    }
  ],
  "hitmonchan": [
    {
      "place": "kanto-victory-road-1",
      "area": "2e ét.",
      "details": "Niv. 41 à 46 · En liberté, rare"
    },
    {
      "place": "saffron-city",
      "area": "Dojo de Combat",
      "details": "Niv. 30 · Offert"
    }
  ],
  "lickitung": [
    {
      "place": "cerulean-cave",
      "area": "RdC",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "étage",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "sous-sol",
      "details": "Niv. 51 à 56 · En liberté"
    }
  ],
  "rhyhorn": [
    {
      "place": "rock-tunnel",
      "area": "RdC",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "rock-tunnel",
      "area": "1er s-sol",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "RdC",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "1er ét.",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "2e ét.",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "RdC",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "étage",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "sous-sol",
      "details": "Niv. 51 à 56 · En liberté"
    }
  ],
  "rhydon": [
    {
      "place": "kanto-victory-road-1",
      "area": "RdC",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "1er ét.",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "2e ét.",
      "details": "Niv. 41 à 46 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "RdC",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "étage",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "sous-sol",
      "details": "Niv. 51 à 56 · En liberté"
    }
  ],
  "chansey": [
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 31 à 36 · En liberté, rare"
    },
    {
      "place": "mt-moon",
      "area": "RdC",
      "details": "Niv. 5 à 10 · En liberté, rare"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "RdC",
      "details": "Niv. 41 à 46 · En liberté, rare"
    },
    {
      "place": "kanto-route-5",
      "area": "",
      "details": "Niv. 11 à 16 · En liberté, rare"
    },
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 11 à 16 · En liberté, rare"
    },
    {
      "place": "kanto-route-8",
      "area": "",
      "details": "Niv. 22 à 27 · En liberté, rare"
    },
    {
      "place": "kanto-route-9",
      "area": "",
      "details": "Niv. 17 à 22 · En liberté, rare"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 18 à 23 · En liberté, rare"
    },
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 13 à 18 · En liberté, rare"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté, rare"
    },
    {
      "place": "kanto-route-14",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté, rare"
    },
    {
      "place": "kanto-route-15",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté, rare"
    },
    {
      "place": "kanto-route-16",
      "area": "",
      "details": "Niv. 31 à 36 · En liberté, rare"
    },
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté, rare"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté, rare"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté, rare"
    },
    {
      "place": "digletts-cave",
      "area": "",
      "details": "Niv. 13 à 18 · En liberté, rare"
    },
    {
      "place": "cerulean-cave",
      "area": "étage",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "mt-moon",
      "area": "1er s-sol",
      "details": "Niv. 5 à 10 · En liberté, rare"
    },
    {
      "place": "mt-moon",
      "area": "2e s-sol",
      "details": "Niv. 5 à 10 · En liberté, rare"
    },
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 41 à 46 · En liberté, rare"
    },
    {
      "place": "kanto-power-plant",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté, rare"
    },
    {
      "place": "pokemon-tower",
      "area": "2e ét.",
      "details": "Niv. 27 à 32 · En liberté, rare"
    },
    {
      "place": "pokemon-tower",
      "area": "3e ét.",
      "details": "Niv. 27 à 32 · En liberté, rare"
    },
    {
      "place": "pokemon-tower",
      "area": "4e ét.",
      "details": "Niv. 27 à 32 · En liberté, rare"
    },
    {
      "place": "pokemon-tower",
      "area": "5e ét.",
      "details": "Niv. 27 à 32 · En liberté, rare"
    },
    {
      "place": "pokemon-mansion",
      "area": "RdC",
      "details": "Niv. 39 à 44 · En liberté, rare"
    },
    {
      "place": "pokemon-mansion",
      "area": "1er ét.",
      "details": "Niv. 39 à 44 · En liberté, rare"
    },
    {
      "place": "pokemon-mansion",
      "area": "2e ét.",
      "details": "Niv. 39 à 44 · En liberté, rare"
    },
    {
      "place": "pokemon-mansion",
      "area": "sous-sol",
      "details": "Niv. 39 à 44 · En liberté, rare"
    }
  ],
  "tangela": [
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté"
    }
  ],
  "kangaskhan": [
    {
      "place": "rock-tunnel",
      "area": "RdC",
      "details": "Niv. 18 à 23 · En liberté"
    },
    {
      "place": "rock-tunnel",
      "area": "1er s-sol",
      "details": "Niv. 18 à 23 · En liberté"
    }
  ],
  "horsea": [
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 31 à 36 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 13 à 18 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté, sur l'eau"
    }
  ],
  "seadra": [
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 31 à 36 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 13 à 18 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté, sur l'eau"
    }
  ],
  "goldeen": [
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 11 à 16 · En liberté, sur l'eau"
    }
  ],
  "seaking": [
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 11 à 16 · En liberté, sur l'eau"
    }
  ],
  "staryu": [
    {
      "place": "kanto-sea-route-19",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté, sur l'eau"
    }
  ],
  "starmie": [
    {
      "place": "kanto-sea-route-19",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté, sur l'eau"
    }
  ],
  "mr-mime": [
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 13 à 18 · En liberté"
    }
  ],
  "scyther": [
    {
      "place": "kanto-route-14",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-route-15",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    }
  ],
  "jynx": [
    {
      "place": "seafoam-islands",
      "area": "RdC",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "1er s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "2e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "3e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "seafoam-islands",
      "area": "4e s-sol",
      "details": "Niv. 39 à 44 · En liberté"
    }
  ],
  "electabuzz": [
    {
      "place": "kanto-power-plant",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté"
    }
  ],
  "magmar": [
    {
      "place": "pokemon-mansion",
      "area": "RdC",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "1er ét.",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "2e ét.",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "sous-sol",
      "details": "Niv. 39 à 44 · En liberté"
    }
  ],
  "tauros": [
    {
      "place": "kanto-route-14",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    },
    {
      "place": "kanto-route-15",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    }
  ],
  "magikarp": [
    {
      "place": "seafoam-islands",
      "area": "3e s-sol",
      "details": "Niv. 39 à 44 · En liberté, sur l'eau"
    },
    {
      "place": "seafoam-islands",
      "area": "4e s-sol",
      "details": "Niv. 39 à 44 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 31 à 36 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-sea-route-19",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-sea-route-20",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-4",
      "area": "",
      "details": "Niv. 5 à 12 · En liberté, sur l'eau · Offert"
    },
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 11 à 16 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 18 à 23 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 13 à 18 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-22",
      "area": "",
      "details": "Niv. 3 à 4 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-24",
      "area": "",
      "details": "Niv. 7 à 12 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-25",
      "area": "",
      "details": "Niv. 9 à 14 · En liberté, sur l'eau"
    },
    {
      "place": "cerulean-cave",
      "area": "RdC",
      "details": "Niv. 51 à 56 · En liberté, sur l'eau"
    },
    {
      "place": "cerulean-cave",
      "area": "sous-sol",
      "details": "Niv. 51 à 56 · En liberté, sur l'eau"
    },
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 41 à 46 · En liberté, sur l'eau"
    }
  ],
  "gyarados": [
    {
      "place": "kanto-sea-route-20",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté, sur l'eau"
    }
  ],
  "lapras": [
    {
      "place": "kanto-sea-route-19",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté sur l'eau, rare"
    },
    {
      "place": "kanto-sea-route-20",
      "area": "",
      "details": "Niv. 37 à 42 · En liberté sur l'eau, rare"
    }
  ],
  "ditto": [
    {
      "place": "cerulean-cave",
      "area": "RdC",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "étage",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "cerulean-cave",
      "area": "sous-sol",
      "details": "Niv. 51 à 56 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "RdC",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "1er ét.",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "2e ét.",
      "details": "Niv. 39 à 44 · En liberté"
    },
    {
      "place": "pokemon-mansion",
      "area": "sous-sol",
      "details": "Niv. 39 à 44 · En liberté"
    }
  ],
  "eevee": [
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 33 à 38 · En liberté"
    }
  ],
  "porygon": [
    {
      "place": "kanto-route-7",
      "area": "",
      "details": "Niv. 22 à 27 · En liberté, rare"
    },
    {
      "place": "saffron-city",
      "area": "Sylphe SARL",
      "details": "Niv. 36 · Offert"
    }
  ],
  "omanyte": [
    {
      "place": "cinnabar-island",
      "area": "Laboratoire",
      "details": "Niv. 44 · Offert"
    }
  ],
  "kabuto": [
    {
      "place": "cinnabar-island",
      "area": "Laboratoire",
      "details": "Niv. 44 · Offert"
    }
  ],
  "aerodactyl": [
    {
      "place": "cinnabar-island",
      "area": "Laboratoire",
      "details": "Niv. 44 · Offert"
    }
  ],
  "snorlax": [
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 34 · Rencontre unique (Pokéflûte)"
    },
    {
      "place": "kanto-route-16",
      "area": "",
      "details": "Niv. 34 · Rencontre unique (Pokéflûte)"
    },
    {
      "place": "cerulean-cave",
      "area": "RdC",
      "details": "Niv. 51 à 56 · En liberté, rare"
    },
    {
      "place": "cerulean-cave",
      "area": "étage",
      "details": "Niv. 51 à 56 · En liberté, rare"
    },
    {
      "place": "cerulean-cave",
      "area": "sous-sol",
      "details": "Niv. 51 à 56 · En liberté, rare"
    }
  ],
  "articuno": [
    {
      "place": "seafoam-islands",
      "area": "4e s-sol",
      "details": "Niv. 50 · Rencontre unique"
    },
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-sea-route-19",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-sea-route-20",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-1",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-2",
      "area": "sud, vers Jadielle",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-3",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-4",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-7",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-8",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-9",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-14",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-15",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-16",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-22",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-24",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-25",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-2",
      "area": "nord, vers Argenta",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    }
  ],
  "zapdos": [
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-sea-route-19",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-sea-route-20",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-1",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-2",
      "area": "sud, vers Jadielle",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-3",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-4",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-7",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-8",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-9",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-14",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-15",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-16",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-22",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-24",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-25",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-2",
      "area": "nord, vers Argenta",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-power-plant",
      "area": "",
      "details": "Niv. 50 · Rencontre unique"
    }
  ],
  "moltres": [
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-sea-route-19",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-sea-route-20",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-1",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-2",
      "area": "sud, vers Jadielle",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-3",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-4",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-7",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-8",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-9",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-14",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-15",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-16",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-22",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-24",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-25",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-victory-road-1",
      "area": "1er ét.",
      "details": "Niv. 50 · Rencontre unique"
    },
    {
      "place": "kanto-route-2",
      "area": "nord, vers Argenta",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    }
  ],
  "dratini": [
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 18 à 23 · En liberté, sur l'eau"
    }
  ],
  "dragonair": [
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 18 à 23 · En liberté, sur l'eau"
    }
  ],
  "dragonite": [
    {
      "place": "kanto-route-12",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-sea-route-19",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-sea-route-20",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-1",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-2",
      "area": "sud, vers Jadielle",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-3",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-4",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-6",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-7",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-8",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-9",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-10",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-11",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-13",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-14",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-15",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-16",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-17",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-18",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-sea-route-21",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-22",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-24",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-25",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-2",
      "area": "nord, vers Argenta",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    },
    {
      "place": "kanto-route-23",
      "area": "",
      "details": "Niv. 3 à 56 · En liberté dans les airs, rare"
    }
  ],
  "mewtwo": [
    {
      "place": "cerulean-cave",
      "area": "sous-sol",
      "details": "Niv. 70 · Rencontre unique"
    }
  ]
};
