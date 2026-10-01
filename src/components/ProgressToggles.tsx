import { useState } from "react";
import type { EvoLink } from "../types";
import {
  addToTeam,
  evolve,
  getPokemon,
  isTeamFull,
  teamCount,
  toggle,
  undoEvolve,
  useProgress,
  TEAM_SIZE,
  type PokemonFlag,
} from "../stores/progress";
import "./ProgressToggles.css";

interface ProgressTogglesProps {
  apiName: string;
  name: string;
  sprite: string;
  evolutions: EvoLink[]; // évolutions directes
  onSelect: (apiName: string) => void;
}

const TOGGLES: { flag: PokemonFlag; label: string; icon: string; title: string }[] = [
  { flag: "seen", label: "Vu", icon: "◉", title: "Pokémon vu" },
  { flag: "caught", label: "Capturé", icon: "●", title: "Pokémon capturé" },
  { flag: "shiny", label: "Chroma", icon: "✦", title: "Chromatique capturé" },
];

// Suivi de la partie sous l'illustration : vu / capturé / chromatique,
// équipe et évolution. App lui donne key={apiName} : changer de Pokémon
// repart d'un état neuf (lastEvolution).
function ProgressToggles({ apiName, name, sprite, evolutions, onSelect }: ProgressTogglesProps) {
  const progress = useProgress();
  const state = getPokemon(apiName);
  const inTeam = teamCount(apiName);
  const [lastEvolution, setLastEvolution] = useState<EvoLink | null>(null);

  function evolveInto(to: EvoLink) {
    evolve(apiName, to);
    setLastEvolution(to);
  }

  const many = evolutions.length > 2;

  return (
    <div className="progress-panel">
      <div className="progress-toggles">
        {TOGGLES.map((t) => (
          <button
            key={t.flag}
            className={`toggle ${t.flag} ${state[t.flag] ? "on" : ""}`}
            aria-pressed={state[t.flag]}
            title={t.title}
            onClick={() => toggle(apiName, t.flag)}
          >
            <span className="toggle-icon">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      <div className="team-block">
        {inTeam > 0 && (
          <p className="team-status">
            ✓ Dans l'équipe{inTeam > 1 ? ` (×${inTeam})` : ""}
          </p>
        )}
        {isTeamFull() ? (
          <p className="team-full">
            Équipe complète ({progress.team.members.length}/{TEAM_SIZE})
          </p>
        ) : (
          <button className="team-button" onClick={() => addToTeam(apiName, name, sprite)}>
            ＋ Équipe
          </button>
        )}
      </div>

      {evolutions.length > 0 && (
        <div className="evolve-block">
          {lastEvolution ? (
            <p className="evolve-status">
              ✓ {name} a évolué en {lastEvolution.name}
              <button className="link" onClick={() => onSelect(lastEvolution.apiName)}>
                Voir {lastEvolution.name} →
              </button>
            </p>
          ) : (
            state.evolved && (
              <p className="evolve-status">
                ↗ Ton {name} a évolué
                <button className="link" onClick={() => undoEvolve(apiName)}>
                  Annuler
                </button>
              </p>
            )
          )}
          <div className={`evolve-actions ${many ? "many" : ""}`}>
            {many && <span className="evolve-label">↗ Faire évoluer en :</span>}
            {evolutions.map((evo) => (
              <button key={evo.apiName} className="evolve-button" onClick={() => evolveInto(evo)}>
                {many ? evo.name : `↗ Faire évoluer en ${evo.name}`}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProgressToggles;
