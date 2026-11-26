import { Section } from './Section'
import { milestones } from '@/content/timeline'
import type { NodeSymbol } from '@/content/timeline'
import type { Dictionary } from '@/i18n/dictionary'

function Glyph({ symbol }: { symbol: NodeSymbol | 'open' }) {
  return (
    <svg
      viewBox="0 0 14 14"
      className="size-4 overflow-visible"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
      focusable="false"
    >
      {symbol === 'live' && (
        <rect x="1.5" y="1.5" width="11" height="11" fill="currentColor" stroke="none" />
      )}
      {symbol === 'past' && <circle cx="7" cy="7" r="4" className="fill-paper" />}
      {symbol === 'open' && (
        <circle cx="7" cy="7" r="4.4" strokeDasharray="1.8 1.8" className="fill-paper" />
      )}
    </svg>
  )
}

// Trait vertical et symbole d'une étape ; le trait s'arrête au symbole pour la dernière.
function Connector({ symbol, last }: { symbol: NodeSymbol; last: boolean }) {
  return (
    <>
      <span
        aria-hidden
        className={`absolute top-0 left-0 w-px bg-rule ${last ? 'h-2.5' : 'bottom-0'}`}
      />
      <span
        aria-hidden
        className={`absolute top-0.5 left-0 -translate-x-1/2 ${
          symbol === 'live' ? 'text-earth' : 'text-ink-2'
        }`}
      >
        <Glyph symbol={symbol} />
      </span>
    </>
  )
}

const titleClass = 'mt-2 text-[1.375rem] leading-tight font-semibold tracking-[-0.015em] text-ink'

function Missions({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-1.5">
      {items.map((mission) => (
        <li key={mission} className="grid grid-cols-[0.9rem_1fr] text-[0.9375rem] text-ink-2">
          <span aria-hidden className="text-ink-3">
            -
          </span>
          <span>{mission}</span>
        </li>
      ))}
    </ul>
  )
}

export function Timeline({ t }: { t: Dictionary }) {
  return (
    <Section id="background" title={t.background.title}>
      <div className="max-w-[48rem]">
        <div className="relative pb-12 pl-10">
          {/* Étape à venir : l'alternance recherchée, reliée au parcours par un pointillé */}
          <span
            aria-hidden
            className="absolute top-0 left-0 h-10 w-px border-l-2 border-dashed border-earth"
          />
          <span aria-hidden className="absolute top-10 left-0 -translate-x-1/2 text-earth">
            <Glyph symbol="open" />
          </span>
          <span aria-hidden className="absolute top-[3.5rem] bottom-0 left-0 w-px bg-rule" />

          <div className="pt-[2.35rem]">
            <p className="marker text-earth">{t.background.openTitle}</p>
            <p className="mt-2 text-[0.9375rem] text-ink-2">
              {t.hero.lookingFor}. {t.hero.rhythm}.
            </p>
          </div>
        </div>

        <ol className="relative">
          {milestones.map((milestone, index) => {
            const copy = t.background.milestones[milestone.id]
            const isLast = index === milestones.length - 1
            const hasSchool = Boolean(milestone.school)

            return (
              <li key={milestone.id} className="relative pb-14 pl-10 last:pb-0">
                <Connector symbol={milestone.node} last={isLast} />

                <p className="datum text-ink-3">{milestone.period}</p>

                {milestone.school && copy.school && (
                  <>
                    <h3 className={titleClass}>
                      {copy.school.degree}
                    </h3>
                    <p className="mt-0.5 text-[0.9375rem] text-ink-2">
                      {milestone.school.name}, {milestone.school.location}
                    </p>
                    {copy.school.degreeNote && (
                      <p className="mt-2 max-w-[52ch] text-[0.9375rem] text-ink-2">
                        {copy.school.degreeNote}
                      </p>
                    )}
                  </>
                )}

                {milestone.company && copy.company && (
                  <div className={hasSchool ? 'mt-5 pl-5' : ''}>
                    {hasSchool && <p className="marker text-ink-3">{t.background.companyLabel}</p>}

                    <h3 className={hasSchool ? 'mt-2 text-[0.9375rem] font-semibold text-ink' : titleClass}>
                      {copy.company.role}
                    </h3>
                    <p className="mt-0.5 text-[0.9375rem] text-ink-2">
                      {milestone.company.name}, {milestone.company.location}
                    </p>

                    <Missions items={copy.company.missions} />
                  </div>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
