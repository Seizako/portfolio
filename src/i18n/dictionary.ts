import type { ProjectId } from '@/content/projects'
import type { MilestoneId } from '@/content/timeline'
import type { SkillGroupId } from '@/content/skills'

export type Locale = 'fr' | 'en'

export type Dictionary = {
  locale: Locale
  meta: {
    photoAlt: string
  }
  nav: {
    skipToContent: string
    primary: string
    menu: string
    close: string
    about: string
    projects: string
    skills: string
    background: string
    contact: string
    switchLanguage: string
    switchTheme: string
  }
  hero: {
    availability: string
    role: string
    pitch: string
    lookingForLabel: string
    lookingFor: string
    rhythmLabel: string
    rhythm: string
    interestsLabel: string
    interests: readonly string[]
    seeProjects: string
    contactMe: string
    downloadCv: string
  }
  about: {
    title: string
    // Citation mise en avant, le passage `highlight` est coloré
    quote: { before: string; highlight: string; after: string }
    paragraphs: readonly string[]
    hobbiesLabel: string
    hobbies: string
  }
  projects: {
    title: string
    intro: string
    viewSource: string
    roleLabel: string
    otherProjects: string
    // Le titre se lit « Nom — sous-titre » : la partie après le tiret est le sous-titre
    entries: Record<ProjectId, { title: string; summary: string; role: string }>
    diagram: {
      caption: string
      mine: string
      bernsteinAlt: string
      nexusAlt: string
      cluster: string
      webService: string
      queue: string
      storage: string
      client: string
      server: string
      serverDetail: string
      history: string
    }
  }
  skills: {
    title: string
    intro: string
    groups: Record<SkillGroupId, string>
    languagesTitle: string
    languages: readonly { name: string; level: string }[]
  }
  background: {
    title: string
    openTitle: string
    openDetail: string
    companyLabel: string
    milestones: Record<
      MilestoneId,
      {
        school?: { degree: string; degreeNote?: string }
        company?: { role: string; missions: readonly string[] }
      }
    >
  }
  contact: {
    title: string
    headline: readonly string[]
    lead: string
    copy: string
    copied: string
    linkedinLabel: string
    githubLabel: string
    cvLabel: string
  }
  footer: {
    rights: string
    sourceCode: string
  }
}
