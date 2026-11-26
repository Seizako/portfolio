// Parcours du plus récent au plus ancien
export type MilestoneId = 'epitech' | 'premsc' | 'insa' | 'raspail' | 'avb'

// Symbole affiché sur le Parcours : carré plein pour la période en cours, cercle pour le passé
export type NodeSymbol = 'live' | 'past'

export type Milestone = {
  id: MilestoneId
  period: string
  node: NodeSymbol
  school?: { name: string; location: string }
  company?: { name: string; location: string }
}

export const milestones: readonly Milestone[] = [
  {
    id: 'epitech',
    period: '2026 - 2028',
    node: 'live',
    school: { name: 'Epitech Paris', location: 'Paris' },
  },
  {
    id: 'premsc',
    period: '2025 - 2026',
    node: 'past',
    school: { name: 'Epitech Paris', location: 'Paris' },
  },
  {
    id: 'insa',
    period: '2024 - 2025',
    node: 'past',
    school: { name: 'INSA Strasbourg', location: 'Strasbourg' },
    company: { name: 'Compagnie des Transports Strasbourgeois', location: 'Strasbourg' },
  },
  {
    id: 'raspail',
    period: '2022 - 2024',
    node: 'past',
    school: { name: 'Lycée Raspail', location: 'Paris' },
    company: { name: 'Enedis', location: 'Paris' },
  },
  {
    id: 'avb',
    period: '2021',
    node: 'past',
    company: { name: 'AVB', location: 'Chelles' },
  },
]
