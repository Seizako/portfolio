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

// Le premier groupe est mis en avant : c'est le domaine visé
export const skillGroups: readonly SkillGroup[] = [
  { id: 'cloud', items: ['Docker', 'Kubernetes', 'GKE', 'GCP', 'AWS', 'Traefik', 'GitHub Actions'] },
  { id: 'languages', items: ['Python', 'Java', 'Rust', 'JavaScript'] },
  { id: 'web', items: ['HTML', 'CSS', 'Tailwind CSS', 'Next.js', 'Node.js', 'Express.js'] },
  { id: 'databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { id: 'tools', items: ['Git', 'GitHub', 'Trello'] },
]
