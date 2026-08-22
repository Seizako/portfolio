import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { fr } from './i18n/fr'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App t={fr} />
  </StrictMode>,
)
