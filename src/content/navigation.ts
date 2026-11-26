// Ancre du hero : au-dessus de la première section, aucun lien de menu n'est actif.
export const topId = 'top'

export type SectionId = 'about' | 'projects' | 'skills' | 'background' | 'contact'

export const sectionOrder: readonly SectionId[] = [
  'about',
  'projects',
  'skills',
  'background',
  'contact',
]
