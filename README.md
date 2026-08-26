# Portfolio — Ludovic Weng

Portfolio personnel, bilingue français / anglais, déployé sur GitHub Pages :
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
  components/       une section de page par fichier
  hooks/            apparition au défilement, thème clair/sombre
  styles/           tokens de couleur, thème, unique animation
```

### Ajouter un projet

1. Une entrée dans `src/content/projects.ts` (identifiant, dépôt, technologies, année).
2. Le titre, le résumé et le rôle dans **`src/i18n/fr.ts` et `src/i18n/en.ts`**.

`Dictionary` (dans `src/i18n/dictionary.ts`) impose les deux traductions : si l'une
manque, `npm run build` échoue avant le déploiement.

## Direction visuelle

Le langage visuel est celui de la documentation technique — la précision d'un
plan d'ingénierie, pas l'esthétique d'un site de démonstration.

- **Couleur.** Encre froide sur papier technique, et un seul accent : le
  vert-jaune du conducteur de terre (NF C 15-100), désaturé. C'est la couleur du
  métier d'où vient Ludovic. Pour la changer, deux variables dans
  `src/styles/index.css` : `--earth` dans `:root` et dans `.dark`.
- **Typographie.** Une règle stricte : **IBM Plex Mono ne sert qu'aux données
  lisibles par une machine** — années, technologies, champs du cartouche,
  étiquettes du schéma. Archivo porte tout le langage humain. Trois classes
  encodent ce système : `.nameplate`, `.marker`, `.datum`.
- **Structure.** Le titre de chaque section vit dans le rail de marge et reste
  collé pendant la lecture, à la manière du repère de zone d'un plan.
- **Signature.** La section Parcours est un schéma unifilaire — le dessin qu'on
  trace en poste source. Son terminal supérieur est ouvert et en pointillés :
  le circuit n'est pas fermé, c'est la demande d'alternance. Formation et
  entreprise y sont réunies par période plutôt que séparées, parce qu'elles
  l'étaient réellement.

## Déploiement

`.github/workflows/deploy.yml` construit le site et le publie sur GitHub Pages
à chaque push sur `main`.

> La source des Pages doit être réglée sur **GitHub Actions**
> (*Settings → Pages → Source*), et non sur une branche.

## Licence

Le code est consultable librement. Le contenu, les textes et les images
sont la propriété de Ludovic Weng — reproduction à des fins commerciales interdite.
