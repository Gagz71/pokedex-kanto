import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const base = import.meta.env.BASE_URL // '/kanto/'

// L'appli vit sous /kanto/. Si elle est ouverte ailleurs (ancienne version
// installée à la racine du site, servie par son cache hors ligne), on retire
// l'ancien service worker et on renvoie vers /kanto/ pour passer à la
// nouvelle version.
if (!window.location.pathname.startsWith(base)) {
  const goToBase = () =>
    window.location.replace(base + window.location.search + window.location.hash)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) =>
        Promise.all(
          registrations
            .filter((r) => !new URL(r.scope).pathname.startsWith(base))
            .map((r) => r.unregister()),
        ),
      )
      .finally(goToBase)
  } else {
    goToBase()
  }
} else {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
