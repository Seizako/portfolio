# Portfolio — Ludovic Weng

Portfolio personnel, bilingue français / anglais, déployé sur Vercel :
**<https://ludovic-weng.vercel.app/>**

## Stack

| | |
|---|---|
| Framework | React 19 |
| Langage | TypeScript |
| Build | Vite 6 |
| Styles | Tailwind CSS v4 (configuration en CSS, `src/styles/index.css`) |
| Polices | Archivo Variable + IBM Plex Mono, auto-hébergées, sous-ensemble latin |
| Icônes | SVG locaux (`src/components/icons.tsx`) |
| Images | Générées au préalable par `sharp` (AVIF / WebP / JPEG) |

Aucune librairie de composants, aucun routeur, aucune librairie d'animation.

## Démarrer

```bash
npm install
npm run dev
```

## Organisation

```
index.html          entrée française  → /
en/index.html       entrée anglaise   → /en/
assets/             sources non publiées (photo d'origine)
public/             fichiers servis tels quels (images générées, CV, favicon, sitemap)
scripts/            génération des images
src/
  content/          données non traduisibles : liens, dépôts, technologies, dates
  i18n/             textes français et anglais, plus le type qui les contraint
  components/       sections de la page et composants d'interface partagés
  hooks/            apparition au défilement, thème clair/sombre
  lib/              chemins des fichiers publics, srcset du portrait
  styles/           tokens de couleur, thème, animations
  theme-init.js     thème appliqué avant le premier rendu, injecté dans le HTML par vite.config.ts
```

### Ajouter un projet

1. Une entrée dans `src/content/projects.ts` (identifiant, dépôt, technologies, année).
2. Le titre, le résumé et le rôle dans **`src/i18n/fr.ts` et `src/i18n/en.ts`**.

`Dictionary` (dans `src/i18n/dictionary.ts`) impose les deux traductions : si l'une
manque, `npm run build` échoue avant le déploiement.

## Direction visuelle

Le langage visuel est celui d'un plan d'architecte imprimé sur beau papier —
la précision d'un plan d'ingénierie, présentée avec la retenue d'une édition
soignée : de l'échelle, de l'espace, peu de cadres.

- **Couleur.** Encre sur papier ivoire, et un seul accent : le vert-jaune du
  conducteur de terre (NF C 15-100), désaturé. C'est la couleur du métier d'où
  vient Ludovic. Il reste rare : numéros de section, lien actif, « ma partie »
  dans les schémas. Pour le changer, deux variables dans `src/styles/index.css` :
  `--earth` dans `:root` et dans `.dark`.
- **Typographie.** Une règle stricte : **IBM Plex Mono ne sert qu'aux données
  lisibles par une machine** — années, technologies, numéros, étiquettes du
  schéma. Archivo porte tout le langage humain ; son axe de largeur sert au nom
  et aux grands titres, composés en Archivo élargie. Trois classes encodent ce
  système : `.display`, `.marker`, `.datum`.
- **Structure.** Chaque section s'ouvre sur un repère numéroté (`01 — À propos
  ————`), comme les zones d'un plan. Le menu latéral reprend ces numéros et
  marque la section en cours.
- **Schémas.** Les projets mis en avant sont illustrés par leur architecture,
  dessinée dans la même grammaire que le Parcours (`ProjectDiagram.tsx`).
- **Signature.** La section Parcours est un schéma unifilaire — le dessin qu'on
  trace en poste source. Son terminal supérieur est ouvert et en pointillés :
  le circuit n'est pas fermé, c'est la demande d'alternance. Formation et
  entreprise y sont réunies par période plutôt que séparées, parce qu'elles
  l'étaient réellement.

## Déploiement

Le site est hébergé sur Vercel, connecté au dépôt GitHub. Chaque push sur `main`
déclenche automatiquement un build (`npm run build`) et un déploiement. 
Aucune configuration supplémentaire n'est nécessaire.

## Licence

Le code est consultable librement. Le contenu, les textes et les images
sont la propriété de Ludovic Weng — reproduction à des fins commerciales interdite.
