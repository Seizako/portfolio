import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Timeline } from './components/Timeline'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useTheme } from './hooks/useTheme'
import { useActiveSection } from './hooks/useActiveSection'
import { sectionOrder } from './content/navigation'
import type { Dictionary } from './i18n/dictionary'

export function App({ t }: { t: Dictionary }) {
  const { theme, toggle } = useTheme()
  const active = useActiveSection(sectionOrder)

  return (
    <>
      <a
        href="#main"
        className="marker sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:bg-earth focus:px-4 focus:py-3 focus:text-earth-ink"
      >
        {t.nav.skipToContent}
      </a>

      <div className="min-h-dvh w-full bg-paper lg:grid lg:grid-cols-[15rem_minmax(0,1fr)]">
        <Sidebar t={t} theme={theme} toggleTheme={toggle} active={active} />
        <Header t={t} theme={theme} toggleTheme={toggle} />

        <div className="w-full min-w-0 lg:mx-auto lg:max-w-[78rem]">
          <main id="main">
            <Hero t={t} />
            <About t={t} />
            <Projects t={t} />
            <Skills t={t} />
            <Timeline t={t} />
            <Contact t={t} />
          </main>

          <Footer t={t} />
        </div>
      </div>
    </>
  )
}
