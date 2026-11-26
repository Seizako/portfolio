import { useEffect, useId, useRef, useState } from 'react'
import { Close, Menu } from './icons'
import { Container } from './Container'
import { LanguageSwitch, ThemeToggle, controlClass, navSections } from './NavControls'
import type { NavBarProps } from './NavControls'
import { profile } from '@/content/profile'
import { topId } from '@/content/navigation'

export function Header({ t, theme, toggleTheme, active }: NavBarProps) {
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
            href={`#${topId}`}
            className="display inline-flex h-11 items-center text-sm tracking-[0.02em] text-ink transition-colors hover:text-earth"
          >
            {profile.name}
          </a>

          <div className="flex items-center gap-0.5">
            <nav aria-label={t.nav.primary} className="hidden md:flex md:items-center">
              {sections.map((section) => {
                const isActive = section.id === active

                return (
                  <a
                    key={section.id}
                    href={section.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={`marker relative inline-flex h-10 items-center px-2.5 transition-colors ${
                      isActive ? 'text-ink' : 'text-ink-3 hover:text-ink'
                    }`}
                  >
                    {section.label}
                    {isActive && (
                      <span aria-hidden className="absolute inset-x-2.5 bottom-1.5 h-px bg-earth" />
                    )}
                  </a>
                )
              })}
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
                aria-current={section.id === active ? 'location' : undefined}
                className={`flex items-center gap-3.5 py-3.5 transition-colors ${
                  section.id === active ? 'text-ink' : 'text-ink-2 hover:text-ink'
                }`}
              >
                <span className={`datum w-5 ${section.id === active ? 'text-earth' : 'text-ink-3'}`}>
                  {section.number}
                </span>
                <span className="marker">{section.label}</span>
              </a>
            ))}
          </nav>
        )}
      </Container>
    </header>
  )
}
