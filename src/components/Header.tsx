import { useEffect, useId, useRef, useState } from 'react'
import { Close, Menu } from './icons'
import { Container } from './Container'
import { LanguageSwitch, ThemeToggle, controlClass, navSections } from './NavControls'
import type { NavProps } from './NavControls'
import { profile } from '@/content/profile'

export function Header({ t, theme, toggleTheme }: NavProps) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const sections = navSections(t)
  const MenuIcon = open ? Close : Menu

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      menuButtonRef.current?.focus()
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-sm lg:hidden">
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
                <a key={section.id} href={section.href} className={controlClass}>
                  {section.label}
                </a>
              ))}
            </nav>

            <span aria-hidden className="mx-2 hidden h-4 w-px bg-rule md:block" />

            <LanguageSwitch t={t} />
            <ThemeToggle t={t} theme={theme} toggleTheme={toggleTheme} />

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? t.nav.close : t.nav.menu}
              aria-expanded={open}
              aria-controls={menuId}
              className={`${controlClass} md:hidden`}
            >
              <MenuIcon className="size-[17px]" />
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
