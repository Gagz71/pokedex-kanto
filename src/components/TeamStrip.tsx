import {
  getPokemon,
  removeFromTeam,
  toggleMemberShiny,
  useProgress,
  TEAM_SIZE,
} from "../stores/progress";
import "./TeamStrip.css";

interface TeamStripProps {
  onSelect: (apiName: string) => void;
}

// « Mon équipe » en haut de l'index : 6 places, comme dans le jeu.
function TeamStrip({ onSelect }: TeamStripProps) {
  const { members } = useProgress().team;
  const emptySlots = Math.max(0, TEAM_SIZE - members.length);

  return (
    <section className="team">
      <h2 className="team-title">
        Mon équipe <span>{members.length}/{TEAM_SIZE}</span>
      </h2>
      {members.length === 0 ? (
        <p className="team-empty">
          Ouvre la fiche d'un Pokémon et touche « ＋ Équipe ».
        </p>
      ) : (
        <ul className="team-slots">
          {members.map((m) => {
            const level = getPokemon(m.apiName).level;
            return (
              <li key={m.id} className={`slot ${m.shiny ? "shiny" : ""}`}>
                <button
                  className="slot-open"
                  title={`Ouvrir la fiche de ${m.name}`}
                  onClick={() => onSelect(m.apiName)}
                >
                  <img src={m.sprite} alt={m.name} />
                  <span className="slot-name">{m.name}</span>
                  {level && <span className="slot-level">Niv. {level}</span>}
                </button>
                <div className="slot-flags">
                  <button
                    className={`flag ${m.shiny ? "on" : ""}`}
                    aria-pressed={m.shiny}
                    title="C'est un chromatique"
                    onClick={() => toggleMemberShiny(m.id)}
                  >
                    ✦
                  </button>
                </div>
                <button
                  className="slot-remove"
                  title={`Retirer ${m.name} de l'équipe`}
                  onClick={() => removeFromTeam(m.id)}
                >
                  ✕
                </button>
              </li>
            );
          })}
          {Array.from({ length: emptySlots }, (_, n) => (
            <li key={`empty-${n}`} className="slot empty" aria-hidden="true"></li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TeamStrip;
