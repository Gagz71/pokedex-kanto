import { useEffect, useRef, useState, type ReactNode } from "react";
import "./Menu.css";

interface MenuProps {
  label: ReactNode;
  // Reçoit une fonction pour refermer le menu après un choix
  children: (close: () => void) => ReactNode;
}

// Menu déroulant de la barre d'outils de l'index (Type, Statut, Objet, Tri).
// Il se referme après un choix, ou en touchant ailleurs dans la page.
function Menu({ label, children }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen]);

  return (
    <div className="menu" ref={ref}>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {label}
        <span className={`arrow ${isOpen ? "open" : ""}`}>▾</span>
      </button>
      {isOpen && (
        <ul className="menu-options">{children(() => setIsOpen(false))}</ul>
      )}
    </div>
  );
}

export default Menu;
