// Objets d'évolution de Let's Go Pikachu et Pokémon qu'ils font évoluer.
// Noms et descriptions officiels en français repris de PokeAPI (textes du jeu
// pour les pierres). Les Bonbons Meltan ne sont pas un objet du sac : on les
// liste quand même, c'est le seul moyen d'obtenir Melmetal.

export interface EvolutionItemUse {
  from: string; // apiName du Pokémon à faire évoluer
  to: string; // apiName de l'évolution
  toName: string; // nom affiché de l'évolution
  note?: string; // condition en plus
}

export interface EvolutionItem {
  name: string;
  category: "Pierres" | "Objets spéciaux";
  description: string;
  sprite?: string; // image PokeAPI
  icon?: string; // à défaut d'image
  uses: EvolutionItemUse[];
}

const ITEM_SPRITE = (slug: string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${slug}.png`;

const STONE_DESCRIPTION =
  "Une pierre étrange qui fait évoluer certaines espèces de Pokémon.";

export const EVOLUTION_ITEMS: Record<string, EvolutionItem> = {
  "fire-stone": {
    name: "Pierre Feu",
    category: "Pierres",
    description: `${STONE_DESCRIPTION} Elle est jaune et orange.`,
    sprite: ITEM_SPRITE("fire-stone"),
    uses: [
      { from: "vulpix", to: "ninetales", toName: "Feunard" },
      { from: "growlithe", to: "arcanine", toName: "Arcanin" },
      { from: "eevee", to: "flareon", toName: "Pyroli" },
    ],
  },
  "water-stone": {
    name: "Pierre Eau",
    category: "Pierres",
    description: `${STONE_DESCRIPTION} Elle est de couleur bleue.`,
    sprite: ITEM_SPRITE("water-stone"),
    uses: [
      { from: "poliwhirl", to: "poliwrath", toName: "Tartard" },
      { from: "shellder", to: "cloyster", toName: "Crustabri" },
      { from: "staryu", to: "starmie", toName: "Staross" },
      { from: "eevee", to: "vaporeon", toName: "Aquali" },
    ],
  },
  "thunder-stone": {
    name: "Pierre Foudre",
    category: "Pierres",
    description: `${STONE_DESCRIPTION} Un éclair est dessiné dessus.`,
    sprite: ITEM_SPRITE("thunder-stone"),
    uses: [
      {
        from: "pikachu",
        to: "raichu",
        toName: "Raichu",
        note: "pas le Pikachu partenaire",
      },
      { from: "eevee", to: "jolteon", toName: "Voltali" },
    ],
  },
  "leaf-stone": {
    name: "Pierre Plante",
    category: "Pierres",
    description: `${STONE_DESCRIPTION} Une feuille est dessinée dessus.`,
    sprite: ITEM_SPRITE("leaf-stone"),
    uses: [
      { from: "gloom", to: "vileplume", toName: "Rafflesia" },
      { from: "weepinbell", to: "victreebel", toName: "Empiflor" },
      { from: "exeggcute", to: "exeggutor", toName: "Noadkoko" },
    ],
  },
  "moon-stone": {
    name: "Pierre Lune",
    category: "Pierres",
    description: `${STONE_DESCRIPTION} Elle est sombre comme la nuit.`,
    sprite: ITEM_SPRITE("moon-stone"),
    uses: [
      { from: "nidorina", to: "nidoqueen", toName: "Nidoqueen" },
      { from: "nidorino", to: "nidoking", toName: "Nidoking" },
      { from: "clefairy", to: "clefable", toName: "Mélodelfe" },
      { from: "jigglypuff", to: "wigglytuff", toName: "Grodoudou" },
    ],
  },
  "meltan-candy": {
    name: "Bonbon Meltan",
    category: "Objets spéciaux",
    description:
      "Bonbon qu'on obtient en transférant des Meltan depuis Pokémon GO. Il en faut 400 pour faire évoluer Meltan.",
    icon: "🍬",
    uses: [
      {
        from: "meltan",
        to: "melmetal",
        toName: "Melmetal",
        note: "400 bonbons",
      },
    ],
  },
};

// Objet d'évolution entre deux Pokémon, s'il y en a un.
export function findItemUse(from: string | undefined, to: string) {
  if (!from) return undefined;
  for (const [slug, item] of Object.entries(EVOLUTION_ITEMS)) {
    const use = item.uses.find((u) => u.from === from && u.to === to);
    if (use) return { slug, name: item.name, note: use.note };
  }
  return undefined;
}
