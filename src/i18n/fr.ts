import type { Dictionary } from './dictionary'

export const fr: Dictionary = {
  locale: 'fr',

  meta: {
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
    switchLanguage: 'EN - switch to English',
    switchTheme: 'Changer de thème',
  },

  hero: {
    availability: "En recherche d'alternance",
    role: 'Étudiant en Master of Science à Epitech Paris',
    pitch:
      "Je me forme au développement logiciel, avec trois ans d'alternance en électrotechnique derrière moi. J'apprends en réalisant des projets, et je cherche une entreprise où continuer de cette façon.",
    lookingForLabel: 'Disponibilité',
    lookingFor: "Dès maintenant, jusqu'en août 2028",
    rhythmLabel: 'Rythme',
    rhythm: "4 jours en entreprise, 1 jour à l'école",
    interestsLabel: 'Domaines',
    interests: ['Support IT', 'développement', 'DevOps'],
    seeProjects: 'Voir les projets',
    contactMe: 'Me contacter',
    downloadCv: 'Télécharger le CV',
  },

  about: {
    title: 'À propos',
    paragraphs: [
      "J'ai découvert la programmation pendant mon année d'ingénieur à l'INSA Strasbourg. Ce qui m'a plu, c'est de voir tourner tout de suite ce que je construis. J'ai décidé d'en faire mon métier et je suis entré à Epitech l'année suivante.",
      "Avant ça, j'ai passé trois ans en alternance en électrotechnique, d'abord chez Enedis sur les postes source, puis à la Compagnie des Transports Strasbourgeois. J'y ai appris à travailler en entreprise et à suivre des procédures strictes.",
      "Sur un poste source, les installations ne doivent pas tomber en panne, et quand elles tombent, il faut intervenir vite. C'est ce qui m'attire aujourd'hui dans l'infrastructure et le DevOps.",
    ],
    hobbiesLabel: "Centres d'intérêt",
    hobbies: 'Lecture, tennis de table, billard.',
  },

  projects: {
    title: 'Projets',
    intro:
      'Des projets réalisés pendant ma formation, presque tous en équipe. Tout le code est public.',
    viewSource: 'Voir le code',
    roleLabel: 'Mon rôle',
    otherProjects: 'Autres projets',
    diagram: {
      caption: "Schéma de l'architecture déployée",
      bernsteinAlt:
        "Schéma de l'architecture de Bernstein : le trafic Internet passe par Traefik, qui répartit vers les services Vote et Result. Vote écrit dans Redis, un worker transfère vers PostgreSQL, que Result lit.",
      nexusAlt:
        "Schéma de l'architecture de Nexus : le client Next.js échange en WebSockets avec le serveur Rust, qui conserve les données dans PostgreSQL et MongoDB. Le tout tourne dans Docker.",
      cluster: 'Cluster GKE multi-nœuds',
      webService: 'service web',
      queue: "file d'attente",
      storage: 'stockage',
      client: 'navigateur',
      server: 'Serveur Rust',
      serverDetail: 'auth, salons, messages',
      history: 'historique',
    },
    entries: {
      bernstein: {
        title: 'Bernstein',
        subtitle: 'Orchestration de conteneurs Kubernetes',
        summary:
          "Déploiement d'une application de vote en microservices sur un cluster Kubernetes multi-nœuds, hébergé sur Google Cloud.",
        role: "Projet de groupe à trois. Je me suis occupé de Traefik comme reverse proxy et load balancer, ainsi que du service Result. Le plus difficile a été de déboguer pourquoi rien ne fonctionnait : règles de firewall, noms de ConfigMap incorrects, authentification PostgreSQL.",
      },
      nexus: {
        title: 'Nexus',
        subtitle: 'Application de chat en temps réel',
        summary:
          "Une messagerie temps réel de type Discord : authentification, gestion des serveurs et des salons, échanges par WebSockets et historique des messages.",
        role: "Projet Epitech à quatre, en Rust, un langage imposé par l'école. Je me suis occupé de la coordination de l'équipe et j'ai mis en place un tableau Trello pour répartir les tâches. La principale difficulté a été d'éviter les conflits de merge à quatre sur le même code.",
      },
      epitale: {
        title: 'EPITALE',
        subtitle: 'Jeu de rôle en 2D',
        summary:
          "Un RPG en vue de dessus développé en Java avec LibGDX : combats au tour par tour avec des phases de bullet hell, exploration, dialogues avec les PNJ et mécaniques de moralité.",
      },
      hungerjob: {
        title: 'HungerJob',
        subtitle: "Plateforme d'offres d'emploi",
        summary:
          "Un site d'offres d'emploi fullstack : authentification, gestion des offres et tableau de bord d'administration.",
      },
    },
  },

  skills: {
    title: 'Compétences',
    intro:
      "Les technologies que j'ai utilisées en cours ou sur mes projets.",
    groups: {
      devops: 'DevOps & CI/CD',
      cloud: 'Cloud & orchestration',
      languages: 'Langages',
      frameworks: 'Frameworks',
      databases: 'Bases de données',
      tools: 'Systèmes & outils',
    },
    languagesTitle: 'Langues',
    languages: [
      { name: 'Français', level: 'langue maternelle' },
      { name: 'Anglais', level: 'niveau B2' },
    ],
  },

  background: {
    title: 'Parcours',
    openTitle: 'Alternance recherchée',
    companyLabel: 'En entreprise',
    milestones: {
      epitech: {
        school: {
          degree: 'Master of Science en informatique',
          degreeNote: 'Titre RNCP 38114. Pédagogie par projets et méthodologies agiles.',
        },
      },
      premsc: {
        school: {
          degree: 'Pré-MSc',
          degreeNote:
            "Année de mise à niveau pour les profils venus d'autres filières : les bases du développement logiciel, par projets.",
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
            'Rédaction de fiches de campagne pour le remplacement des pièces des portes de bus',
            'Élaboration de tableaux Excel répertoriant les références constructeurs des pièces à remplacer',
            'Contrôle de la gestion des stocks de matériel en magasin',
          ],
        },
      },
      raspail: {
        school: {
          degree: 'BTS Électrotechnique',
          degreeNote: "Projet de conception d'une étude de rénovation du système d'éclairage.",
        },
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
          role: 'Stage de technicien de maintenance',
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
    lead: "Je cherche une alternance en informatique, disponible dès maintenant et jusqu'en août 2028, sur un rythme de 4 jours en entreprise et 1 jour à l'école. Le plus simple est de m'écrire par e-mail.",
    copy: "Copier l'adresse",
    copied: 'Adresse copiée',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
    cvLabel: 'Télécharger le CV (PDF)',
  },

  footer: {
    rights: 'Reproduction à des fins commerciales interdite.',
    sourceCode: 'Code source',
  },
}
