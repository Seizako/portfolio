import { Section } from './Section'
import { Tag } from './Tag'
import { skillGroups } from '@/content/skills'
import type { Dictionary } from '@/i18n/dictionary'

export function Skills({ t }: { t: Dictionary }) {
  return (
    <Section id="skills" title={t.skills.title} intro={t.skills.intro}>
      <div className="grid gap-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.id}>
            <h3 className="marker text-ink-3">{t.skills.groups[group.id]}</h3>
            <ul className="mt-3.5 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="marker text-ink-3">{t.skills.languagesTitle}</h3>
          <ul className="mt-3.5 space-y-1 text-[0.9375rem] text-ink-2">
            {t.skills.languages.map((language) => (
              <li key={language.name}>
                <span className="text-ink">{language.name}</span> — {language.level}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
