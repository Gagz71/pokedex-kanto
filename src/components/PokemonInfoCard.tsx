import { useState, type CSSProperties, type FormEvent } from "react";
import type { PokemonData, TypeMatchup } from "../types";
import { TYPE_COLORS, TYPE_LABELS } from "../data/types";
import { EVOLUTION_ITEMS } from "../data/evolutionItems";
import { EXCLUSIVE_LABELS } from "../data/exclusives";
import { MOVE_METHOD_LABELS } from "../data/labels";
import {
  getPokemon,
  setLevel,
  setStat,
  statTotal,
  useProgress,
} from "../stores/progress";
import "./PokemonInfoCard.css";

export type InfoView = "accueil" | "stats" | "type" | "evolution" | "lieux" | "capacites";

const VIEWS: { value: InfoView; label: string }[] = [
  { value: "accueil", label: "Accueil" },
  { value: "stats", label: "Stats" },
  { value: "type", label: "Type" },
  { value: "evolution", label: "Évolution" },
  { value: "lieux", label: "Lieux" },
  { value: "capacites", label: "Capacités" },
];

interface PokemonInfoCardProps {
  pokemon: PokemonData;
  view: InfoView;
  onChangeView: (view: InfoView) => void;
  onSelect: (apiName: string) => void;
  onFilterType: (slug: string) => void;
  onFilterItem: (slug: string) => void;
}

const formatNumber = (n: number) =>
  n.toLocaleString("fr-FR", { maximumFractionDigits: 1 });

function genderLabel(ratio: number | null): string {
  if (ratio === null) return "Asexué";
  if (ratio === 0) return "100 % ♂";
  if (ratio === 1) return "100 % ♀";
  return `${formatNumber((1 - ratio) * 100)} % ♂ · ${formatNumber(ratio * 100)} % ♀`;
}

// Pokémon qu'on n'attrape pas dans les hautes herbes de Kanto
const SPECIAL_SOURCES: Record<string, string> = {
  meltan: "S'obtient depuis Pokémon GO, en transférant des Pokémon vers le Parc GO de Parmanie.",
  melmetal: "S'obtient en faisant évoluer Meltan avec 400 Bonbons Meltan (Pokémon GO).",
  mew: "Offert avec l'accessoire Poké Ball Plus.",
};

// « Utiliser l'objet : Pierre Foudre (pas le Pikachu partenaire) » ->
// « (pas le Pikachu partenaire) » : la fin de la condition, après le nom de
// l'objet affiché en lien.
function conditionRest(condition: string, itemSlug: string): string {
  const prefix = `Utiliser l'objet : ${EVOLUTION_ITEMS[itemSlug]?.name ?? ""}`;
  return condition.startsWith(prefix) ? condition.slice(prefix.length) : "";
}

