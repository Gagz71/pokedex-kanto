# Pokédex Let's Go

Pokédex pour **Pokémon Let's Go, Pikachu !** : les 153 Pokémon du Pokédex de
Kanto, leur fiche (stats, types, évolutions, lieux, capacités) et le suivi de
la partie (vus, capturés, chromatiques, équipe), synchronisé entre appareils.

Projet de fan non officiel. Données et illustrations : [PokeAPI](https://pokeapi.co).

React + TypeScript + Vite, PWA installable, synchronisation avec Supabase.

## Démarrer

```sh
npm install
npm run dev
```

## Synchronisation (Supabase)

1. Remplir `.env` à partir de `.env.example` (URL et clé publique du projet).
2. Créer la table une fois : Supabase > SQL Editor > coller
   `supabase/schema.sql` > Run.

Sans `.env`, l'appli marche normalement et garde la progression sur
l'appareil.

## Construire

```sh
npm run build   # type-check + build dans dist/
npm run lint
```
