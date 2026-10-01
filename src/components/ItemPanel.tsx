import { EVOLUTION_ITEMS } from "../data/evolutionItems";
import "./ItemPanel.css";

interface ItemPanelProps {
  slug: string;
  onClose: () => void;
}

// Bandeau en haut de l'index quand le filtre Objet est actif
function ItemPanel({ slug, onClose }: ItemPanelProps) {
  const item = EVOLUTION_ITEMS[slug];
  if (!item) return null;

  return (
    <section className="item-panel">
      <div className="item-visual">
        {item.sprite ? (
          <img src={item.sprite} alt="" />
        ) : (
          <span className="item-icon">{item.icon}</span>
        )}
      </div>
      <div className="item-text">
        <p className="item-title">
          {item.name} <span className="item-category">{item.category}</span>
        </p>
        <p className="item-description">{item.description}</p>
        <p className="item-count">
          Fait évoluer {item.uses.length} Pokémon — touche-en un pour ouvrir sa
          fiche.
        </p>
      </div>
      <button className="item-close" aria-label="Retirer le filtre objet" onClick={onClose}>
        ✕
      </button>
    </section>
  );
}

export default ItemPanel;
