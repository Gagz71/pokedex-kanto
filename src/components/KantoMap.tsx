import { useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import {
  KANTO_PLACES,
  MAP_HEIGHT,
  MAP_SRC,
  MAP_WIDTH,
} from "../data/kantoPlaces";
import "./KantoMap.css";

interface KantoMapProps {
  activePlaces: Set<string>; // clés de KANTO_PLACES où trouver le Pokémon
}

const ZOOM = 2.6;

// Carte de Kanto de Let's Go : un repère par lieu, en rouge là où l'on trouve
// le Pokémon. Survoler un repère affiche son nom, cliquer l'agrandit.
function KantoMap({ activePlaces }: KantoMapProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  // Les repères actifs sont dessinés en dernier, par-dessus les autres
  const places = Object.entries(KANTO_PLACES).sort(
    ([a], [b]) => Number(activePlaces.has(a)) - Number(activePlaces.has(b)),
  );
  const zoomed = expanded ? KANTO_PLACES[expanded] : null;

  return (
    <>
      <div className="kanto-map-wrap">
        <svg
          className="kanto-map"
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="kanto-map-dim">
              <feColorMatrix type="saturate" values="0.45" />
              <feComponentTransfer>
                <feFuncR type="linear" slope="0.85" />
                <feFuncG type="linear" slope="0.85" />
                <feFuncB type="linear" slope="0.85" />
              </feComponentTransfer>
            </filter>
          </defs>
          <image
            href={MAP_SRC}
            x="0"
            y="0"
            width={MAP_WIDTH}
            height={MAP_HEIGHT}
            filter={activePlaces.size ? "url(#kanto-map-dim)" : undefined}
          />
          {places.map(([slug, place]) => {
            const active = activePlaces.has(slug);
            return (
              <circle
                key={slug}
                cx={place.x}
                cy={place.y}
                r={active ? 13 : 6}
                className={`map-pin ${active ? "active" : ""}`}
                onMouseEnter={() => setHovered(slug)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setExpanded(slug)}
              >
                <title>{place.name}</title>
              </circle>
            );
          })}
        </svg>
        {hovered && <span className="map-tooltip">{KANTO_PLACES[hovered].name}</span>}
      </div>
      <p className="map-hint">
        Les repères rouges indiquent où trouver ce Pokémon. Touche un repère
        pour l'agrandir.
      </p>

      {/* Gros plan sur un lieu, rendu dans <body> (voir Modal.tsx) */}
      {zoomed &&
        createPortal(
          <div className="map-lightbox" onClick={() => setExpanded(null)}>
            <div
              className="map-crop"
              style={
                {
                  "--crop-cx": `${(zoomed.x / MAP_WIDTH) * 100}%`,
                  "--crop-cy": `${(zoomed.y / MAP_HEIGHT) * 100}%`,
                  "--crop-zoom": ZOOM,
                } as CSSProperties
              }
            >
              <img src={MAP_SRC} alt="" />
              <span className="map-crop-pin"></span>
              <span className="map-crop-title">{zoomed.name}</span>
            </div>
            <button className="map-lightbox-close" onClick={() => setExpanded(null)}>
              ✕ Fermer
            </button>
          </div>,
          document.body,
        )}
    </>
  );
}

export default KantoMap;
