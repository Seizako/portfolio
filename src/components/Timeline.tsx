import { Section } from './Section'
import { milestones } from '@/content/timeline'
import type { NodeSymbol } from '@/content/timeline'
import type { Dictionary } from '@/i18n/dictionary'

// Dessine le petit symbole (carré/cercle) sur la ligne du temps.
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
      {symbol === 'junction' && (
        <>
          <circle cx="7" cy="7" r="4" className="fill-paper" />
          <path d="M11 7h6" />
        </>
      )}
      {symbol === 'terminal' && <circle cx="7" cy="7" r="3.2" className="fill-paper" />}
      {symbol === 'open' && (
        <circle cx="7" cy="7" r="4.4" strokeDasharray="1.8 1.8" className="fill-paper" />
      )}
    </svg>
  )
}

function Connector({
  symbol,
  tone,
  geometry,
  bottomless = false,
}: {
  symbol: NodeSymbol | 'open'
  tone: 'earth' | 'muted'
  geometry: 'start' | 'split'
  bottomless?: boolean
}) {
  const toneClass = tone === 'earth' ? 'text-earth' : 'text-ink-2'

  if (geometry === 'split') {
    return (
      <>
        <span
          aria-hidden
          className="absolute top-0 left-0 h-10 w-px border-l-2 border-dashed border-earth"
        />
        <span aria-hidden className={`absolute top-10 left-0 -translate-x-1/2 ${toneClass}`}>
          <Glyph symbol={symbol} />
        </span>
        <span aria-hidden className="absolute top-[3.5rem] bottom-0 left-0 w-px bg-rule" />
      </>
    )
  }

  return (
    <>
      <span
        aria-hidden
        className={`absolute top-0 left-0 w-px bg-rule ${bottomless ? 'h-2.5' : 'bottom-0'}`}
      />
      <span aria-hidden className={`absolute top-0.5 left-0 -translate-x-1/2 ${toneClass}`}>
        <Glyph symbol={symbol} />
      </span>
    </>
  )
}

function Missions({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-1.5">
      {items.map((mission) => (
        <li key={mission} className="grid grid-cols-[0.9rem_1fr] text-[0.9375rem] text-ink-2">
          <span aria-hidden className="text-ink-3">
            –
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
      <div className="relative pb-12 pl-10">
        <Connector symbol="open" tone="earth" geometry="split" />

        <div className="pt-[2.35rem]">
          <p className="marker text-earth">{t.background.openTitle}</p>
          <p className="mt-2 text-[0.9375rem] text-ink-2">{t.background.openDetail}</p>
        </div>
      </div>

      <ol className="relative">
        {milestones.map((milestone, index) => {
          const copy = t.background.milestones[milestone.id]
          const isLast = index === milestones.length - 1
          const hasSchool = Boolean(milestone.school)

          return (
            <li key={milestone.id} className="relative pb-12 pl-10 last:pb-0">
              <Connector
                symbol={milestone.node}
                tone={milestone.node === 'live' ? 'earth' : 'muted'}
                geometry="start"
                bottomless={isLast}
              />

              <p className="datum text-ink-3">{milestone.period}</p>

              {milestone.school && copy.school && (
                <>
                  <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-ink">
                    {copy.school.degree}
                  </h3>
                  <p className="mt-0.5 text-[0.9375rem] text-ink-2">
                    {milestone.school.name} · {milestone.school.location}
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
                  {hasSchool && (
                    <p className="marker text-ink-3">{t.background.companyLabel}</p>
                  )}

                  <h3
                    className={
                      hasSchool
                        ? 'mt-2 text-[0.9375rem] font-semibold text-ink'
                        : 'mt-1.5 text-lg font-semibold tracking-tight text-ink'
                    }
                  >
                    {copy.company.role}
                  </h3>
                  <p className="mt-0.5 text-[0.9375rem] text-ink-2">
                    {milestone.company.name} · {milestone.company.location}
                  </p>

                  <Missions items={copy.company.missions} />
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
