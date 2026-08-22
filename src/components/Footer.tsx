import { Container } from './Container'
import { fieldLabelClass, fieldValueClass } from './field-classes'
import { profile } from '@/content/profile'
import type { Dictionary } from '@/i18n/dictionary'

// Petit bloc label + valeur, pour le pied de page
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-rule px-5 py-4 not-last:border-b sm:not-last:border-r sm:not-last:border-b-0">
      <p className={fieldLabelClass}>{label}</p>
      <p className={`mt-1.5 ${fieldValueClass}`}>{value}</p>
    </div>
  )
}

// Pied de page avec les infos clés
export function Footer({ t }: { t: Dictionary }) {
  return (
    <footer className="border-t border-rule">
      <Container>
        <div className="py-14">
          <div className="grid border border-rule sm:grid-cols-3">
            <Field label={t.footer.identityLabel} value={profile.name} />
            <Field label={t.footer.locationLabel} value={profile.location} />
            <Field label={t.hero.lookingForLabel} value={t.hero.availability} />
          </div>

          <div className="mt-6 flex flex-col gap-2 text-ink-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="datum">
              © {new Date().getFullYear()} {profile.name} — {t.footer.rights}
            </p>
            <a
              href={profile.links.repository}
              target="_blank"
              rel="noreferrer"
              className="marker inline-flex min-h-11 items-center self-start transition-colors hover:text-ink"
            >
              {t.footer.sourceCode}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
