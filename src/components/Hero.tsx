import type { ReactNode } from 'react'
import { ArrowDown } from './icons'
import { Container } from './Container'
import { ButtonLink } from './ButtonLink'
import { Photo } from './Photo'
import { profile } from '@/content/profile'
import { asset } from '@/lib/asset'
import type { Dictionary } from '@/i18n/dictionary'

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="marker text-ink-3">{label}</dt>
      <dd className="mt-2.5 text-base text-ink">{children}</dd>
    </div>
  )
}

export function Hero({ t }: { t: Dictionary }) {
  return (
    <section id="top">
      <Container>
        <div className="pt-12 pb-20 sm:pb-24 lg:pt-14 lg:pb-28">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="marker flex items-center gap-3 text-ink-2">
              <span aria-hidden className="pulse size-[7px] rounded-full bg-earth" />
              {t.hero.availability}
            </p>
            <p className="datum text-ink-3">{profile.location}</p>
          </div>

          <h1 className="display mt-14 text-[clamp(2.75rem,10.4vw,10rem)] text-ink sm:mt-20">
            {profile.name.split(' ').map((word, index) => (
              // Le masque coupe la ligne pendant qu'elle monte
              <span key={word} className="block overflow-hidden pb-[0.04em]">
                <span className="rise block" style={{ animationDelay: `${index * 90}ms` }}>
                  {word}{' '}
                </span>
              </span>
            ))}
          </h1>

          <div className="mt-12 flex flex-col gap-10 sm:mt-16 sm:flex-row sm:items-end sm:gap-14">
            <Photo alt={t.meta.photoAlt} />

            <div className="min-w-0 flex-1">
              <p className="max-w-[30ch] text-[clamp(1.35rem,2.2vw,1.75rem)] leading-[1.3] font-light tracking-[-0.01em] text-ink">
                {t.hero.role}
              </p>
              <p className="mt-5 max-w-[54ch] text-ink-2">{t.hero.pitch}</p>

              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
                <ButtonLink href="#projects" variant="primary">
                  {t.hero.seeProjects}
                  <ArrowDown className="size-4" />
                </ButtonLink>
                <ButtonLink href={`mailto:${profile.email}`}>{t.hero.contactMe}</ButtonLink>
                <ButtonLink href={asset(profile.cv)} download>
                  {t.hero.downloadCv}
                </ButtonLink>
              </div>
            </div>
          </div>

          <dl className="mt-20 grid gap-x-12 gap-y-6 border-t border-rule pt-7 sm:grid-cols-3 lg:mt-24">
            <Field label={t.hero.lookingForLabel}>{t.hero.lookingFor}</Field>
            <Field label={t.hero.rhythmLabel}>{t.hero.rhythm}</Field>
            <Field label={t.hero.interestsLabel}>{t.hero.interests.join(' · ')}</Field>
          </dl>
        </div>
      </Container>
    </section>
  )
}
