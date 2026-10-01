import { useState, type FormEvent } from "react";
import Modal from "./Modal";
import {
  isSyncAvailable,
  requestPasswordReset,
  signIn,
  signOut,
  signUp,
  sync,
  updatePassword,
  useSync,
} from "../stores/sync";
import "./SyncPanel.css";

interface SyncPanelProps {
  onClose: () => void;
}

type Mode = "signin" | "signup" | "forgot";

// Messages d'erreur de Supabase (en anglais) traduits pour l'utilisateur.
const ERRORS: [string, string][] = [
  ["Invalid login credentials", "E-mail ou mot de passe incorrect."],
  [
    "Email not confirmed",
    "Adresse pas encore confirmée : clique d'abord sur le lien reçu par e-mail.",
  ],
  ["already registered", "Un compte existe déjà avec cette adresse : connecte-toi."],
  ["at least 6 characters", "Le mot de passe doit faire au moins 6 caractères."],
  ["rate limit", "Trop d'e-mails envoyés pour le moment : réessaie dans une heure."],
  ["Failed to fetch", "Pas de connexion internet."],
];
function translate(message: string): string {
  return ERRORS.find(([needle]) => message.includes(needle))?.[1] ?? message;
}

const SUBMIT_LABELS: Record<Mode, string> = {
  signin: "Se connecter",
  signup: "Créer mon compte",
  forgot: "Recevoir un lien",
};

const STATUS_LABELS = {
  off: "Non connecté",
  syncing: "Synchronisation…",
  ok: "Synchronisé",
  offline: "Hors ligne : synchronisation au retour du réseau",
  error: "Erreur de synchronisation",
} as const;

function SyncPanel({ onClose }: SyncPanelProps) {
  const syncState = useSync();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  async function run(action: () => Promise<void>) {
    setBusy(true);
    setError("");
    setInfo("");
    try {
      await action();
    } catch (e) {
      setError(translate(e instanceof Error ? e.message : String(e)));
    } finally {
      setBusy(false);
    }
  }

  function changeMode(next: Mode) {
    setMode(next);
    setError("");
    setInfo("");
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    run(async () => {
      const address = email.trim();
      if (mode === "signin") {
        await signIn(address, password);
        setPassword("");
      } else if (mode === "signup") {
        const needsConfirmation = await signUp(address, password);
        setPassword("");
        if (needsConfirmation) {
          setInfo(
            `Compte créé ! Clique sur le lien envoyé à ${address} (regarde aussi dans les indésirables), puis reviens ici pour te connecter.`,
          );
          setMode("signin");
        }
      } else {
        await requestPasswordReset(address);
        setInfo(`Un lien pour choisir un nouveau mot de passe a été envoyé à ${address}.`);
      }
    });
  }

  function submitNewPassword(e: FormEvent) {
    e.preventDefault();
    run(async () => {
      await updatePassword(newPassword);
      setNewPassword("");
      setInfo("Mot de passe modifié.");
    });
  }

  const lastSyncLabel = syncState.lastSync
    ? new Date(syncState.lastSync).toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  let body;
  if (!isSyncAvailable) {
    body = (
      <p className="sync-help">
        La synchronisation n'est pas encore configurée sur cette installation
        (fichier .env manquant). Ta progression est bien enregistrée sur cet
        appareil.
      </p>
    );
  } else if (syncState.recovering) {
    // Retour d'un lien « mot de passe oublié »
    body = (
      <form onSubmit={submitNewPassword}>
        <p className="sync-help">Choisis ton nouveau mot de passe.</p>
        <label className="field">
          Nouveau mot de passe
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            required
            minLength={6}
            autoComplete="new-password"
          />
        </label>
        {error && <p className="sync-error">{error}</p>}
        <div className="sync-actions">
          <button className="primary" type="submit" disabled={busy}>
            Enregistrer
          </button>
        </div>
      </form>
    );
  } else if (syncState.user) {
    body = (
      <>
        <p>
          Compte connecté : <b>{syncState.user.email}</b>
        </p>
        <p className={`sync-status ${syncState.status}`}>
          {STATUS_LABELS[syncState.status]}
          {syncState.status === "ok" && lastSyncLabel && <span> à {lastSyncLabel}</span>}
        </p>
        {syncState.status === "error" && <p className="sync-error">{syncState.errorMessage}</p>}
        {info && <p className="sync-info">{info}</p>}
        <p className="sync-help">
          Ta progression (Pokémon, équipe) est enregistrée sur cet appareil et
          sur ton compte. Connecte-toi avec la même adresse sur tes autres
          appareils pour la retrouver. C'est le même compte que pour le
          Pokédex Hisui.
        </p>
        <div className="sync-actions">
          <button
            className="primary"
            disabled={syncState.status === "syncing"}
            onClick={() => sync()}
          >
            Synchroniser maintenant
          </button>
          <button disabled={busy} onClick={() => run(signOut)}>
            Se déconnecter
          </button>
        </div>
      </>
    );
  } else {
    body = (
      <>
        <div className="sync-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={mode === "signin"}
            className={mode === "signin" ? "active" : ""}
            onClick={() => changeMode("signin")}
          >
            Se connecter
          </button>
          <button
            role="tab"
            aria-selected={mode === "signup"}
            className={mode === "signup" ? "active" : ""}
            onClick={() => changeMode("signup")}
          >
            Créer un compte
          </button>
        </div>

        <form onSubmit={submit}>
          <p className="sync-help">
            {mode === "forgot"
              ? "Indique ton adresse : tu vas recevoir un lien pour choisir un nouveau mot de passe."
              : "Retrouve ta progression sur ton téléphone, ta tablette et ton ordinateur."}
          </p>
          <label className="field">
            Adresse e-mail
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              autoComplete="email"
              inputMode="email"
            />
          </label>
          {mode !== "forgot" && (
            <label className="field">
              Mot de passe
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
                minLength={6}
                autoComplete={mode === "signup" ? "new-password" : "current-password"}
              />
            </label>
          )}
          {info && <p className="sync-info">{info}</p>}
          {error && <p className="sync-error">{error}</p>}
          <div className="sync-actions">
            <button className="primary" type="submit" disabled={busy}>
              {busy ? "Un instant…" : SUBMIT_LABELS[mode]}
            </button>
            {mode === "signin" && (
              <button type="button" className="link" onClick={() => changeMode("forgot")}>
                Mot de passe oublié ?
              </button>
            )}
            {mode === "forgot" && (
              <button type="button" className="link" onClick={() => changeMode("signin")}>
                Retour
              </button>
            )}
          </div>
        </form>
      </>
    );
  }

  return (
    <Modal title="Synchronisation" onClose={onClose}>
      {body}
    </Modal>
  );
}

export default SyncPanel;
