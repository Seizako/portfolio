import { Moon, Sun } from './icons'
import type { Theme } from '@/hooks/useTheme'
import { asset } from '@/lib/asset'
import { sectionOrder } from '@/content/navigation'
import type { Dictionary } from '@/i18n/dictionary'

export const controlClass =
  'marker inline-flex h-10 min-w-10 items-center justify-center px-2.5 tracking-[0.1em] ' +
  'text-ink-3 transition-colors hover:text-ink'

export type NavProps = {
  t: Dictionary
  theme: Theme
  toggleTheme: () => void
}

export const navSections = (t: Dictionary) =>
  sectionOrder.map((id) => ({ id, href: `#${id}`, label: t.nav[id] }))

export function LanguageSwitch({ t }: { t: Dictionary }) {
  const target = t.locale === 'fr' ? 'en' : 'fr'

  return (
    <a
      href={asset(target === 'en' ? 'en/' : '')}
      hrefLang={target}
      aria-label={t.nav.switchLanguage}
      className={controlClass}
    >
      {target.toUpperCase()}
    </a>
  )
}

export function ThemeToggle({ t, theme, toggleTheme }: NavProps) {
  const Icon = theme === 'dark' ? Sun : Moon

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.nav.switchTheme}
      className={controlClass}
    >
      <Icon className="size-[17px]" />
    </button>
  )
}
