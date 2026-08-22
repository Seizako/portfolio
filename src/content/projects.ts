// Infos des projets (repo, technos...)
export type ProjectId =
  | 'bernstein'
  | 'nexus'
  | 'epitale'
  | 'hungerjob'
  | 'digitalresume'

export type Project = {
  id: ProjectId
  repository: string
  // Technos du projet, les plus importantes en premier
  stack: readonly string[]
  featured: boolean
  year: string
}

export const projects: readonly Project[] = [
  {
    id: 'bernstein',
    repository: 'https://github.com/Seizako/bernstein',
    stack: ['Kubernetes', 'GKE', 'Docker', 'Traefik', 'PostgreSQL', 'Redis'],
    featured: true,
    year: '2026',
  },
  {
    id: 'nexus',
    repository: 'https://github.com/Seizako/nexus',
    stack: ['Rust', 'Next.js', 'WebSockets', 'PostgreSQL', 'Docker', 'CI/CD'],
    featured: true,
    year: '2026',
  },
  {
    id: 'epitale',
    repository: 'https://github.com/Seizako/epitale',
    stack: ['Java', 'LibGDX', 'UML', 'JaCoCo'],
    featured: false,
    year: '2026',
  },
  {
    id: 'hungerjob',
    repository: 'https://github.com/Seizako/hungerjob',
    stack: ['Node.js', 'Express.js', 'MySQL', 'JavaScript', 'Tailwind CSS'],
    featured: false,
    year: '2026',
  },
  {
    id: 'digitalresume',
    repository: 'https://github.com/Seizako/digitalresume',
    stack: ['HTML', 'CSS'],
    featured: false,
    year: '2025',
  },
] as const
