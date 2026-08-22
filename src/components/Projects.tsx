import { Section } from './Section'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/content/projects'
import type { Dictionary } from '@/i18n/dictionary'

export function Projects({ t }: { t: Dictionary }) {
  const featured = projects.filter((project) => project.featured)
  const others = projects.filter((project) => !project.featured)

  return (
    <Section id="projects" title={t.projects.title} intro={t.projects.intro}>
      <div className="space-y-4">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} t={t} variant="plate" />
        ))}
      </div>

      <h3 className="mt-14 mb-2 marker text-ink-3">{t.projects.otherProjects}</h3>

      <div>
        {others.map((project) => (
          <ProjectCard key={project.id} project={project} t={t} variant="row" />
        ))}
      </div>
    </Section>
  )
}
