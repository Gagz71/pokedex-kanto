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
        <li>
          <a href="https://www.pokepedia.fr" target="_blank" rel="noopener">
            Poképédia
          </a>{" "}
          — carte de Kanto de Let's Go. Contenu sous licence{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/3.0/deed.fr"
            target="_blank"
            rel="noopener"
          >
            CC BY-NC-SA 3.0
          </a>
          .
        </li>
      </ul>

      <h3>Conception et développement</h3>
      <p>© 2026 MDS Digital</p>
    </Modal>
  );
}

export default CreditsPanel;
