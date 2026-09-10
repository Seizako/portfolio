import type { Dictionary } from './dictionary'

export const en: Dictionary = {
  locale: 'en',

  meta: {
    title: 'Ludovic Weng — Epitech student looking for an apprenticeship',
    description:
      'Master of Science student at Epitech Paris, looking for a 2-year apprenticeship in software. DevOps, cloud and infrastructure, software development.',
    photoAlt: 'Portrait of Ludovic Weng',
  },

  nav: {
    skipToContent: 'Skip to content',
    primary: 'Main navigation',
    menu: 'Open menu',
    close: 'Close menu',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    background: 'Background',
    contact: 'Contact',
    switchLanguage: 'FR — passer en français',
    switchTheme: 'Toggle theme',
  },

  hero: {
    availability: 'Looking for an apprenticeship',
    role: 'Master of Science student at Epitech Paris',
    pitch:
      'I am training as a software developer, with three years of apprenticeship in electrotechnics behind me. I build projects to learn by doing, and I am looking for a company where I can keep going at that pace.',
    lookingForLabel: 'Looking for',
    lookingFor: 'A 2-year apprenticeship — 4 days at the company, 1 day at school',
    interestsLabel: 'Interested in',
    interests: ['DevOps', 'Cloud & infrastructure'],
    seeProjects: 'See my projects',
    contactMe: 'Get in touch',
    downloadCv: 'Download CV',
  },

  about: {
    title: 'About',
    paragraphs: [
      'I discovered programming during my engineering year at INSA Strasbourg. What got me hooked was seeing what I build actually run, a game you can launch, a website you can click through, a result that exists and can be tried right away. I decided to make it my job and joined Epitech the following year.',
      'Before that, I spent three years as an apprentice in electrotechnics, at Enedis on high-voltage substations and then at the Compagnie des Transports Strasbourgeois. That is where I got used to working inside a company, and to environments where being rigorous is not optional. It is also where my interest in infrastructure and DevOps comes from, because a substation and a cluster ask the same question underneath, how do you keep it standing and what do you do when it goes down.',
      'Outside of code, I read a lot, I play pool and volleyball, and I train with bodyweight exercises.',
    ],
  },

  projects: {
    title: 'Projects',
    intro:
      'Projects built as part of my studies, almost all of them as a team. The source code of each one is public.',
    viewSource: 'View source',
    roleLabel: 'My role',
    otherProjects: 'Other projects',
    entries: {
      bernstein: {
        title: 'Bernstein — Kubernetes container orchestration',
        summary:
          'Deployment of a microservices voting application on a multi-node Kubernetes cluster hosted on Google Cloud.',
        role: 'A group project of three. I handled Traefik as reverse proxy and load balancer, along with the Result service. The hardest part was debugging why nothing worked: firewall rules, wrong ConfigMap names, PostgreSQL authentication.',
      },
      nexus: {
        title: 'Nexus — Real-time chat application',
        summary:
          'A Discord-like real-time chat: authentication, server and channel management, WebSocket messaging and message history.',
        role: 'An Epitech project with a team of four, in Rust — the language was imposed, steep learning curve but a solid result. I took on the coordination role and set up Trello to keep everyone aligned. The real challenge was avoiding merge conflicts with four people on the same codebase.',
      },
      epitale: {
        title: 'EPITALE — 2D role-playing game',
        summary:
          'A top-down RPG built in Java with LibGDX: turn-based combat with bullet hell elements, exploration, NPC dialogue and morality mechanics.',
        role: 'An Epitech project with a team of three, following object-oriented principles, with UML diagrams, JaCoCo test coverage and Javadoc documentation. The game was ambitious for our level at the time, but we shipped it.',
      },
      hungerjob: {
        title: 'HungerJob — Job board platform',
        summary:
          'A full-stack job advertisement platform: authentication, job posting management and an admin dashboard.',
        role: 'An Epitech project with a team of three. I worked on part of the frontend and on the REST API on the backend, handling CRUD operations. A good first look at full-stack development.',
      },
      digitalresume: {
        title: 'Digital Resume — Online CV',
        summary: 'A responsive personal resume, hand-written in HTML and CSS.',
        role: 'My first web project, built alone in four days to put into practice what I had just learned. Nothing fancy, but it is where it all started.',
      },
    },
  },

  skills: {
    title: 'Skills',
    intro: 'Technologies I have actually used, in class or on the projects above.',
    groups: {
      languages: 'Languages',
      web: 'Web & frameworks',
      cloud: 'Cloud & DevOps',
      databases: 'Databases',
      tools: 'Tools',
    },
    languagesTitle: 'Spoken languages',
    languages: [
      { name: 'French', level: 'Native' },
      { name: 'English', level: 'B2 level' },
    ],
  },

  background: {
    title: 'Background',
    openTitle: 'Apprenticeship sought',
    openDetail: '2 years — 4 days at the company, 1 day at school.',
    schoolLabel: 'Education',
    companyLabel: 'At the company',
    milestones: {
      epitech: {
        school: {
          degree: 'Master of Science — Computer Science',
          degreeNote: 'RNCP 38114 qualification. Project-based learning and agile methodologies.',
        },
      },
      insa: {
        school: {
          degree: 'Electrical engineering',
          degreeNote: 'Engineering degree as an apprentice.',
        },
        company: {
          role: 'Electrical engineering apprentice',
          missions: [
            'Design study for the renovation of the lighting system',
            'Wrote campaign sheets for the replacement of bus door parts',
            'Built Excel tables listing manufacturer references for the parts to be replaced',
            'Monitored the stock management of equipment in the warehouse',
          ],
        },
      },
      raspail: {
        school: { degree: 'BTS in Electrotechnics' },
        company: {
          role: 'Substation technician apprentice',
          missions: [
            'Preventive maintenance of high-voltage feeder protections',
            'Commissioning of digital control cabinets',
            'Troubleshooting of low-voltage electrical equipment',
          ],
        },
      },
      avb: {
        company: {
          role: 'Maintenance technician — internship',
          missions: [
            'Preventive maintenance of intrusion alarm equipment',
            'On-site troubleshooting of electrical systems',
          ],
        },
      },
    },
  },

  contact: {
    title: 'Contact',
    lead: 'I am looking for a two-year apprenticeship in software, on a rhythm of 4 days at the company and 1 day at school. The simplest way is to email me directly.',
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    cvLabel: 'Download CV (PDF)',
  },

  footer: {
    identityLabel: 'Identity',
    locationLabel: 'Location',
    rights: 'Reproduction for commercial purposes is prohibited.',
    sourceCode: 'Source code',
  },
}
