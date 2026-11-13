import { LanguageSwitch, ThemeToggle, navSections } from './NavControls'
import type { NavProps } from './NavControls'
import { profile } from '@/content/profile'
import type { SectionId } from '@/content/navigation'

// Navigation desktop, en colonne à gauche. En mobile, c'est le Header.
export function Sidebar({
  t,
  theme,
  toggleTheme,
  active,
}: NavProps & { active: SectionId | null }) {
  return (
    <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:overflow-y-auto lg:border-r lg:border-rule lg:px-9 lg:py-12">
      <a
        href="#top"
        className="display block text-[0.9375rem] leading-[1.2] tracking-[0.02em] text-ink transition-colors hover:text-earth"
      >
        {profile.name.split(' ').map((word) => (
          <span key={word} className="block">
            {word}{' '}
          </span>
        ))}
      </a>

      <nav aria-label={t.nav.primary} className="mt-12 flex flex-col">
        {navSections(t).map((section) => {
          const isActive = section.id === active

          return (
            <a
              key={section.id}
              href={section.href}
              aria-current={isActive ? 'location' : undefined}
              className={`flex min-h-11 items-center gap-3.5 transition-colors ${
                isActive ? 'text-ink' : 'text-ink-3 hover:text-ink'
              }`}
            >
              <span className={`datum w-5 transition-colors ${isActive ? 'text-earth' : ''}`}>
                {section.number}
              </span>
              <span className="marker">{section.label}</span>
              <span
                aria-hidden
                className={`h-px bg-earth transition-[width] duration-500 ease-out ${
                  isActive ? 'w-8' : 'w-0'
                }`}
              />
            </a>
          )
        })}
      </nav>

      <div className="mt-auto flex items-center gap-0.5 pt-10">
        <LanguageSwitch t={t} />
        <span aria-hidden className="mx-1 h-4 w-px bg-rule" />
        <ThemeToggle t={t} theme={theme} toggleTheme={toggleTheme} />
      </div>
    </aside>
  )
}
