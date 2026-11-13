import { ArrowUpRight } from './icons'
import { Container } from './Container'
import { profile } from '@/content/profile'
import type { Dictionary } from '@/i18n/dictionary'

export function Footer({ t }: { t: Dictionary }) {
  return (
    <footer>
      <Container>
        <div className="flex flex-col gap-2 border-t border-rule pt-7 pb-12 text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="datum">
            © {new Date().getFullYear()} {profile.name} — {t.footer.rights}
          </p>
          <a
            href={profile.links.repository}
            target="_blank"
            rel="noreferrer"
            className="marker inline-flex min-h-11 items-center gap-1.5 self-start transition-colors hover:text-ink sm:self-auto"
          >
            {t.footer.sourceCode}
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </Container>
    </footer>
  )
}
