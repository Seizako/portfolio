import { LanguageSwitch, ThemeToggle, navSections } from './NavControls'
import type { NavProps } from './NavControls'
import { profile } from '@/content/profile'

// Navigation desktop, en colonne à gauche. En mobile, c'est le Header.
export function Sidebar({ t, theme, toggleTheme }: NavProps) {
  return (
    <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:overflow-y-auto lg:border-r lg:border-rule lg:py-12 lg:pr-10 lg:pl-12 xl:pl-16">
      <a href="#top" className="nameplate block text-base text-ink transition-colors hover:text-earth">
        {profile.name.split(' ').map((word) => (
          <span key={word} className="block">
            {word}{' '}
          </span>
        ))}
      </a>

      <p className="mt-4 max-w-[22ch] text-sm text-ink-2">{t.hero.role}</p>

      <p className="marker mt-5 flex items-center gap-2.5 text-ink-3">
        <span aria-hidden className="size-1.5 bg-earth" />
        {t.hero.availability}
      </p>

      <nav aria-label={t.nav.primary} className="mt-12 flex flex-col">
        {navSections(t).map((section) => (
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
        <LanguageSwitch t={t} />
        <span aria-hidden className="mx-1 h-4 w-px bg-rule" />
        <ThemeToggle t={t} theme={theme} toggleTheme={toggleTheme} />
      </div>
    </aside>
  )
}
