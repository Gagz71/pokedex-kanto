import Modal from "./Modal";

interface CreditsPanelProps {
  onClose: () => void;
}

function CreditsPanel({ onClose }: CreditsPanelProps) {
  return (
    <Modal title="Crédits" onClose={onClose} wide>
      <p className="credits-disclaimer">
        <b>Projet de fan non officiel</b>, gratuit et sans but commercial.
        Pokémon ainsi que les noms, images et marques associés sont la
        propriété de Nintendo, Creatures Inc., GAME FREAK inc. et The Pokémon
        Company. Ce site n'est ni affilié à ces sociétés, ni approuvé par
        elles.
      </p>

      <h3>Sources</h3>
      <ul className="credits-list">
        <li>
          <a href="https://pokeapi.co" target="_blank" rel="noopener">
            PokeAPI
          </a>{" "}
          — Pokédex de Kanto de Let's Go, noms, types, statistiques,
          capacités, évolutions, lieux de rencontre, descriptions du Pokédex et
          illustrations officielles.
        </li>
      </ul>

      <h3>Conception et développement</h3>
      <p>© 2026 MDS Digital</p>
    </Modal>
  );
}

export default CreditsPanel;
