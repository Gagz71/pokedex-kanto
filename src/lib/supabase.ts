import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// Client Supabase unique de l'appli (même projet que le Pokédex Hisui : un
// seul compte pour les deux). La session de connexion est gardée dans le
// localStorage de l'appareil. null tant que le fichier .env n'est pas rempli
// (voir .env.example) : l'appli marche alors sans synchronisation.
export const supabase = url && key ? createClient(url, key) : null;
