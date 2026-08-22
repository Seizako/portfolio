import type { ProjectId } from '@/content/projects'
import type { MilestoneId } from '@/content/timeline'
import type { SkillGroupId } from '@/content/skills'

export type Locale = 'fr' | 'en'

export type Dictionary = {
  locale: Locale
  meta: {
    title: string
    description: string
    // Alt de la photo de profil
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
    interestsLabel: string
    interests: readonly string[]
    seeProjects: string
    contactMe: string
    downloadCv: string
  }
  about: {
    title: string
    paragraphs: readonly string[]
  }
  projects: {
    title: string
    intro: string
    viewSource: string
    roleLabel: string
    otherProjects: string
    entries: Record<ProjectId, { title: string; summary: string; role: string }>
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
    schoolLabel: string
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
    lead: string
    emailLabel: string
    linkedinLabel: string
    githubLabel: string
    cvLabel: string
  }
  footer: {
    identityLabel: string
    locationLabel: string
    rights: string
    sourceCode: string
  }
}
