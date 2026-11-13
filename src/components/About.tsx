import { Section } from './Section'
import type { Dictionary } from '@/i18n/dictionary'

export function About({ t }: { t: Dictionary }) {
  const { quote } = t.about

  return (
    <Section id="about" title={t.about.title}>
      <blockquote className="max-w-[26ch] text-[clamp(1.75rem,3.6vw,3.1rem)] leading-[1.16] font-light tracking-[-0.018em] text-ink">
        {quote.before}
        <span className="text-earth">{quote.highlight}</span>
        {quote.after}
      </blockquote>

      <div className="mt-14 grid gap-x-16 gap-y-6 text-[1.03125rem] text-ink-2 sm:mt-18 md:grid-cols-2">
        {t.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <p className="mt-10 flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <span className="marker text-ink-3">{t.about.hobbiesLabel}</span>
        <span className="text-base text-ink-2">{t.about.hobbies}</span>
      </p>
    </Section>
  )
}
