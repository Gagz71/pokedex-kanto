// Formes d'Alola dans Let's Go et comment les obtenir. Dans le jeu, on ne
// les trouve pas à l'état sauvage : un personnage les échange contre la
// forme de Kanto (échange répétable), puis elles évoluent comme d'habitude.
// Source : Bulbapedia (« In-game trade », section Let's Go, et pages des
// espèces pour les règles d'évolution propres à Let's Go : pas d'heure du
// jour pour Rattata, niveau 28 au lieu de l'amitié pour Miaouss).
// Clé = apiName de l'espèce (forme de Kanto). La variante PokeAPI est
// `${apiName}-alola`.

export interface AlolanTrade {
  place: string; // clé de KANTO_PLACES
  give: string; // Pokémon à donner (forme de Kanto)
  level: number; // niveau du Pokémon reçu
  eeveeOnly?: boolean; // échange proposé seulement dans Let's Go Évoli
}

export interface AlolanForm {
  trade?: AlolanTrade;
  // Sinon : en faisant évoluer la forme d'Alola de la pré-évolution
  evolvesFrom?: { apiName: string; condition: string; itemSlug?: string };
}

export const ALOLAN_FORMS: Record<string, AlolanForm> = {
  rattata: { trade: { place: "cerulean-city", give: "Rattata", level: 12 } },
  raticate: { evolvesFrom: { apiName: "rattata", condition: "Atteindre le niveau 20" } },
  raichu: { trade: { place: "saffron-city", give: "Raichu", level: 30 } },
  sandshrew: { trade: { place: "celadon-city", give: "Sabelette", level: 27 } },
  sandslash: {
    evolvesFrom: {
      apiName: "sandshrew",
      condition: "Utiliser l'objet : Pierre Glace",
      itemSlug: "ice-stone",
    },
  },
  vulpix: {
    trade: { place: "celadon-city", give: "Goupix", level: 27, eeveeOnly: true },
  },
  ninetales: {
    evolvesFrom: {
      apiName: "vulpix",
      condition: "Utiliser l'objet : Pierre Glace",
      itemSlug: "ice-stone",
    },
  },
  diglett: { trade: { place: "lavender-town", give: "Taupiqueur", level: 25 } },
  dugtrio: { evolvesFrom: { apiName: "diglett", condition: "Atteindre le niveau 26" } },
  meowth: {
    trade: { place: "cinnabar-island", give: "Miaouss", level: 44, eeveeOnly: true },
  },
  persian: { evolvesFrom: { apiName: "meowth", condition: "Atteindre le niveau 28" } },
  geodude: { trade: { place: "vermilion-city", give: "Racaillou", level: 16 } },
  graveler: { evolvesFrom: { apiName: "geodude", condition: "Atteindre le niveau 25" } },
  golem: { evolvesFrom: { apiName: "graveler", condition: "Par échange" } },
  grimer: { trade: { place: "cinnabar-island", give: "Tadmorv", level: 44 } },
  muk: { evolvesFrom: { apiName: "grimer", condition: "Atteindre le niveau 38" } },
  exeggutor: { trade: { place: "indigo-plateau", give: "Noadkoko", level: 46 } },
  marowak: { trade: { place: "fuchsia-city", give: "Ossatueur", level: 38 } },
};

// La forme d'Alola s'obtient-elle dans Let's Go Pikachu sans autre joueur ?
// (Goupix et Miaouss : échange réservé à Let's Go Évoli, et leurs évolutions)
export function isAlolanInPikachu(apiName: string): boolean {
  const form = ALOLAN_FORMS[apiName];
  if (!form) return false;
  if (form.trade) return !form.trade.eeveeOnly;
  return form.evolvesFrom ? isAlolanInPikachu(form.evolvesFrom.apiName) : false;
}
