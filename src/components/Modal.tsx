import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

interface ModalProps {
  title: string;
  onClose: () => void;
  wide?: boolean;
  children: ReactNode;
}

// Fenêtre par-dessus l'appli (Crédits, Synchronisation). Rendue dans <body>
// avec createPortal (l'équivalent de <Teleport> en Vue) : dans le livre, sa
// perspective 3D empêcherait position: fixed de couvrir tout l'écran.
function Modal({ title, onClose, wide, children }: ModalProps) {
  return createPortal(
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <section
        className={`modal ${wide ? "wide" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <header className="modal-head">
          <h2>{title}</h2>
          <button className="modal-close" aria-label="Fermer" onClick={onClose}>
            ✕
          </button>
        </header>
        {children}
      </section>
    </div>,
    document.body,
  );
}

export default Modal;
