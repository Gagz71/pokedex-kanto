export const STAT_LABELS: Record<string, string> = {
  hp: "PV",
  attack: "Attaque",
  defense: "Défense",
  "special-attack": "Att. Spé",
  "special-defense": "Déf. Spé",
  speed: "Vitesse",
};

export const MOVE_METHOD_LABELS: Record<string, string> = {
  "level-up": "Montée de niveau",
  machine: "CT",
  tutor: "Enseignée",
  egg: "Œuf",
};

export const DAMAGE_CLASS_LABELS: Record<string, string> = {
  physical: "Physique",
  special: "Spéciale",
  status: "Statut",
};

// Modes de rencontre de Let's Go (champ method des encounters de PokeAPI)
export const ENCOUNTER_METHOD_LABELS: Record<string, string> = {
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
