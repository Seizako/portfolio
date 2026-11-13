import { useEffect, useLayoutEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

// localStorage peut lever une exception (navigation privée, cookies bloqués).
const readStored = () => {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

const store = (theme: Theme) => {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Le choix ne sera pas mémorisé, le thème change quand même.
  }
}

// À appeler une seule fois, dans App.
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
  }, [theme])

  // Sans choix mémorisé, on suit le thème système.
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (!readStored()) setTheme(query.matches ? 'dark' : 'light')
    }
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    store(next)
    setTheme(next)
  }

  return { theme, toggle }
}
