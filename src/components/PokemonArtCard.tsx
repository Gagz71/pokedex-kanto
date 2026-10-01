import type { ReactNode } from "react";
import { TYPE_COLORS } from "../data/types";
import "./PokemonArtCard.css";

interface PokemonArtCardProps {
  sprite: string;
  name: string;
  typeSlugs: string[];
  nav?: ReactNode; // boutons de navigation, au-dessus de l'illustration
  footer?: ReactNode; // suivi de progression, sous le nom
}

// Éclaircit (percent > 0) ou assombrit (percent < 0) une couleur #rrggbb.
function shade(hex: string, percent: number): string {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  const target = percent < 0 ? 0 : 255;
  const p = Math.abs(percent);
  const mix = (c: number) => Math.round((target - c) * p) + c;
  const toHex = (c: number) => c.toString(16).padStart(2, "0");
  return `#${toHex(mix(r))}${toHex(mix(g))}${toHex(mix(b))}`;
}

// Carte de gauche d'une fiche : l'illustration sur un fond aux couleurs du
// premier type du Pokémon.
function PokemonArtCard({ sprite, name, typeSlugs, nav, footer }: PokemonArtCardProps) {
  const primary = TYPE_COLORS[typeSlugs[0]] ?? "#A8A77A";
  const light = shade(primary, 0.55);
  const dark = shade(primary, -0.55);

  return (
    <div
      className="art-card"
      style={{
        background: `linear-gradient(160deg, ${light} 0%, ${primary} 55%, ${dark} 100%)`,
      }}
    >
      <div className="art-gloss"></div>
      <div className="art-panel">
        {nav && <div className="art-nav">{nav}</div>}
        <div
          className="art-stage"
          style={{
            background: `radial-gradient(circle at 50% 32%, ${light}, ${primary} 78%)`,
          }}
        >
          <img src={sprite} alt={name} />
        </div>
        <p className="art-name">{name}</p>
        {footer && <div className="art-footer">{footer}</div>}
      </div>
    </div>
  );
}

export default PokemonArtCard;
