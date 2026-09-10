import { ArrowDown, FileDown, Mail } from './icons'
import { Container } from './Container'
import { fieldLabelClass, fieldValueClass } from './field-classes'
import { ButtonLink } from './ButtonLink'
import { Photo } from './Photo'
import { profile } from '@/content/profile'
import { asset } from '@/lib/asset'
import type { Dictionary } from '@/i18n/dictionary'

// Petit bloc label + valeur, réutilisé deux fois dans le hero.
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className={fieldLabelClass}>{label}</dt>
      <dd className={`mt-2 ${fieldValueClass}`}>{children}</dd>
    </div>
  )
}

export function Hero({ t }: { t: Dictionary }) {
  return (
    <section id="top">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col gap-10 sm:flex-row-reverse sm:items-start sm:justify-between sm:gap-12">
            <Photo alt={t.meta.photoAlt} sizes="(min-width: 1024px) 208px, (min-width: 640px) 160px, 112px" />

            <div className="sm:flex-1">
              <p className="marker flex items-center gap-2.5 text-ink-3 lg:hidden">
                <span aria-hidden className="size-1.5 bg-earth" />
                {t.hero.availability}
              </p>

              <h1 className="nameplate mt-6 text-[clamp(2.5rem,8vw,4rem)] text-ink lg:mt-0">
                {profile.name.split(' ').map((word) => (
                  <span key={word} className="block">
                    {word}
                  </span>
                ))}
              </h1>

              <p className="mt-6 max-w-[42ch] text-lg text-ink-2">{t.hero.role}</p>
            </div>
          </div>

          <div className="mt-12 grid gap-y-10 border-t border-rule pt-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-x-16">
            <p className="max-w-[54ch] text-ink-2">{t.hero.pitch}</p>

            <dl className="space-y-7 lg:row-span-2">
              <Field label={t.hero.lookingForLabel}>
                {t.hero.lookingFor}
                <span className="mt-1 block text-ink-2">{profile.location}</span>
              </Field>
              <Field label={t.hero.interestsLabel}>{t.hero.interests.join(' · ')}</Field>
            </dl>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:self-end">
              <ButtonLink href="#projects" variant="primary">
                {t.hero.seeProjects}
                <ArrowDown className="size-4" />
              </ButtonLink>

              <ButtonLink href={`mailto:${profile.email}`}>
                <Mail className="size-4" />
                {t.hero.contactMe}
              </ButtonLink>

              <ButtonLink href={asset(profile.cv)} download>
                <FileDown className="size-4" />
                {t.hero.downloadCv}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
