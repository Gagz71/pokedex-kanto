<p align="center">
  <img src="public/Pokeball1.png" alt="Poké Ball" width="120" />
</p>

<h1 align="center">Pokédex Kanto</h1>

<p align="center">
  Le Pokédex de poche pour <b>Pokémon Let's Go, Pikachu !</b><br />
  Les 153 Pokémon de Kanto, leur fiche complète et le suivi de ta partie, sur tous tes appareils.
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" />
  <img alt="Supabase" src="https://img.shields.io/badge/Supabase-sync-3FCF8E?logo=supabase&logoColor=white" />
  <img alt="PWA" src="https://img.shields.io/badge/PWA-installable-5A0FC8?logo=pwa&logoColor=white" />
</p>

---

## ✨ Ce qu'on y trouve

### 📖 Un Pokédex en forme de livre
Une couverture rouge qui s'ouvre sur deux pages : l'index à gauche et à droite,
puis l'illustration et la fiche du Pokémon choisi. Sur téléphone, les pages
s'empilent.

### 🔎 Un index qu'on fouille facilement
- **Recherche** par nom (accents facultatifs : « evoli » trouve Évoli) ou par numéro.
- **Type** : les 18 types, avec leur couleur.
- **Statut** : vus, capturés, chromatiques, ceux qui ont évolué, les
  **exclusifs Let's Go Pikachu / Évoli**, les légendaires et fabuleux.
- **Objet** : à qui sert une Pierre Feu, Eau, Foudre, Plante ou Lune, ou les
  Bonbons Meltan.
- **Tri** : par numéro, par ordre alphabétique, par niveau ou par total des
  stats de *tes* Pokémon.

### 🗂️ Une fiche en six onglets
| Onglet | Contenu |
|---|---|
| **Accueil** | N° de Kanto, catégorie, texte du Pokédex de Let's Go, taille, poids, sexe, taux de capture, exclusivité de version |
| **Stats** | Stats de base, ou celles de ton Pokémon que tu recopies depuis le jeu |
| **Type** | Faiblesses, résistances, immunités et types contre lesquels il est fort |
| **Évolution** | La lignée complète et comment évoluer (niveau, pierre, échange…) |
| **Lieux** | Où le trouver dans Let's Go Pikachu, avec les niveaux |
| **Capacités** | Capacités apprises par niveau et par CT, avec puissance, précision et PP |

### ✅ Le suivi de ta partie
- **Vu / Capturé / Chromatique** pour chaque Pokémon, et un compteur sur 153.
- **Mon équipe** : 6 places, comme dans le jeu.
- **Faire évoluer** un Pokémon capturé, en un clic.
- **Niveau et stats** de tes Pokémon.
- L'**illustration chromatique** de chaque Pokémon.

### ☁️ Partout, même hors ligne
- **Synchronisation** entre téléphone, tablette et ordinateur, avec le même
  compte que le [Pokédex Hisui](https://github.com/Gagz71/pokedex-hisui).
- **Installable** sur l'écran d'accueil (PWA) et utilisable **hors ligne** : les
  fiches déjà consultées restent en cache.

---

## 🚀 Lancer le projet

```sh
npm install
npm run dev
```

| Commande | Rôle |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Vérification TypeScript, puis build dans `dist/` |
| `npm run preview` | Aperçu du build |
| `npm run lint` | ESLint |

## ☁️ Configurer la synchronisation

1. Copier `.env.example` en `.env`, puis y mettre l'URL et la clé **publique**
   du projet Supabase.
2. Créer la table une fois : Supabase → **SQL Editor** → coller
   [`supabase/schema.sql`](supabase/schema.sql) → **Run**.
3. Ajouter l'URL du site déployé dans **Authentication → URL Configuration →
   Redirect URLs**.

Sans `.env`, l'appli fonctionne normalement : la progression reste sur
l'appareil.

> Les deux valeurs du `.env` sont publiques par conception : elles finissent
> dans le code envoyé au navigateur. Les données sont protégées par les règles
> RLS de la table (chaque compte ne lit et n'écrit que sa propre ligne). Ne
> jamais y mettre la clé `secret` ou `service_role`.

## 🧱 Organisation du code

```
src/
├── App.tsx              # le livre : index, filtres, navigation
├── api/pokeapi.ts       # appels à PokeAPI (index et fiches)
├── stores/
│   ├── progress.ts      # progression de la partie (localStorage)
│   └── sync.ts          # synchronisation Supabase
├── components/          # couverture, index, fiche, équipe, panneaux…
└── data/                # types, objets d'évolution, exclusivités, libellés
```

---

## 🙏 Crédits

Données, textes du Pokédex et illustrations : [PokeAPI](https://pokeapi.co).

**Projet de fan non officiel**, gratuit et sans but commercial. Pokémon ainsi
que les noms, images et marques associés sont la propriété de Nintendo,
Creatures Inc., GAME FREAK inc. et The Pokémon Company. Ce projet n'est ni
affilié à ces sociétés, ni approuvé par elles.

<p align="center">© 2026 MDS Digital</p>
