import { Section } from './Section'
import type { Dictionary } from '@/i18n/dictionary'

export function About({ t }: { t: Dictionary }) {
  const [lead, ...rest] = t.about.paragraphs

  return (
    <Section id="about" title={t.about.title}>
      <div className="max-w-[62ch] space-y-6">
        <p className="text-[clamp(1.2rem,1.8vw,1.4rem)] leading-[1.5] font-light text-ink">
          {lead}
        </p>
        {rest.map((paragraph) => (
          <p key={paragraph} className="text-ink-2">
            {paragraph}
          </p>
        ))}
      </div>

      <p className="mt-10 flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <span className="marker text-ink-3">{t.about.hobbiesLabel}</span>
        <span className="text-base text-ink-2">{t.about.hobbies}</span>
      </p>
    </Section>
  )
}