// Fiche de droite : en-tête (nom, niveau de mon Pokémon), onglets, contenu.
// App lui donne key={apiName} : changer de Pokémon repart d'un état neuf
// (édition du niveau, mode des stats).
function PokemonInfoCard({
  pokemon,
  view,
  onChangeView,
  onSelect,
  onFilterType,
  onFilterItem,
}: PokemonInfoCardProps) {
  useProgress(); // redessine la fiche quand la progression change
  const mine = getPokemon(pokemon.apiName);
  const accent = TYPE_COLORS[pokemon.typeSlugs[0]] ?? "#A8A77A";

  const [statsMode, setStatsMode] = useState<"base" | "mine">("base");
  const [editingLevel, setEditingLevel] = useState(false);
  const [levelDraft, setLevelDraft] = useState(1);
  const [levelHint, setLevelHint] = useState(false);

  function openLevel() {
    if (!mine.caught) {
      setLevelHint(true);
      setTimeout(() => setLevelHint(false), 3500);
      return;
    }
    setLevelDraft(mine.level ?? 1);
    setEditingLevel(true);
  }
  function stepLevel(delta: number) {
    setLevelDraft((value) => Math.min(100, Math.max(1, (value || 1) + delta)));
  }
  function saveLevel(e: FormEvent) {
    e.preventDefault();
    setLevel(pokemon.apiName, levelDraft >= 1 ? levelDraft : null);
    setEditingLevel(false);
  }
  function clearLevel() {
    setLevel(pokemon.apiName, null);
    setEditingLevel(false);
  }

  function saveStat(stat: string, raw: string) {
    setStat(pokemon.apiName, stat, raw.trim() === "" ? null : Number(raw));
  }

  const baseTotal = pokemon.stats.reduce((sum, s) => sum + s.value, 0);
  // Échelle des barres de mes stats : la plus haute valeur saisie
  const mineScale = Math.max(1, ...Object.values(mine.stats ?? {}));
  const rarity = pokemon.isMythical ? "Fabuleux" : pokemon.isLegendary ? "Légendaire" : null;
  const isFinalStage = pokemon.evolutions.length === 0 && pokemon.evolutionLine.length > 1;

  const matchupGroup = (
    label: string,
    cls: string,
    list: TypeMatchup[],
    showMultiplier: boolean,
  ) =>
    list.length > 0 && (
      <div className="matchup-group">
        <span className={`matchup-label ${cls}`}>{label}</span>
        <div className="matchup-pills">
          {list.map((m) => (
            <span
              key={m.slug}
              className={`matchup-pill ${cls}`}
              onClick={() => onFilterType(m.slug)}
            >
              {m.type} {showMultiplier && <b>×{m.multiplier}</b>}
            </span>
          ))}
        </div>
      </div>
    );

  const itemCondition = (condition: string, itemSlug: string) => (
    <>
      Utiliser l'objet :{" "}
      <button
        className="item-link"
        onClick={(e) => {
          e.stopPropagation();
          onFilterItem(itemSlug);
        }}
      >
        {EVOLUTION_ITEMS[itemSlug]?.name}
      </button>
      {conditionRest(condition, itemSlug)}
    </>
  );

  return (
    <div className="card-frame" style={{ "--type-accent": accent } as CSSProperties}>
      <div className="inner">
        <div className="info-header">
          <span className="info-name">{pokemon.name}</span>
          {/* Niveau de mon Pokémon */}
          <div className="hp-badge">
            {editingLevel ? (
              <form className="level-editor" onSubmit={saveLevel}>
                <button type="button" aria-label="Niveau -1" onClick={() => stepLevel(-1)}>
                  −
                </button>
                <input
                  value={levelDraft}
                  onChange={(e) => setLevelDraft(Number(e.target.value))}
                  type="number"
                  min={1}
                  max={100}
                  inputMode="numeric"
                  aria-label="Niveau"
                />
                <button type="button" aria-label="Niveau +1" onClick={() => stepLevel(1)}>
                  +
                </button>
                <button type="submit" className="ok">
                  OK
                </button>
                {mine.level && (
                  <button type="button" className="clear" onClick={clearLevel}>
                    Effacer
                  </button>
                )}
              </form>
            ) : (
              <button
                className={`level-button ${mine.level ? "" : "empty"}`}
                title={mine.caught ? "Modifier le niveau" : "Capture-le pour noter son niveau"}
                onClick={openLevel}
              >
                <span className="hp-label">Niv.</span>
                <span className="hp-value">{mine.level ?? "—"}</span>
              </button>
            )}
            <span className="type-dot"></span>
          </div>
        </div>
        {levelHint && (
          <p className="level-hint">
            Coche « Capturé » sous l'illustration pour noter son niveau.
          </p>
        )}

        <div className="info-tabs">
          {VIEWS.map((v) => (
            <button
              key={v.value}
              className={view === v.value ? "active" : ""}
              onClick={() => onChangeView(v.value)}
            >
              {v.label}
            </button>
          ))}
        </div>

        <div className="info-window">
          {view === "accueil" && (
            <div className="accueil">
              <div className="badges">
                {pokemon.kantoNumber && (
                  <span className="badge">
                    N° {String(pokemon.kantoNumber).padStart(3, "0")} du Pokédex de Kanto
                  </span>
                )}
                {rarity && <span className="badge badge-legend">★ {rarity}</span>}
                {pokemon.exclusive && (
                  <span className={`badge badge-${pokemon.exclusive}`}>
                    {EXCLUSIVE_LABELS[pokemon.exclusive]}
                  </span>
                )}
              </div>

              <div className="dex-entry">
                <p className="genus">{pokemon.genus}</p>
                <p className="dex-text">{pokemon.description}</p>
              </div>

              <div className="facts">
                <div className="fact">
                  <span className="fact-label">Taille</span>
                  <span className="fact-value">{formatNumber(pokemon.height)} m</span>
                </div>
                <div className="fact">
                  <span className="fact-label">Poids</span>
                  <span className="fact-value">{formatNumber(pokemon.weight)} kg</span>
                </div>
                <div className="fact fact-wide">
                  <span className="fact-label">Sexe</span>
                  <span className="fact-value">{genderLabel(pokemon.femaleRatio)}</span>
                  {pokemon.femaleRatio !== null && (
                    <div className="gender-bar">
                      <div
                        className="gender-bar-male"
                        style={{ width: `${(1 - pokemon.femaleRatio) * 100}%` }}
                      ></div>
                    </div>
                  )}
                </div>
                <div className="fact fact-wide">
                  <span className="fact-label">Taux de capture</span>
                  <span className="fact-value">
                    {pokemon.captureRate}
                    <small> / 255</small>
                  </span>
                  <span className="fact-note">
                    Plus il est haut, plus le Pokémon est facile à attraper.
                  </span>
                </div>
              </div>

              {pokemon.locations.length > 0 && (
                <div className="where">
                  <span className="fact-label">Où le trouver</span>
                  <div className="where-chips">
                    {[...new Set(pokemon.locations.map((l) => l.name))].map((name) => (
                      <button key={name} className="where-chip" onClick={() => onChangeView("lieux")}>
                        {name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {view === "stats" && (
            <div className="stats-view">
              <div className="stats-mode" role="tablist">
                <button
                  role="tab"
                  aria-selected={statsMode === "base"}
                  className={statsMode === "base" ? "active" : ""}
                  onClick={() => setStatsMode("base")}
                >
                  Base
                </button>
                <button
                  role="tab"
                  aria-selected={statsMode === "mine"}
                  className={statsMode === "mine" ? "active" : ""}
                  onClick={() => setStatsMode("mine")}
                >
                  Mon Pokémon
                </button>
              </div>

              {statsMode === "base" ? (
                <>
                  {pokemon.stats.map((stat) => (
                    <div key={stat.name} className="stat-row">
                      <div className="stat-head">
                        <span className="stat-name">{stat.name}</span>
                        <span className="stat-value">{stat.value}</span>
                      </div>
                      <div className="stat-bar">
                        <div
                          className="stat-bar-fill"
                          style={{ width: `${Math.min(100, (stat.value / 255) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  <p className="stat-total">
                    Total <b>{baseTotal}</b>
                  </p>
                </>
              ) : !mine.caught ? (
                <p className="stats-empty">
                  Coche « Capturé » sous l'illustration, puis note ici les stats
                  de ton {pokemon.name} telles que le jeu les affiche.
                </p>
              ) : (
                <>
                  <p className="stats-help">
                    Recopie les stats affichées dans le résumé de ton Pokémon
                    (niveau {mine.level ?? "?"}).
                  </p>
                  {pokemon.stats.map((stat) => (
                    <div key={stat.name} className="stat-row">
                      <div className="stat-head">
                        <label className="stat-name" htmlFor={`mine-${stat.name}`}>
                          {stat.name}
                        </label>
                        {/* defaultValue + onBlur : on enregistre en quittant le champ */}
                        <input
                          id={`mine-${stat.name}`}
                          className="stat-input"
                          type="number"
                          min={0}
                          inputMode="numeric"
                          placeholder="—"
                          defaultValue={mine.stats?.[stat.name] ?? ""}
                          onBlur={(e) => saveStat(stat.name, e.target.value)}
                        />
                      </div>
                      <div className="stat-bar">
                        <div
                          className="stat-bar-fill"
                          style={{
                            width: `${((mine.stats?.[stat.name] ?? 0) / mineScale) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  <p className="stat-total">
                    Total <b>{statTotal(pokemon.apiName) ?? "—"}</b>
                  </p>
                </>
              )}
            </div>
          )}

          {view === "type" && (
            <div className="type-view">
              <div className="type-badges">
                {pokemon.typeSlugs.map((slug) => (
                  <span
                    key={slug}
                    className="type-badge"
                    style={{ background: TYPE_COLORS[slug] ?? accent }}
                    onClick={() => onFilterType(slug)}
                  >
                    {TYPE_LABELS[slug]}
                  </span>
                ))}
              </div>
              {matchupGroup("Vulnérable à", "weak", pokemon.weaknesses, true)}
              {matchupGroup("Fort contre", "strong", pokemon.strengths, false)}
              {matchupGroup("Résiste à", "resist", pokemon.resistances, true)}
              {matchupGroup("Immunisé à", "immune", pokemon.immunities, false)}
            </div>
          )}

          {view === "evolution" && (
            <div className="evolutions">
              {/* Lignée complète, le Pokémon affiché mis en avant */}
              {pokemon.evolutionLine.length > 1 && (
                <div className="evo-line">
                  {pokemon.evolutionLine.map((stage, i) => (
                    <div key={i} className="evo-step">
                      {i > 0 && <span className="evo-arrow">→</span>}
                      <div className="evo-stage">
                        {stage.map((member) => (
                          <button
                            key={member.apiName}
                            className={`evo-member ${member.apiName === pokemon.apiName ? "current" : ""}`}
                            title={member.name}
                            onClick={() =>
                              member.apiName !== pokemon.apiName && onSelect(member.apiName)
                            }
                          >
                            <img src={member.sprite} alt={member.name} />
                            <span>{member.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {pokemon.evolutions.length > 0 && (
                <div className={`evo-next ${pokemon.evolutions.length > 2 ? "many" : ""}`}>
                  {pokemon.evolutions.map((evo) => (
                    <div
                      key={evo.apiName}
                      className="evolution-item"
                      onClick={() => onSelect(evo.apiName)}
                    >
                      <img src={evo.sprite} alt={evo.name} />
                      <div className="evolution-text">
                        <span className="evolution-name">{evo.name}</span>
                        <span className="evolution-condition">
                          {evo.itemSlug ? itemCondition(evo.condition, evo.itemSlug) : evo.condition}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Stade final : on raconte comment il a été obtenu */}
              {isFinalStage && pokemon.previousEvolution && (
                <div className="evo-final">
                  <span className="evo-final-tag">Évolution maximale atteinte</span>
                  <div className="evo-final-row">
                    <button
                      className="evo-final-poke"
                      onClick={() => onSelect(pokemon.previousEvolution!.apiName)}
                    >
                      <img
                        src={pokemon.previousEvolution.sprite}
                        alt={pokemon.previousEvolution.name}
                      />
                      <span>{pokemon.previousEvolution.name}</span>
                    </button>
                    <div className="evo-final-how">
                      <span className="evo-final-arrow">→</span>
                      <span>
                        {pokemon.evolvedFromItem
                          ? itemCondition(pokemon.evolvedFromCondition, pokemon.evolvedFromItem)
                          : pokemon.evolvedFromCondition}
                      </span>
                    </div>
                    <div className="evo-final-poke current">
                      <img src={pokemon.sprite} alt={pokemon.name} />
                      <span>{pokemon.name}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Pas de lignée du tout */}
              {pokemon.evolutionLine.length <= 1 && (
                <div className="evo-none">
                  <img src={pokemon.sprite} alt={pokemon.name} />
                  <span className="evo-none-title">Ce Pokémon n'évolue pas</span>
                  <span className="evo-none-text">
                    {rarity
                      ? `C'est un Pokémon ${rarity.toLowerCase()} : il n'a ni pré-évolution ni évolution.`
                      : `Dans Let's Go, ${pokemon.name} n'a ni pré-évolution ni évolution : il reste tel quel pendant toute l'aventure.`}
                  </span>
                </div>
              )}
            </div>
          )}

          {view === "lieux" && (
            <div className="locations">
              {pokemon.locations.length === 0 ? (
                <p className="soon">
                  {SPECIAL_SOURCES[pokemon.apiName] ??
                    (pokemon.exclusive === "eevee"
                    ? "Exclusif à Let's Go Évoli : dans Let's Go Pikachu, il s'obtient par échange."
                    : pokemon.previousEvolution
                      ? `Pas de rencontre sauvage : il s'obtient en faisant évoluer ${pokemon.previousEvolution.name}.`
                      : "Aucun lieu de rencontre répertorié dans Let's Go Pikachu.")}
                </p>
              ) : (
                pokemon.locations.map((loc) => (
                  <div key={loc.name + loc.details} className="location-item">
                    <span className="location-region">{loc.name}</span>
                    <span className="location-details">{loc.details}</span>
                  </div>
                ))
              )}
            </div>
          )}

          {view === "capacites" && (
            <div className="moveset">
              {pokemon.moves.length === 0 && (
                <p className="soon">Aucune capacité répertoriée pour Let's Go.</p>
              )}
              {pokemon.moves.map((move) => (
                <div key={move.name + move.method + move.level} className="move-card">
                  <div className="move-head">
                    <span className="move-name">{move.name}</span>
                    <span
                      className="move-type-badge"
                      style={{ background: TYPE_COLORS[move.typeSlug] ?? accent }}
                    >
                      {move.type}
                    </span>
                  </div>
                  <div className="move-meta">
                    <span>
                      {move.method === "level-up"
                        ? move.level > 0
                          ? `Niveau ${move.level}`
                          : "À l'évolution"
                        : (MOVE_METHOD_LABELS[move.method] ?? move.method)}
                    </span>
                    <span>{move.damageClass}</span>
                    {move.power && <span>Puissance {move.power}</span>}
                    {move.accuracy && <span>Précision {move.accuracy} %</span>}
                    <span>PP {move.pp}</span>
                  </div>
                  {move.effect && <p className="move-effect">{move.effect}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PokemonInfoCard;
