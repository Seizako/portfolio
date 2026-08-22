import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { en } from './i18n/en'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App t={en} />
  </StrictMode>,
)
