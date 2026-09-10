import { useEffect, useId, useState } from 'react'
import { Close, Menu, Moon, Sun } from './icons'
import { Container } from './Container'
import type { Theme } from '@/hooks/useTheme'
import { asset } from '@/lib/asset'
import { profile } from '@/content/profile'
import { sectionOrder } from '@/content/navigation'
import type { Dictionary } from '@/i18n/dictionary'

const control =
  'marker inline-flex h-10 min-w-10 items-center justify-center px-2.5 tracking-[0.1em] text-ink-3 ' +
  'transition-colors hover:text-ink'

type HeaderProps = {
  t: Dictionary
  theme: Theme
  toggleTheme: () => void
}

export function Header({ t, theme, toggleTheme }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const menuId = useId()

  // Chaque id de sectionOrder doit avoir une clé du même nom dans t.nav
  const sections = sectionOrder.map((id) => ({ id, href: `#${id}`, label: t.nav[id] }))

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-sm lg:hidden">
      <Container>
        <div className="flex h-20 items-center justify-between gap-2">
          <a
            href="#top"
            className="nameplate inline-flex h-11 items-center text-sm text-ink transition-colors hover:text-earth"
          >
            {profile.name}
          </a>

          <div className="flex items-center gap-0.5">
            <nav aria-label={t.nav.primary} className="hidden md:flex md:items-center">
              {sections.map((section) => (
                <a key={section.id} href={section.href} className={control}>
                  {section.label}
                </a>
              ))}
            </nav>

            <span aria-hidden className="mx-2 hidden h-4 w-px bg-rule md:block" />

            <a
              href={t.locale === 'fr' ? asset('en/') : asset('')}
              hrefLang={t.locale === 'fr' ? 'en' : 'fr'}
              aria-label={t.nav.switchLanguage}
              className={control}
            >
              {t.locale === 'fr' ? 'EN' : 'FR'}
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t.nav.switchTheme}
              className={control}
            >
              {theme === 'dark' ? (
                <Sun className="size-[17px]" />
              ) : (
                <Moon className="size-[17px]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? t.nav.close : t.nav.menu}
              aria-expanded={open}
              aria-controls={menuId}
              className={`${control} md:hidden`}
            >
              {open ? <Close className="size-[17px]" /> : <Menu className="size-[17px]" />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id={menuId}
            aria-label={t.nav.primary}
            className="border-t border-rule py-2 md:hidden"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={section.href}
                onClick={() => setOpen(false)}
                className="marker block py-3.5 text-ink-2 transition-colors hover:text-ink"
              >
                {section.label}
              </a>
            ))}
          </nav>
        )}
      </Container>
    </header>
  )
}
