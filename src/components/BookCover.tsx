import "./BookCover.css";

interface BookCoverProps {
  isOpen: boolean;
  onToggle: () => void;
}

function BookCover({ isOpen, onToggle }: BookCoverProps) {
  return (
    <div className={`cover ${isOpen ? "open" : ""}`} onClick={onToggle}>
      <div className="indicator-dots">
        <span className="dot a"></span>
        <span className="dot b"></span>
      </div>
      <div className="hero">
        <div className="pokeball-ring">
          <img className="pokeball" src="/Pokeball1.png" alt="Poké Ball" />
        </div>
        <h1 className="title">Pokédex Kanto</h1>
        <div className="trim"></div>
        <p className="subtitle">
          Pokédex pour <b>Pokémon Let's Go, Pikachu&nbsp;!</b>
        </p>
      </div>
      <div className="groove"></div>
      <p className="hint">Cliquer pour ouvrir</p>
      <span className="signature">© 2026 MDS Digital</span>
    </div>
  );
}

export default BookCover;
