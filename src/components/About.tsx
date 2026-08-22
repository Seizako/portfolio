import { Section } from './Section'
import type { Dictionary } from '@/i18n/dictionary'

export function About({ t }: { t: Dictionary }) {
  return (
    <Section id="about" title={t.about.title}>
      <div className="max-w-[62ch] space-y-5 text-ink-2">
        {t.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
