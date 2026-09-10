import type { Dictionary } from './dictionary'

export const fr: Dictionary = {
  locale: 'fr',

  meta: {
    title: "Ludovic Weng — Étudiant Epitech en recherche d'alternance",
    description:
      "Étudiant en Master of Science à Epitech Paris, à la recherche d'une alternance de 2 ans en informatique. DevOps, cloud et infrastructure, développement logiciel.",
    photoAlt: 'Portrait de Ludovic Weng',
  },

  nav: {
    skipToContent: 'Aller au contenu',
    primary: 'Navigation principale',
    menu: 'Ouvrir le menu',
    close: 'Fermer le menu',
    about: 'À propos',
    projects: 'Projets',
    skills: 'Compétences',
    background: 'Parcours',
    contact: 'Contact',
    switchLanguage: 'EN — switch to English',
    switchTheme: 'Changer de thème',
  },

  hero: {
    availability: "En recherche d'alternance",
    role: 'Étudiant en Master of Science à Epitech Paris',
    pitch:
      "Je me forme au développement logiciel, avec trois ans d'alternance en électrotechnique derrière moi. Je construis des projets pour apprendre en faisant, et je cherche une entreprise où continuer sur ce rythme.",
    lookingForLabel: 'Je recherche',
    lookingFor: "Une alternance de 2 ans — 4 jours en entreprise, 1 jour à l'école",
    interestsLabel: 'Ce qui m’intéresse',
    interests: ['DevOps', 'Cloud & infrastructure'],
    seeProjects: 'Voir mes projets',
    contactMe: 'Me contacter',
    downloadCv: 'Télécharger le CV',
  },

  about: {
    title: 'À propos',
    paragraphs: [
      "C'est pendant mon année d'ingénieur à l'INSA Strasbourg que j'ai découvert la programmation. Ce qui m'a accroché, c'est de voir tourner ce que je construis, un jeu qu'on peut lancer, un site qu'on peut parcourir, un résultat qui existe et qu'on peut essayer tout de suite. J'ai décidé d'en faire mon métier et je suis entré à Epitech l'année suivante.",
      "Avant ça, j'ai passé trois ans en alternance en électrotechnique, chez Enedis sur les postes source puis à la Compagnie des Transports Strasbourgeois. J'y ai pris l'habitude du travail en entreprise et des environnements où la rigueur n'est pas négociable. C'est aussi de là que vient mon intérêt pour l'infrastructure et le DevOps, parce qu'un poste source et un cluster posent au fond la même question, comment faire pour que ça tienne debout et comment réagir quand ça tombe.",
      "En dehors du code, je lis beaucoup, je joue au billard et au volley, et je fais de la musculation au poids du corps.",
    ],
  },

  projects: {
    title: 'Projets',
    intro:
      "Des projets menés dans le cadre de ma formation, presque tous en équipe. Le code de chacun est public.",
    viewSource: 'Voir le code',
    roleLabel: 'Mon rôle',
    otherProjects: 'Autres projets',
    entries: {
      bernstein: {
        title: 'Bernstein — Orchestration de conteneurs Kubernetes',
        summary:
          "Déploiement d'une application de vote en microservices sur un cluster Kubernetes multi-nœuds, hébergé sur Google Cloud.",
        role: "Projet de groupe à trois. Je me suis occupé de Traefik comme reverse proxy et load balancer, ainsi que du service Result. Le plus difficile a été de déboguer pourquoi rien ne fonctionnait : règles de firewall, noms de ConfigMap incorrects, authentification PostgreSQL.",
      },
      nexus: {
        title: 'Nexus — Application de chat en temps réel',
        summary:
          "Une messagerie temps réel de type Discord : authentification, gestion des serveurs et des salons, échanges par WebSockets et historique des messages.",
        role: "Projet Epitech à quatre, en Rust — langage imposé, courbe d'apprentissage raide mais résultat solide. J'ai pris en charge la coordination de l'équipe et mis en place Trello pour garder tout le monde aligné. Le vrai défi a été d'éviter les conflits de merge à quatre sur la même base de code.",
      },
      epitale: {
        title: 'EPITALE — Jeu de rôle en 2D',
        summary:
          "Un RPG en vue de dessus développé en Java avec LibGDX : combat au tour par tour teinté de bullet hell, exploration, dialogues avec les PNJ et mécaniques de moralité.",
        role: "Projet Epitech à trois, conduit selon les principes de la programmation orientée objet, avec diagrammes UML, couverture de tests JaCoCo et documentation Javadoc. Le jeu était ambitieux pour notre niveau de l'époque, mais nous l'avons livré.",
      },
      hungerjob: {
        title: "HungerJob — Plateforme d'offres d'emploi",
        summary:
          "Une plateforme d'annonces fullstack : authentification, gestion des offres et tableau de bord d'administration.",
        role: "Projet Epitech à trois. J'ai travaillé sur une partie du frontend et sur l'API REST côté backend, en gérant les opérations CRUD. Une bonne première approche du développement fullstack.",
      },
      digitalresume: {
        title: 'Digital Resume — CV en ligne',
        summary: 'Un CV personnel responsive, écrit à la main en HTML et CSS.',
        role: "Mon premier projet web, réalisé seul en quatre jours pour mettre en pratique ce que je venais d'apprendre. Rien de complexe, mais c'est là que tout a commencé.",
      },
    },
  },

  skills: {
    title: 'Compétences',
    intro:
      "Les technologies que j'ai réellement utilisées, en cours ou sur les projets ci-dessus.",
    groups: {
      languages: 'Langages',
      web: 'Web & frameworks',
      cloud: 'Cloud & DevOps',
      databases: 'Bases de données',
      tools: 'Outils',
    },
    languagesTitle: 'Langues',
    languages: [
      { name: 'Français', level: 'Langue maternelle' },
      { name: 'Anglais', level: 'Niveau B2' },
    ],
  },

  background: {
    title: 'Parcours',
    openTitle: 'Alternance recherchée',
    openDetail: "2 ans — 4 jours en entreprise, 1 jour à l'école.",
    schoolLabel: 'Formation',
    companyLabel: 'En entreprise',
    milestones: {
      epitech: {
        school: {
          degree: 'Master of Science — Informatique',
          degreeNote: 'Titre RNCP 38114. Pédagogie par projets et méthodologies agiles.',
        },
      },
      insa: {
        school: {
          degree: 'Génie électrique',
          degreeNote: "Cursus d'ingénieur en alternance.",
        },
        company: {
          role: 'Apprenti ingénieur génie électrique',
          missions: [
            "Projet de conception d'une étude de rénovation du système d'éclairage",
            'Rédaction de fiches de campagne pour le remplacement des pièces des portes de bus',
            'Élaboration de tableaux Excel répertoriant les références constructeurs des pièces à remplacer',
            'Contrôle de la gestion des stocks de matériel en magasin',
          ],
        },
      },
      raspail: {
        school: { degree: 'BTS Électrotechnique' },
        company: {
          role: 'Apprenti technicien poste source',
          missions: [
            'Maintenance préventive des protections des départs haute tension',
            'Mise en service des armoires de contrôle-commande numérique',
            'Dépannage des équipements électriques basse tension',
          ],
        },
      },
      avb: {
        company: {
          role: 'Stage — technicien de maintenance',
          missions: [
            "Maintenance préventive des équipements d'alarme intrusion",
            'Intervention en dépannage sur les systèmes électriques',
          ],
        },
      },
    },
  },

  contact: {
    title: 'Contact',
    lead: "Je cherche une alternance de deux ans en informatique, sur un rythme de 4 jours en entreprise et 1 jour à l'école. Le plus simple est de m'écrire directement.",
    emailLabel: 'Email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    cvLabel: 'Télécharger le CV (PDF)',
  },

  footer: {
    identityLabel: 'Identité',
    locationLabel: 'Lieu',
    rights: 'Reproduction à des fins commerciales interdite.',
    sourceCode: 'Code source',
  },
}
