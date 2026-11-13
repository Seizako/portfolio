import type { ReactNode } from 'react'
import { Section } from './Section'
import { skillGroups } from '@/content/skills'
import type { Dictionary } from '@/i18n/dictionary'

function Row({
  label,
  accent = false,
  children,
}: {
  label: string
  accent?: boolean
  children: ReactNode
}) {
  return (
    <div className="flex flex-col gap-2 border-t border-rule py-5.5 sm:flex-row sm:gap-8">
      <dt className={`marker pt-0.5 sm:w-56 sm:shrink-0 ${accent ? 'text-earth' : 'text-ink-3'}`}>
        {label}
      </dt>
      <dd className="min-w-0 flex-1">{children}</dd>
    </div>
  )
}

export function Skills({ t }: { t: Dictionary }) {
  return (
    <Section id="skills" title={t.skills.title} intro={t.skills.intro}>
      <dl className="border-b border-rule">
        {skillGroups.map((group, index) => (
          <Row key={group.id} label={t.skills.groups[group.id]} accent={index === 0}>
            <span className="datum text-sm leading-[1.7] text-ink">{group.items.join(' / ')}</span>
          </Row>
        ))}

        <Row label={t.skills.languagesTitle}>
          <ul className="flex flex-wrap gap-x-8 gap-y-1 text-base text-ink">
            {t.skills.languages.map((language) => (
              <li key={language.name}>
                {language.name} <span className="text-ink-3">— {language.level}</span>
              </li>
            ))}
          </ul>
        </Row>
      </dl>
    </Section>
  )
}
