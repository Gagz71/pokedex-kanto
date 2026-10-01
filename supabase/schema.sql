-- Table de synchronisation de la progression (voir src/stores/sync.ts).
-- À exécuter une fois dans Supabase : SQL Editor > New query > coller > Run.
--
-- Même projet que le Pokédex Hisui (mêmes comptes), mais une table à part :
-- une ligne par compte, toute la progression (Pokémon, équipe) dans la
-- colonne data, au même format que sur l'appareil.

create table if not exists public.progress_letsgo (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Sécurité (RLS) : chaque compte ne peut lire et écrire QUE sa propre ligne.
-- C'est ce qui permet de laisser la clé publique dans le code de l'appli.
alter table public.progress_letsgo enable row level security;

create policy "Lire sa progression Let's Go" on public.progress_letsgo
  for select to authenticated
  using ((select auth.uid()) = user_id);

create policy "Créer sa progression Let's Go" on public.progress_letsgo
  for insert to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Modifier sa progression Let's Go" on public.progress_letsgo
  for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "Supprimer sa progression Let's Go" on public.progress_letsgo
  for delete to authenticated
  using ((select auth.uid()) = user_id);

grant select, insert, update, delete on public.progress_letsgo to authenticated;
