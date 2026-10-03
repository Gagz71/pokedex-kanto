import { useSyncExternalStore } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import {
  getProgressData,
  mergeProgress,
  replaceAll,
  subscribe as subscribeProgress,
  type ProgressData,
} from "./progress";

// Synchronisation de la progression avec le compte Supabase.
// L'appareil reste la source de vérité immédiate (tout marche hors ligne) ;
// dès qu'on est connecté, chaque synchro lit la version en ligne, la fusionne
// avec celle de l'appareil (la modification la plus récente l'emporte, voir
// mergeProgress) puis enregistre le résultat des deux côtés.
// Table : progress_letsgo (user_id, data jsonb, updated_at), une ligne par
// compte, protégée par RLS. Voir supabase/schema.sql.

export type SyncStatus = "off" | "syncing" | "ok" | "offline" | "error";

// Synchro possible seulement si le .env est rempli (voir lib/supabase.ts)
export const isSyncAvailable = supabase !== null;

export interface SyncState {
  user: User | null;
  status: SyncStatus;
  lastSync: number | null;
  errorMessage: string;
  // true tant que l'utilisateur arrive d'un lien « mot de passe oublié » et
  // doit choisir un nouveau mot de passe.
  recovering: boolean;
}

const TABLE = "progress_letsgo";
const PUSH_DELAY_MS = 1500;

let state: SyncState = {
  user: null,
  status: "off",
  lastSync: null,
  errorMessage: "",
  recovering: false,
};
const listeners = new Set<() => void>();

function setState(patch: Partial<SyncState>) {
  state = { ...state, ...patch };
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useSync(): SyncState {
  return useSyncExternalStore(subscribe, () => state);
}

let running = false;
let again = false;
let pushTimer: ReturnType<typeof setTimeout> | undefined;

export async function sync() {
  const user = state.user;
  if (!supabase || !user) return;
  if (running) {
    again = true;
    return;
  }
  if (!navigator.onLine) {
    setState({ status: "offline" });
    return;
  }
  running = true;
  setState({ status: "syncing" });
  try {
    const { data: row, error } = await supabase
      .from(TABLE)
      .select("data")
      .eq("user_id", user.id)
      .maybeSingle();
    if (error) throw error;

    const local: ProgressData = getProgressData();
    const merged = mergeProgress(local, row?.data ?? {});
    const mergedJson = JSON.stringify(merged);
    if (mergedJson !== JSON.stringify(local)) replaceAll(merged);
    if (mergedJson !== JSON.stringify(row?.data ?? null)) {
      const { error: saveError } = await supabase.from(TABLE).upsert({
        user_id: user.id,
        data: merged,
        updated_at: new Date().toISOString(),
      });
      if (saveError) throw saveError;
    }
    setState({ status: "ok", lastSync: Date.now(), errorMessage: "" });
  } catch (e) {
    setState({
      status: navigator.onLine ? "error" : "offline",
      errorMessage: e instanceof Error ? e.message : String(e),
    });
  } finally {
    running = false;
    if (again) {
      again = false;
      void sync();
    }
  }
}

// --- Connexion par e-mail + mot de passe

// Lance une erreur lisible si la synchro n'est pas configurée.
function client() {
  if (!supabase) throw new Error("Synchronisation non configurée (.env manquant).");
  return supabase;
}

export async function signIn(email: string, password: string) {
  const { error } = await client().auth.signInWithPassword({ email, password });
  if (error) throw error;
}

// Adresse de l'appli pour les liens des e-mails (confirmation, mot de passe
// oublié) : sous /kanto/, pas à la racine du site.
const APP_URL = window.location.origin + import.meta.env.BASE_URL;

// Renvoie true si l'adresse doit d'abord être confirmée par e-mail.
export async function signUp(email: string, password: string): Promise<boolean> {
  const { data, error } = await client().auth.signUp({
    email,
    password,
    options: { emailRedirectTo: APP_URL },
  });
  if (error) throw error;
  return !data.session;
}

export async function requestPasswordReset(email: string) {
  const { error } = await client().auth.resetPasswordForEmail(email, {
    redirectTo: APP_URL,
  });
  if (error) throw error;
}

export async function updatePassword(password: string) {
  const { error } = await client().auth.updateUser({ password });
  if (error) throw error;
  setState({ recovering: false });
}

// La progression reste sur l'appareil après déconnexion.
export async function signOut() {
  await client().auth.signOut();
}

// --- Déclencheurs (une seule fois, au chargement du module)

if (supabase) {
  supabase.auth.getSession().then(({ data }) => {
    setState({ user: data.session?.user ?? null });
    if (state.user) void sync();
  });

  supabase.auth.onAuthStateChange((event, session) => {
    const user = session?.user ?? null;
    setState({
      user,
      ...(user ? {} : { status: "off" as const }),
      ...(event === "PASSWORD_RECOVERY" ? { recovering: true } : {}),
    });
    if (event === "SIGNED_IN") void sync();
  });

  // Chaque modification de la progression part en ligne après un court délai.
  subscribeProgress(() => {
    if (!state.user) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(() => void sync(), PUSH_DELAY_MS);
  });

  window.addEventListener("online", () => void sync());
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") void sync();
  });
}
