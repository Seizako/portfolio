import { Moon, Sun } from './icons'
import type { Theme } from '@/hooks/useTheme'
import { asset } from '@/lib/asset'
import { profile } from '@/content/profile'
import { sectionOrder } from '@/content/navigation'
import type { Dictionary } from '@/i18n/dictionary'

const control =
  'marker inline-flex h-10 min-w-10 items-center justify-center px-2.5 tracking-[0.1em] ' +
  'text-ink-3 transition-colors hover:text-ink'

type SidebarProps = {
  t: Dictionary
  theme: Theme
  toggleTheme: () => void
}

// Navigation desktop, en colonne à gauche. En mobile, c'est le Header.
export function Sidebar({ t, theme, toggleTheme }: SidebarProps) {
  const sections = sectionOrder.map((id) => ({ id, href: `#${id}`, label: t.nav[id] }))

  return (
    <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:overflow-y-auto lg:border-r lg:border-rule lg:py-12 lg:pr-10 lg:pl-12 xl:pl-16">
      <a href="#top" className="nameplate block text-base text-ink transition-colors hover:text-earth">
        {profile.name.split(' ').map((word) => (
          <span key={word} className="block">
            {word}
          </span>
        ))}
      </a>

      <p className="mt-4 max-w-[22ch] text-sm text-ink-2">{t.hero.role}</p>

      <p className="marker mt-5 flex items-center gap-2.5 text-ink-3">
        <span aria-hidden className="size-1.5 bg-earth" />
        {t.hero.availability}
      </p>

      <nav aria-label={t.nav.primary} className="mt-12 flex flex-col">
        {sections.map((section) => (
          <a
            key={section.id}
            href={section.href}
            className="marker py-2.5 text-ink-3 transition-colors hover:text-ink"
          >
            {section.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto flex items-center gap-0.5 pt-10">
        <a
          href={t.locale === 'fr' ? asset('en/') : asset('')}
          hrefLang={t.locale === 'fr' ? 'en' : 'fr'}
          aria-label={t.nav.switchLanguage}
          className={control}
        >
          {t.locale === 'fr' ? 'EN' : 'FR'}
        </a>

        <span aria-hidden className="mx-1 h-4 w-px bg-rule" />

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={t.nav.switchTheme}
          className={control}
        >
          {theme === 'dark' ? <Sun className="size-[17px]" /> : <Moon className="size-[17px]" />}
        </button>
      </div>
    </aside>
  )
}
