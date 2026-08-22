// Compétences par catégorie
export type SkillGroupId =
  | 'languages'
  | 'web'
  | 'cloud'
  | 'databases'
  | 'tools'

export type SkillGroup = {
  id: SkillGroupId
  items: readonly string[]
}

export const skillGroups: readonly SkillGroup[] = [
  { id: 'languages', items: ['Python', 'Java', 'Rust', 'JavaScript'] },
  { id: 'web', items: ['HTML', 'CSS', 'Tailwind CSS', 'Next.js', 'Node.js', 'Express.js'] },
  { id: 'cloud', items: ['Docker', 'Kubernetes', 'GKE', 'GCP', 'AWS', 'Traefik', 'GitHub Actions'] },
  { id: 'databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { id: 'tools', items: ['Git', 'GitHub', 'Trello'] },
]
