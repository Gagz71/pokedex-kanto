import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const DAY = 24 * 60 * 60;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Application installable (écran d'accueil, plein écran) et utilisable
    // hors ligne : l'appli est pré-téléchargée, et tout ce qui vient de
    // PokeAPI (données + illustrations) est gardé en cache une fois consulté.
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "Pokeball1.png"],
      manifest: {
        name: "Pokédex Let's Go",
        short_name: "Pokédex",
        description: "Pokédex pour Pokémon Let's Go, Pikachu !",
        lang: "fr",
        start_url: "/",
        display: "standalone",
        background_color: "#c1272d",
        theme_color: "#c1272d",
        icons: [
          { src: "pwa-192.png", sizes: "192x192", type: "image/png" },
          { src: "pwa-512.png", sizes: "512x512", type: "image/png" },
          {
            src: "pwa-maskable-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            // Données : réponse immédiate depuis le cache, rafraîchie en fond.
            urlPattern: ({ url }) => url.origin === "https://pokeapi.co",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "pokeapi",
              expiration: { maxEntries: 5000, maxAgeSeconds: 60 * DAY },
              cacheableResponse: { statuses: [200] },
            },
          },
          {
            // Illustrations officielles (dépôt de sprites de PokeAPI).
            urlPattern: ({ url }) => url.origin === "https://raw.githubusercontent.com",
            handler: "CacheFirst",
            options: {
              cacheName: "pokemon-artwork",
              expiration: { maxEntries: 600, maxAgeSeconds: 60 * DAY },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: ({ url }) =>
              url.origin === "https://fonts.googleapis.com" ||
              url.origin === "https://fonts.gstatic.com",
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts",
              expiration: { maxEntries: 10, maxAgeSeconds: 365 * DAY },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
});
