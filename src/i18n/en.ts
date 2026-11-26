import type { Dictionary } from './dictionary'

export const en: Dictionary = {
  locale: 'en',

  meta: {
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
    switchLanguage: 'FR - passer en français',
    switchTheme: 'Toggle theme',
  },

  hero: {
    availability: 'Looking for an apprenticeship',
    role: 'Master of Science student at Epitech Paris',
    pitch:
      'I am training as a software developer, after three years as an apprentice in electrical engineering. I learn by building projects, and I am looking for a company where I can keep learning that way.',
    lookingForLabel: 'Availability',
    lookingFor: 'Starting now, until August 2028',
    rhythmLabel: 'Schedule',
    rhythm: '4 days at work, 1 day at school',
    interestsLabel: 'Areas',
    interests: ['IT support', 'development', 'DevOps'],
    seeProjects: 'View projects',
    contactMe: 'Get in touch',
    downloadCv: 'Download CV',
  },

  about: {
    title: 'About',
    paragraphs: [
      'I discovered programming during my engineering year at INSA Strasbourg. What I liked was seeing what I build run right away. I decided to make it my job and joined Epitech the following year.',
      'Before that, I spent three years as an apprentice in electrical engineering, first at Enedis in high-voltage substations, then at the Compagnie des Transports Strasbourgeois, the Strasbourg public transport company. That is where I learned to work in a company and to follow strict procedures.',
      'In a substation, the equipment must not fail, and when it does, you have to step in quickly. That is what draws me to infrastructure and DevOps today.',
    ],
    hobbiesLabel: 'Interests',
    hobbies: 'Reading, table tennis, pool.',
  },

  projects: {
    title: 'Projects',
    intro:
      'Projects built during my studies, almost all of them as a team. All the code is public.',
    viewSource: 'View source',
    roleLabel: 'My role',
    otherProjects: 'Other projects',
    diagram: {
      caption: 'Deployed architecture diagram',
      bernsteinAlt:
        'Bernstein architecture diagram: Internet traffic goes through Traefik, which routes to the Vote and Result services. Vote writes to Redis, a worker moves the data to PostgreSQL, which Result reads.',
      nexusAlt:
        'Nexus architecture diagram: the Next.js client talks over WebSockets to the Rust server, which stores its data in PostgreSQL and MongoDB. Everything runs in Docker.',
      cluster: 'Multi-node GKE cluster',
      webService: 'web service',
      queue: 'queue',
      storage: 'storage',
      client: 'browser',
      server: 'Rust server',
      serverDetail: 'auth, channels, messages',
      history: 'history',
    },
    entries: {
      bernstein: {
        title: 'Bernstein',
        subtitle: 'Kubernetes container orchestration',
        summary:
          'Deployment of a microservices voting application on a multi-node Kubernetes cluster hosted on Google Cloud.',
        role: 'A team project with three people. I handled Traefik as the reverse proxy and load balancer, and the Result service. The hardest part was finding out why nothing worked: firewall rules, wrong ConfigMap names, PostgreSQL authentication.',
      },
      nexus: {
        title: 'Nexus',
        subtitle: 'Real-time chat application',
        summary:
          'A Discord-like real-time chat: authentication, server and channel management, WebSocket messaging and message history.',
        role: 'An Epitech project with four people, in Rust, a language required by the school. I coordinated the team and set up a Trello board to split the work. The main difficulty was avoiding merge conflicts with four people on the same code.',
      },
      epitale: {
        title: 'EPITALE',
        subtitle: '2D role-playing game',
        summary:
          'A top-down RPG built in Java with LibGDX: turn-based fights with bullet hell phases, exploration, NPC dialogue and morality mechanics.',
      },
      hungerjob: {
        title: 'HungerJob',
        subtitle: 'Job board platform',
        summary:
          'A full-stack job board: authentication, job posting management and an admin dashboard.',
      },
    },
  },

  skills: {
    title: 'Skills',
    intro: 'Technologies I have used in class or on my projects.',
    groups: {
      devops: 'DevOps & CI/CD',
      cloud: 'Cloud & orchestration',
      languages: 'Languages',
      frameworks: 'Frameworks',
      databases: 'Databases',
      tools: 'Systems & tools',
    },
    languagesTitle: 'Spoken languages',
    languages: [
      { name: 'French', level: 'native' },
      { name: 'English', level: 'B2 level' },
    ],
  },

  background: {
    title: 'Background',
    openTitle: 'Looking for an apprenticeship',
    companyLabel: 'Work placement',
    milestones: {
      epitech: {
        school: {
          degree: 'Master of Science in Computer Science',
          degreeNote: 'French state-certified qualification (RNCP 38114). Project-based learning and agile methods.',
        },
      },
      premsc: {
        school: {
          degree: 'Pre-MSc',
          degreeNote:
            'Bridge year for students coming from other fields: software development fundamentals, through projects.',
        },
      },
      insa: {
        school: {
          degree: 'Electrical engineering',
          degreeNote: 'Engineering program, work-study track.',
        },
        company: {
          role: 'Electrical engineering apprentice',
          missions: [
            'Wrote maintenance campaign sheets for replacing bus door parts',
            'Built Excel sheets listing manufacturer part numbers for the parts to replace',
            'Checked warehouse stock management',
          ],
        },
      },
      raspail: {
        school: {
          degree: 'BTS in Electrical Engineering',
          degreeNote: 'Two-year technical degree. Final project: design study for the renovation of a lighting system.',
        },
        company: {
          role: 'Substation technician apprentice',
          missions: [
            'Preventive maintenance of high-voltage feeder protections',
            'Commissioning of digital control and command cabinets',
            'Troubleshooting of low-voltage electrical equipment',
          ],
        },
      },
      avb: {
        company: {
          role: 'Maintenance technician internship',
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
    lead: 'I am looking for a software apprenticeship, starting now and running until August 2028, with 4 days at work and 1 day at school each week. The easiest way to reach me is by email.',
    copy: 'Copy address',
    copied: 'Address copied',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    cvLabel: 'Download CV (PDF)',
  },

  footer: {
    rights: 'Reproduction for commercial purposes is prohibited.',
    sourceCode: 'Source code',
  },
}
