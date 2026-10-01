import { useState, useEffect, useRef, type ReactNode } from "react";
import "./App.css";
import type { PokedexEntry, PokemonData } from "./types";
import { fetchIndex, fetchPokemon } from "./api/pokeapi";
import { TYPE_COLORS, TYPE_LABELS } from "./data/types";
import { EVOLUTION_ITEMS } from "./data/evolutionItems";
import { getPokemon, statTotal, useProgress } from "./stores/progress";
import { useSync } from "./stores/sync";
import BookCover from "./components/BookCover";
import PokedexIndex from "./components/PokedexIndex";
import Menu from "./components/Menu";
import TeamStrip from "./components/TeamStrip";
import ItemPanel from "./components/ItemPanel";
import PokemonArtCard from "./components/PokemonArtCard";
import PokemonInfoCard, { type InfoView } from "./components/PokemonInfoCard";
import ProgressToggles from "./components/ProgressToggles";
import CreditsPanel from "./components/CreditsPanel";
import SyncPanel from "./components/SyncPanel";

function normalize(str: string): string {
  return str.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

// Écran étroit (téléphone, tablette en portrait) : une seule page visible,
// donc l'index tient en une seule liste. Même seuil que la media query de
// App.css.
const NARROW_QUERY = "(max-width: 959px)";

// --- Filtre Statut : regroupé par thème dans le menu
type StatusFilter =
  | "seen"
  | "not-seen"
  | "caught"
  | "not-caught"
  | "shiny"
  | "evolved"
  | "pikachu"
  | "eevee"
  | "legendary";

const STATUS_GROUPS: { title: string; filters: { value: StatusFilter; label: string }[] }[] = [
  {
    title: "Pokédex",
    filters: [
      { value: "seen", label: "Vus" },
      { value: "not-seen", label: "Pas encore vus" },
      { value: "caught", label: "Capturés" },
      { value: "not-caught", label: "Pas encore capturés" },
      { value: "shiny", label: "Chromatiques capturés" },
      { value: "evolved", label: "Ont évolué" },
    ],
  },
  {
    title: "Version",
    filters: [
      { value: "pikachu", label: "Exclusifs Let's Go Pikachu" },
      { value: "eevee", label: "Exclusifs Let's Go Évoli" },
    ],
  },
  {
    title: "Rareté",
    filters: [{ value: "legendary", label: "Légendaires et fabuleux" }],
  },
];
const STATUS_FILTERS = STATUS_GROUPS.flatMap((g) => g.filters);

function matchesStatus(entry: PokedexEntry, filter: StatusFilter): boolean {
  const p = getPokemon(entry.apiName);
  switch (filter) {
    case "seen":
      return p.seen;
    case "not-seen":
      return !p.seen;
    case "caught":
      return p.caught;
    case "not-caught":
      return !p.caught;
    case "shiny":
      return p.shiny;
    case "evolved":
      return p.evolved;
    case "pikachu":
    case "eevee":
      return entry.exclusive === filter;
    case "legendary":
      return entry.isLegendary || entry.isMythical;
  }
}

// --- Filtre Objet : Pokémon qu'un objet d'évolution fait évoluer
const ITEM_GROUPS = (["Pierres", "Objets spéciaux"] as const).map((title) => ({
  title,
  items: Object.entries(EVOLUTION_ITEMS)
    .filter(([, item]) => item.category === title)
    .map(([slug, item]) => ({ slug, ...item }))
    .sort((a, b) => a.name.localeCompare(b.name, "fr")),
}));

// --- Tri. level / power : mes Pokémon, du plus haut niveau (ou total de
// stats) au plus bas.
type SortField = "number" | "alpha" | "level" | "power";

function App() {
  useProgress(); // redessine l'index (filtres, compteurs) à chaque progression
  const syncState = useSync();

  // Index
  const [pokemonEntries, setPokemonEntries] = useState<PokedexEntry[]>([]);
  const [applicationName, setApplicationName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [indexError, setIndexError] = useState<string | null>(null);

  // Livre et panneaux
  const [isOpen, setIsOpen] = useState(false);
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);
  const [isSyncOpen, setIsSyncOpen] = useState(false);
  const [isNarrow, setIsNarrow] = useState(
    () => window.matchMedia(NARROW_QUERY).matches,
  );

  // Recherche, filtres et tri
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter | null>(null);
  const [itemFilter, setItemFilter] = useState<string | null>(null);
  const [sortField, setSortField] = useState<SortField>("number");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Fiche ouverte
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [isLoadingPokemon, setIsLoadingPokemon] = useState(false);
  const [pokemonError, setPokemonError] = useState<string | null>(null);
  const [infoView, setInfoView] = useState<InfoView>("accueil");
  const [showShiny, setShowShiny] = useState(false);
  // Numéro de la dernière fiche demandée : si on clique vite sur deux
  // Pokémon, on ignore la réponse de la première.
  const requestRef = useRef(0);

  useEffect(() => {
    fetchIndex()
      .then(({ title, entries }) => {
        setPokemonEntries(entries);
        setApplicationName(title);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon:", error);
        setIndexError("Impossible de charger le Pokédex. Vérifie ta connexion.");
      })
      .finally(() => setIsLoading(false));
  }, []);

  // On suit les changements de largeur d'écran (rotation, fenêtre
  // redimensionnée) ; le return retire l'écouteur quand App disparaît.
  useEffect(() => {
    const media = window.matchMedia(NARROW_QUERY);
    const onChange = (e: MediaQueryListEvent) => setIsNarrow(e.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  // --- Navigation

  function handleSelect(apiName: string) {
    const request = ++requestRef.current;
    setSelectedName(apiName);
    setShowShiny(false);
    setPokemon(null);
    setPokemonError(null);
    setIsLoadingPokemon(true);
    window.scrollTo({ top: 0 });
    fetchPokemon(apiName, pokemonEntries)
      .then((data) => request === requestRef.current && setPokemon(data))
      .catch(() => {
        if (request === requestRef.current) setPokemonError("Impossible de charger ce Pokémon.");
      })
      .finally(() => {
        if (request === requestRef.current) setIsLoadingPokemon(false);
      });
  }

  // Retour à l'index : on repart d'une recherche vide (les filtres, eux,
  // sont gardés).
  function backToIndex() {
    setSelectedName(null);
    setSearchTerm("");
  }

  // Depuis l'onglet Type d'une fiche : retour à l'index filtré sur le type
  function handleTypeFilter(slug: string) {
    setTypeFilter(slug);
    setSearchTerm("");
    setSelectedName(null);
  }

  // Depuis l'onglet Évolution d'une fiche : retour à l'index filtré sur l'objet
  function handleItemFilter(slug: string) {
    setItemFilter(slug);
    setTypeFilter(null);
    setStatusFilter(null);
    setSearchTerm("");
    setSelectedName(null);
  }

  function setSort(field: SortField, direction: "asc" | "desc" = "desc") {
    setSortField(field);
    setSortDirection(direction);
  }

  // --- Liste affichée : tri, puis filtres, puis recherche

  const sortedEntries = [...pokemonEntries].sort((a, b) => {
    // Tri par niveau / total de mes stats : ceux sans valeur passent à la fin.
    if (sortField === "level" || sortField === "power") {
      const value = (apiName: string) =>
        (sortField === "level" ? getPokemon(apiName).level : statTotal(apiName)) ?? -1;
      return value(b.apiName) - value(a.apiName) || a.id - b.id;
    }
    const result = sortField === "alpha" ? a.name.localeCompare(b.name, "fr") : a.id - b.id;
    return sortDirection === "asc" ? result : -result;
  });

  // « → Aquali » à côté de chaque Pokémon concerné par l'objet choisi
  const itemNotes: Record<string, string> = {};
  for (const use of (itemFilter && EVOLUTION_ITEMS[itemFilter]?.uses) || []) {
    const note = `→ ${use.toName}${use.note ? ` (${use.note})` : ""}`;
    itemNotes[use.from] = itemNotes[use.from] ? `${itemNotes[use.from]} · ${note}` : note;
  }

  const query = normalize(searchTerm.trim());
  const filteredEntries = sortedEntries.filter(
    (e) =>
      (!typeFilter || e.typeSlugs.includes(typeFilter)) &&
      (!itemFilter || e.apiName in itemNotes) &&
      (!statusFilter || matchesStatus(e, statusFilter)) &&
      (!query || normalize(e.name).includes(query) || String(e.id).includes(query)),
  );

  // Écran large : la liste est coupée en deux, une moitié par page. On coupe
  // selon la liste complète, pour que les résultats d'une recherche
  // remplissent d'abord la page de gauche.
  const entriesPerPage = isNarrow
    ? pokemonEntries.length
    : Math.ceil(pokemonEntries.length / 2);
  const firstHalf = filteredEntries.slice(0, entriesPerPage);
  const secondHalf = filteredEntries.slice(entriesPerPage);

  const counts = pokemonEntries.reduce(
    (acc, e) => {
      const p = getPokemon(e.apiName);
      return {
        seen: acc.seen + (p.seen ? 1 : 0),
        caught: acc.caught + (p.caught ? 1 : 0),
        shiny: acc.shiny + (p.shiny ? 1 : 0),
      };
    },
    { seen: 0, caught: 0, shiny: 0 },
  );

  // --- Affichage

  const indexToolbar = (
    <div className="index-toolbar">
      <input
        type="text"
        className="search-input"
        placeholder="Rechercher par nom ou n°..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Menu
        label={
          <>
            {typeFilter && (
              <span className="menu-dot" style={{ background: TYPE_COLORS[typeFilter] }}></span>
            )}
            {typeFilter ? TYPE_LABELS[typeFilter] : "Type"}
          </>
        }
      >
        {(close) => (
          <>
            <li
              className={!typeFilter ? "active" : ""}
              onClick={() => {
                setTypeFilter(null);
                close();
              }}
            >
              Tous les types
            </li>
            {Object.keys(TYPE_LABELS).map((slug) => (
              <li
                key={slug}
                className={typeFilter === slug ? "active" : ""}
                onClick={() => {
                  setTypeFilter(slug);
                  close();
                }}
              >
                <span className="menu-dot" style={{ background: TYPE_COLORS[slug] }}></span>
                {TYPE_LABELS[slug]}
              </li>
            ))}
          </>
        )}
      </Menu>

      <Menu label={STATUS_FILTERS.find((f) => f.value === statusFilter)?.label ?? "Statut"}>
        {(close) => (
          <>
            <li
              className={!statusFilter ? "active" : ""}
              onClick={() => {
                setStatusFilter(null);
                close();
              }}
            >
              Tous les Pokémon
            </li>
            {STATUS_GROUPS.map((group) => (
              <GroupItems key={group.title} title={group.title}>
                {group.filters.map((f) => (
                  <li
                    key={f.value}
                    className={statusFilter === f.value ? "active" : ""}
                    onClick={() => {
                      setStatusFilter(f.value);
                      close();
                    }}
                  >
                    {f.label}
                  </li>
                ))}
              </GroupItems>
            ))}
          </>
        )}
      </Menu>

      <Menu label={itemFilter ? EVOLUTION_ITEMS[itemFilter]?.name : "Objet"}>
        {(close) => (
          <>
            <li
              className={!itemFilter ? "active" : ""}
              onClick={() => {
                setItemFilter(null);
                close();
              }}
            >
              Tous les Pokémon
            </li>
            {ITEM_GROUPS.map((group) => (
              <GroupItems key={group.title} title={group.title}>
                {group.items.map((item) => (
                  <li
                    key={item.slug}
                    className={itemFilter === item.slug ? "active" : ""}
                    onClick={() => {
                      setItemFilter(item.slug);
                      close();
                    }}
                  >
                    {item.sprite ? (
                      <img src={item.sprite} alt="" className="menu-sprite" />
                    ) : (
                      <span className="menu-sprite">{item.icon}</span>
                    )}
                    {item.name}
                  </li>
                ))}
              </GroupItems>
            ))}
          </>
        )}
      </Menu>

      <Menu label="Tri">
        {(close) => {
          const choose = (field: SortField, direction?: "asc" | "desc") => () => {
            setSort(field, direction);
            close();
          };
          return (
            <>
              <li onClick={choose("number", "asc")}>N° croissant</li>
              <li onClick={choose("number", "desc")}>N° décroissant</li>
              <li onClick={choose("alpha", "asc")}>A → Z</li>
              <li onClick={choose("alpha", "desc")}>Z → A</li>
              <li className="menu-group">Mes Pokémon</li>
              <li onClick={choose("level")}>Niveau (du plus haut)</li>
              <li onClick={choose("power")}>Total de mes stats</li>
            </>
          );
        }}
      </Menu>
    </div>
  );

  let leftPage;
  if (!selectedName) {
    leftPage = (
      <>
        {isOpen && (
          <div className="nav-row index-nav">
            <button className={`sync-button ${syncState.status}`} onClick={() => setIsSyncOpen(true)}>
              <span className="sync-dot"></span>
              {syncState.user ? "Synchronisé" : "Synchroniser mes appareils"}
            </button>
            <button className="close-tab" onClick={() => setIsOpen(false)}>
              ✕ Fermer le livre
            </button>
          </div>
        )}
        {indexToolbar}
        {itemFilter ? (
          <ItemPanel slug={itemFilter} onClose={() => setItemFilter(null)} />
        ) : (
          <TeamStrip onSelect={handleSelect} />
        )}
        {pokemonEntries.length > 0 && !itemFilter && (
          <p className="progress-summary">
            <span>
              <b className="c-seen">◉</b> {counts.seen}/{pokemonEntries.length} vus
            </span>
            <span>
              <b className="c-caught">●</b> {counts.caught}/{pokemonEntries.length} capturés
            </span>
            {counts.shiny > 0 && (
              <span>
                <b className="c-shiny">✦</b> {counts.shiny} chromatique{counts.shiny > 1 ? "s" : ""}
              </span>
            )}
          </p>
        )}
        {isLoading ? (
          <p className="status">Chargement du Pokédex...</p>
        ) : indexError ? (
          <p className="status">{indexError}</p>
        ) : (
          <>
            {filteredEntries.length === 0 && (
              <p className="status">Aucun Pokémon ne correspond à ces critères.</p>
            )}
            <PokedexIndex entries={firstHalf} notes={itemNotes} onSelect={handleSelect} />
          </>
        )}
        {applicationName && <p className="page-title">{applicationName}</p>}
        <button className="credits-link" onClick={() => setIsCreditsOpen(true)}>
          Projet de fan non officiel · Crédits
        </button>
      </>
    );
  } else if (isLoadingPokemon) {
    leftPage = <p className="status">Chargement...</p>;
  } else if (pokemonError || !pokemon) {
    leftPage = (
      <>
        <button className="close-tab" onClick={backToIndex}>
          ← Retour à l'index
        </button>
        <p className="status">{pokemonError}</p>
      </>
    );
  } else {
    leftPage = (
      <PokemonArtCard
        sprite={showShiny ? pokemon.shinySprite : pokemon.sprite}
        name={pokemon.name}
        typeSlugs={pokemon.typeSlugs}
        nav={
          <>
            <div className="nav-row">
              <button className="close-tab" onClick={backToIndex}>
                ← Retour à l'index
              </button>
              <button
                className={`close-tab shiny-switch ${showShiny ? "on" : ""}`}
                aria-pressed={showShiny}
                onClick={() => setShowShiny(!showShiny)}
              >
                ✦ {showShiny ? "Chromatique" : "Voir le chromatique"}
              </button>
            </div>
            {pokemon.previousEvolution && (
              <button
                className="close-tab prev-evo"
                onClick={() => handleSelect(pokemon.previousEvolution!.apiName)}
              >
                ← {pokemon.previousEvolution.name}
              </button>
            )}
          </>
        }
        footer={
          <ProgressToggles
            key={pokemon.apiName}
            apiName={pokemon.apiName}
            name={pokemon.name}
            sprite={pokemon.sprite}
            evolutions={pokemon.evolutions}
            onSelect={handleSelect}
          />
        }
      />
    );
  }

  return (
    <div className="scene">
      <div
        className={`book ${isOpen ? "open" : ""} ${selectedName ? "has-pokemon" : ""}`}
      >
        <div className="page page-left">{leftPage}</div>

        <div className="page-right-mask">
          <div className="page page-right">
            {!selectedName
              ? !isLoading && (
                  <PokedexIndex entries={secondHalf} notes={itemNotes} onSelect={handleSelect} />
                )
              : pokemon && (
                  <PokemonInfoCard
                    key={pokemon.apiName}
                    pokemon={pokemon}
                    view={infoView}
                    onChangeView={setInfoView}
                    onSelect={handleSelect}
                    onFilterType={handleTypeFilter}
                    onFilterItem={handleItemFilter}
                  />
                )}
          </div>
        </div>

        <div className="spine"></div>

        <BookCover isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      </div>

      {isCreditsOpen && <CreditsPanel onClose={() => setIsCreditsOpen(false)} />}
      {isSyncOpen && <SyncPanel onClose={() => setIsSyncOpen(false)} />}
    </div>
  );
}

// Titre de section suivi de ses choix, dans un menu
function GroupItems({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <li className="menu-group">{title}</li>
      {children}
    </>
  );
}

export default App;
