import { useEffect, useState } from 'react'
import { ArrowUpRight, FileDown } from './icons'
import { Section } from './Section'
import { profile } from '@/content/profile'
import { asset } from '@/lib/asset'
import type { Dictionary } from '@/i18n/dictionary'

const linkClass =
  'marker inline-flex min-h-11 items-center gap-1.5 text-ink transition-colors hover:text-earth'

function CopyEmail({ t }: { t: Dictionary }) {
  const [copied, setCopied] = useState(false)
  // Sans presse-papiers (contexte non sécurisé, vieux navigateur), le bouton est masqué.
  const [supported, setSupported] = useState(false)

  useEffect(() => setSupported(Boolean(navigator.clipboard?.writeText)), [])

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copied])

  if (!supported) return null

  const copy = () => {
    navigator.clipboard.writeText(profile.email).then(
      () => setCopied(true),
      () => setCopied(false),
    )
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="marker min-h-11 border border-rule-strong px-4.5 text-ink transition-colors hover:border-ink"
    >
      <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
    </button>
  )
}

export function Contact({ t }: { t: Dictionary }) {
  return (
    <Section id="contact" title={t.contact.title}>
      <p className="display text-[clamp(2.25rem,5.6vw,5rem)] leading-[0.95] text-balance text-ink">
        {t.contact.headline.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>

      <p className="mt-9 max-w-[56ch] text-ink-2">{t.contact.lead}</p>

      <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 sm:mt-14">
        <a
          href={`mailto:${profile.email}`}
          className="min-w-0 text-[clamp(1.25rem,3.4vw,2.6rem)] leading-[1.2] font-light tracking-[-0.015em] break-all text-ink transition-colors hover:text-earth sm:break-normal"
        >
          <span className="ulink">{profile.email}</span>
        </a>
        <CopyEmail t={t} />
      </div>

      <div className="mt-12 flex flex-wrap gap-x-10 gap-y-1 border-t border-rule pt-6">
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
          {t.contact.linkedinLabel}
          <ArrowUpRight className="size-3.5" />
        </a>
        <a href={profile.links.github} target="_blank" rel="noreferrer" className={linkClass}>
          {t.contact.githubLabel}
          <ArrowUpRight className="size-3.5" />
        </a>
        <a href={asset(profile.cv)} download className={linkClass}>
          {t.contact.cvLabel}
          <FileDown className="size-3.5" />
        </a>
      </div>
    </Section>
  )
}
