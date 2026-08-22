import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Timeline } from './components/Timeline'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import type { Dictionary } from './i18n/dictionary'

export function App({ t }: { t: Dictionary }) {
  return (
    <>
      <a
        href="#main"
        className="marker sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:bg-earth focus:px-4 focus:py-3 focus:text-earth-ink"
      >
        {t.nav.skipToContent}
      </a>

      <div className="mx-auto min-h-dvh w-full max-w-[66rem] bg-paper border-rule lg:border-x">
        <Header t={t} />

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
    </>
  )
}
