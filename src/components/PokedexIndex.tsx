import type { PokedexEntry } from "../types";
import { TYPE_COLORS, TYPE_LABELS } from "../data/types";
import { EXCLUSIVE_LABELS } from "../data/exclusives";
import { getPokemon, useProgress } from "../stores/progress";
import "./PokedexIndex.css";

interface PokedexIndexProps {
  entries: PokedexEntry[];
  notes?: Record<string, string>; // ex. « → Aquali » avec le filtre Objet
  onSelect: (apiName: string) => void;
}

// Marque d'état : la plus avancée l'emporte (capturé > vu).
function statusOf(apiName: string) {
  const p = getPokemon(apiName);
  if (p.caught) return { mark: "●", cls: "caught", title: "Capturé" };
  if (p.seen) return { mark: "◉", cls: "seen", title: "Vu" };
  return null;
}

function PokedexIndex({ entries, notes, onSelect }: PokedexIndexProps) {
  useProgress(); // redessine la liste quand la progression change

  return (
    <ul className="entry-list">
      {entries.map((entry) => {
        const status = statusOf(entry.apiName);
        const progress = getPokemon(entry.apiName);
        return (
          <li key={entry.id} onClick={() => onSelect(entry.apiName)}>
            <span className={`entry-status ${status?.cls ?? ""}`} title={status?.title}>
              {status?.mark ?? ""}
            </span>
            <span className="entry-number">
              #{String(entry.id).padStart(3, "0")}
            </span>
            <span className="entry-name">
              {entry.name}
              {(entry.isLegendary || entry.isMythical) && (
                <span
                  className="entry-legend"
                  title={entry.isMythical ? "Pokémon fabuleux" : "Pokémon légendaire"}
                >
                  ★
                </span>
              )}
              {entry.exclusive && (
                <span
                  className={`entry-exclusive ${entry.exclusive}`}
                  title={EXCLUSIVE_LABELS[entry.exclusive]}
                >
                  {entry.exclusive === "pikachu" ? "P" : "É"}
                </span>
              )}
              {progress.shiny && (
                <span className="entry-shiny" title="Chromatique capturé">
                  ✦
                </span>
              )}
              {progress.evolved && (
                <span className="entry-evolved" title="A évolué">
                  ↗
                </span>
              )}
              {progress.level && <span className="entry-level">Niv. {progress.level}</span>}
              {notes?.[entry.apiName] && (
                <span className="entry-note">{notes[entry.apiName]}</span>
              )}
            </span>
            <span className="entry-types">
              {entry.typeSlugs.map((slug) => (
                <span
                  key={slug}
                  className="entry-type-dot"
                  title={TYPE_LABELS[slug]}
                  style={{ background: TYPE_COLORS[slug] ?? "#ccc" }}
                ></span>
              ))}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default PokedexIndex;
