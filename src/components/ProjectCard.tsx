import { ArrowUpRight } from './icons'
import { Tag } from './Tag'
import type { Project } from '@/content/projects'
import type { Dictionary } from '@/i18n/dictionary'

type Variant = 'plate' | 'row'

// Une table de styles par variante (comme ButtonLink)
const styles: Record<
  Variant,
  { article: string; title: string; techRow: string; link: string }
> = {
  plate: {
    article:
      'relative flex flex-col border border-rule bg-plate p-5 transition-colors hover:border-rule-strong focus-within:border-rule-strong sm:p-6',
    title: 'text-lg sm:text-xl',
    techRow: 'mt-5 flex flex-wrap items-center gap-x-6 gap-y-3',
    link: 'marker mt-1 inline-flex basis-full items-center gap-1.5 text-earth after:absolute after:inset-0 hover:underline',
  },
  row: {
    article:
      'relative flex flex-col border-t border-rule py-6 transition-colors hover:border-rule-strong focus-within:border-rule-strong',
    title: 'text-base',
    techRow: 'mt-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3',
    link: 'marker inline-flex items-center gap-1.5 text-earth after:absolute after:inset-0 hover:underline',
  },
}

export function ProjectCard({
  project,
  t,
  variant,
}: {
  project: Project
  t: Dictionary
  variant: Variant
}) {
  const copy = t.projects.entries[project.id]
  const style = styles[variant]

  return (
    <article className={style.article}>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className={`font-semibold tracking-tight text-ink ${style.title}`}>
          {copy.title}
        </h3>
        <span className="datum shrink-0 text-ink-3">{project.year}</span>
      </div>

      <p className="mt-3 max-w-[68ch] text-[0.9375rem] text-ink-2">{copy.summary}</p>

      {variant === 'plate' ? (
        <div className="mt-5">
          <p className="marker text-ink-3">{t.projects.roleLabel}</p>
          <p className="mt-2 max-w-[68ch] text-[0.9375rem] text-ink-2">{copy.role}</p>
        </div>
      ) : (
        <p className="mt-2 max-w-[68ch] text-[0.9375rem] text-ink-2">{copy.role}</p>
      )}

      <div className={style.techRow}>
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </ul>

        <a href={project.repository} target="_blank" rel="noreferrer" className={style.link}>
          {t.projects.viewSource}
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </article>
  )
}
