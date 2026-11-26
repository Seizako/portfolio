export type SkillGroupId =
  | 'devops'
  | 'cloud'
  | 'languages'
  | 'frameworks'
  | 'databases'
  | 'tools'

export type SkillGroup = {
  id: SkillGroupId
  items: readonly string[]
}

// Même liste que le CV. Le premier groupe est mis en avant.
export const skillGroups: readonly SkillGroup[] = [
  { id: 'devops', items: ['Docker', 'GitHub Actions', 'CI/CD', 'SonarQube', 'Traefik'] },
  { id: 'cloud', items: ['AWS', 'Google Kubernetes Engine (GKE)', 'Kubernetes'] },
  { id: 'languages', items: ['Python', 'Java', 'Rust'] },
  { id: 'frameworks', items: ['Next.js', 'Node.js', 'NestJS', 'Express.js'] },
  { id: 'databases', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { id: 'tools', items: ['Linux', 'Git', 'GitHub Issues', 'Trello'] },
]
