import { Section } from './Section'
import { FeaturedProject, ProjectRow } from './ProjectCard'
import { projects } from '@/content/projects'
import type { Dictionary } from '@/i18n/dictionary'

export function Projects({ t }: { t: Dictionary }) {
  const featured = projects.filter((project) => project.featured)
  const others = projects.filter((project) => !project.featured)

  return (
    <Section id="projects" title={t.projects.title} intro={t.projects.intro}>
      <div>
        {featured.map((project, index) => (
          <FeaturedProject key={project.id} project={project} index={index} t={t} />
        ))}
      </div>

      <h3 className="marker mt-16 mb-4 text-ink-3 sm:mt-20">{t.projects.otherProjects}</h3>

      <ul className="border-b border-rule">
        {others.map((project) => (
          <ProjectRow key={project.id} project={project} t={t} />
        ))}
      </ul>
    </Section>
  )
}
