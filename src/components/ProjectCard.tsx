import { ArrowUpRight } from './icons'
import { ButtonLink } from './ButtonLink'
import { ProjectDiagram } from './ProjectDiagram'
import type { Project } from '@/content/projects'
import type { Dictionary } from '@/i18n/dictionary'

const stackLine = (project: Project) => project.stack.join(' / ')

export function FeaturedProject({ project, t }: { project: Project; t: Dictionary }) {
  const copy = t.projects.entries[project.id]
  const { title: name, subtitle } = copy

  return (
    <article className="grid gap-x-16 gap-y-12 border-t border-rule py-14 xl:grid-cols-[minmax(0,1fr)_minmax(29rem,1fr)] xl:gap-x-12">
      <div className="min-w-0">
        <p className="datum text-ink-3">{project.year}</p>

        <h3 className="mt-4 text-[clamp(1.75rem,2.6vw,2.25rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-ink">
          {name}
          <span className="block font-light text-ink-2">{subtitle}</span>
        </h3>

        <p className="mt-6 max-w-[60ch] text-base text-ink-2">{copy.summary}</p>

        {copy.role && (
          <>
            <p className="marker mt-7 text-ink-3">{t.projects.roleLabel}</p>
            <p className="mt-2.5 max-w-[60ch] text-base text-ink-2">{copy.role}</p>
          </>
        )}

        <p className="datum mt-7 text-ink-3">{stackLine(project)}</p>

        <ButtonLink
          href={project.repository}
          target="_blank"
          rel="noreferrer"
          className="mt-5"
          icon={<ArrowUpRight className="size-3.5" />}
        >
          {t.projects.viewSource}
        </ButtonLink>
      </div>

      <ProjectDiagram id={project.id} t={t} />
    </article>
  )
}

export function ProjectRow({ project, t }: { project: Project; t: Dictionary }) {
  const copy = t.projects.entries[project.id]
  const { title: name, subtitle } = copy

  return (
    <li className="border-t border-rule">
      <a
        href={project.repository}
        target="_blank"
        rel="noreferrer"
        className="group flex flex-wrap items-baseline gap-x-8 gap-y-1.5 py-6"
      >
        <span className="datum w-12 shrink-0 text-ink-3">{project.year}</span>
        <span className="min-w-0 flex-[1_1_17rem] text-lg font-medium text-ink transition-colors group-hover:text-earth">
          {name}
          <span className="ml-3 font-light text-ink-2">{subtitle}</span>
        </span>
        <span className="datum min-w-0 flex-[1_1_15rem] text-ink-3">{stackLine(project)}</span>
        <span className="marker inline-flex items-center gap-1.5 text-ink transition-colors group-hover:text-earth">
          {t.projects.viewSource}
          <ArrowUpRight className="size-3.5" />
        </span>
        <span className="basis-full text-[0.9375rem] text-ink-2 sm:pl-20">
          <span className="block max-w-[60ch]">{copy.summary}</span>
        </span>
      </a>
    </li>
  )
}
