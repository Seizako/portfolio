let menu = document.getElementById("menu");
let button = document.getElementById("menu_button");

button.addEventListener("click", function () {
  menu.classList.toggle("active");
});

let menuLink = menu.querySelectorAll("a");

menuLink.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});

document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.remove("active");
  }
});

const rain = document.querySelector('.rain');
for (let i = 0; i < 30; i++) {
  let drop = document.createElement('div');
  drop.className = 'rain-drop';
  drop.style.left = Math.random() * 100 + '%';
  drop.style.animationDelay = Math.random() * 2 + 's';
  rain.appendChild(drop);
}

const snow = document.querySelector('.snow');
for (let i = 0; i < 50; i++) {
  let flake = document.createElement('div');
  flake.className = 'snow-flake';
  flake.style.left = Math.random() * 100 + '%';
  flake.style.animationDelay = Math.random() * 3 + 's';
  snow.appendChild(flake);
}

const leaves = document.createElement('div');
leaves.className = 'leaves-container';
document.querySelector('#projects').prepend(leaves);

for (let i = 0; i < 20; i++) {
  let leaf = document.createElement('div');
  leaf.className = 'leaf';
  leaf.style.left = Math.random() * 100 + '%';
  leaf.style.animationDelay = Math.random() * 5 + 's';
  leaf.style.animationDuration = (Math.random() * 3 + 4) + 's';
  leaves.appendChild(leaf);
}

const translations = {
  en: {
    nav: { home: "Home", about: "About me", projects: "Projects", contact: "Contact" },
    home: { subtitle: "Epitech Student | Looking for an Apprenticeship" },
    about: {
      title: "About me",
      text: "I moved from electrical engineering to software when I realized I needed to actually see what I build. A game you can play, a website you can click through. That immediate feedback is what got me hooked. I'm currently studying at Epitech Paris, working toward a specific goal and building the skills to get there. Outside of code, I recently got back into digital art on my iPad. Not good yet, but it's a start."
    },
    projects: {
      title: "Projects",
      nexus: {
        title: "Nexus - Real-Time Chat Application",
        desc: "Nexus is an Epitech project in Rust with a team of 4. I took on the project lead role and set up Trello to keep everyone aligned. Avoiding merge conflicts at 4 on the same codebase was the real challenge. Rust was imposed, steep learning curve but solid result."
      },
      epitale: {
        title: "EPITALE - RPG Adventure Game",
        desc: "EPITALE is an Epitech project in Java with a team of 3. The game was ambitious for our level at the time, but we shipped it. Learned a lot about OOP and working under pressure."
      },
      jobboard: {
        title: "HungerJob - Job Board Platform",
        desc: "HungerJob is an Epitech project built with a team of 3. I worked on part of the frontend and the REST API on the backend, handling CRUD operations. A good introduction to full-stack development."
      },
      digitalresume: {
        title: "Digital Resume",
        desc: "Digital Resume is my first web project. Built to put into practice what I had just learned in HTML and CSS. Nothing fancy, but it's where it all started."
      }
    },
    contact: {
      title: "Contact",
      download: "Download CV",
      email: "Email :",
      message: "Message :",
      submit: "Submit"
    },
    footer: { rights: "Reproduction for commercial purposes is prohibited" }
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", projects: "Projets", contact: "Contact" },
    home: { subtitle: "Étudiant Epitech | À la recherche d'une alternance" },
    about: {
      title: "À propos",
      text: "J'ai quitté le génie électrique quand j'ai réalisé que j'avais besoin de voir ce que je crée. Un jeu qu'on peut lancer, un site qu'on peut parcourir. Ce résultat concret, c'est ce qui m'a accroché. Je suis actuellement étudiant à Epitech Paris, avec un objectif précis en tête et les compétences à construire pour y arriver. En dehors du code, j'ai repris le dessin numérique sur iPad. Pas encore bon, mais c'est un début."
    },
    projects: {
      title: "Projets",
      nexus: {
        title: "Nexus - Application de Chat en Temps Réel",
        desc: "Nexus est un projet Epitech en Rust à 4. J'ai pris en charge la coordination et mis en place Trello pour garder l'équipe alignée. Éviter les conflits de merge à 4 sur le même code, c'était le vrai défi. Rust était imposé, courbe d'apprentissage raide mais résultat solide."
      },
      epitale: {
        title: "EPITALE - Jeu de Rôle Aventure",
        desc: "EPITALE est un projet Epitech en Java réalisé à 3. Le jeu était ambitieux pour notre niveau à l'époque, mais on l'a livré. Beaucoup appris sur la POO et sur le travail en équipe sous pression."
      },
      jobboard: {
        title: "HungerJob - Plateforme d'Offres d'Emploi",
        desc: "HungerJob est un projet Epitech réalisé à 3. J'ai travaillé sur une partie du frontend et l'API REST côté backend, en gérant les opérations CRUD. Une bonne introduction au développement fullstack."
      },
      digitalresume: {
        title: "CV Numérique",
        desc: "Digital Resume est mon premier projet web. Réalisé pour mettre en pratique ce que je venais d'apprendre en HTML et CSS. Rien de complexe, mais c'est là que tout a commencé."
      }
    },
    contact: {
      title: "Contact",
      download: "Télécharger le CV",
      email: "Email :",
      message: "Message :",
      submit: "Envoyer"
    },
    footer: { rights: "Reproduction à des fins commerciales interdite" }
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function getText(key) {
  const keys = key.split('.');
  let result = translations[currentLang];
  for (let k of keys) {
    result = result[k];
  }
  return result;
}

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(function (element) {
    element.textContent = getText(element.dataset.i18n);
  });
  document.documentElement.lang = currentLang;
  document.getElementById('lang-toggle').textContent = currentLang === 'en' ? 'FR' : 'EN';
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'fr' : 'en';
  localStorage.setItem('lang', currentLang);
  updateContent();
}

updateContent();