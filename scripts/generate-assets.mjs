// Génère les images du site (photo, favicon, carte Open Graph) depuis
// assets/photo-source.jpg. À lancer à la main avec `npm run assets`, pas au
// build : les fichiers produits sont commit dans public/.
//
// Le texte de la carte OG utilise Archivo si elle est installée sur la
// machine, sinon une sans-serif de repli.
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const source = resolve(root, 'assets/photo-source.jpg')
const outputDir = resolve(root, 'public')
const imagesDir = resolve(outputDir, 'images')

const PHOTO_WIDTHS = [320, 480, 640]
const SANS = "Archivo, 'Ubuntu Sans', 'DejaVu Sans', sans-serif"

const COLORS = {
  background: '#101216',
  border: '#262a30',
  foreground: '#f2f4f5',
  muted: '#a6aeb8',
  accent: '#c4d82e',
  ink: '#16181c',
}

// Portrait en AVIF/WebP + repli JPEG
async function generatePhotos() {
  const results = []

  for (const width of PHOTO_WIDTHS) {
    const base = sharp(source).resize(width, width, { fit: 'cover', position: 'attention' })

    const variants = [
      ['avif', base.clone().avif({ quality: 55, effort: 6 })],
      ['webp', base.clone().webp({ quality: 76, effort: 6 })],
      ['jpg', base.clone().jpeg({ quality: 80, mozjpeg: true })],
    ]

    for (const [extension, pipeline] of variants) {
      const file = resolve(imagesDir, `photo-${width}.${extension}`)
      const { size } = await pipeline.toFile(file)
      results.push([`images/photo-${width}.${extension}`, size])
    }
  }

  return results
}

// Découpe la photo en carré arrondi pour la carte OG
async function roundedPhoto(size, radius) {
  const photo = await sharp(source)
    .resize(size, size, { fit: 'cover', position: 'attention' })
    .toBuffer()

  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
       <rect width="${size}" height="${size}" rx="${radius}" fill="#fff"/>
     </svg>`,
  )

  return sharp(photo)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer()
}

// Génère l'image de partage (1200x630) pour LinkedIn, Slack, etc.
async function generateOpenGraph() {
  const photoSize = 300
  const photo = await roundedPhoto(photoSize, 24)

  const card = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
       <rect width="1200" height="630" fill="${COLORS.background}"/>
       <rect x="1" y="1" width="1198" height="628" fill="none"
             stroke="${COLORS.border}" stroke-width="2"/>
       <g font-family="${SANS}" fill="${COLORS.foreground}">
         <circle cx="86" cy="176" r="6" fill="${COLORS.accent}"/>
         <text x="104" y="183" font-size="24" font-weight="500" fill="${COLORS.muted}">
           Epitech Paris — Master of Science
         </text>
         <text x="80" y="290" font-size="82" font-weight="700" letter-spacing="-2">
           Ludovic Weng
         </text>
         <text x="80" y="352" font-size="30" font-weight="400" fill="${COLORS.muted}">
           DevOps · Cloud &amp; infrastructure · Software
         </text>
         <text x="80" y="474" font-size="24" font-weight="500" fill="${COLORS.accent}">
           ludovic-weng.vercel.app
         </text>
       </g>
     </svg>`,
  )

  const file = resolve(imagesDir, 'og.jpg')
  const { size } = await sharp(card)
    .composite([{ input: photo, top: 165, left: 820 }])
    .flatten({ background: COLORS.background })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(file)

  return [['images/og.jpg', size]]
}

// Logo LW en tracés SVG (pas en texte, pour pas dépendre d'une police installée)
const monogram = (background, ink) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
     <rect width="64" height="64" rx="14" fill="${background}"/>
     <g fill="none" stroke="${ink}" stroke-width="5.5"
        stroke-linecap="round" stroke-linejoin="round">
       <path d="M15 19 V45 H26"/>
       <path d="M32 19 L37 45 L42 30 L47 45 L52 19"/>
     </g>
   </svg>`

async function generateIcons() {
  const favicon = monogram(COLORS.ink, COLORS.foreground)
  await writeFile(resolve(outputDir, 'favicon.svg'), `${favicon}\n`, 'utf8')

  const { size } = await sharp(Buffer.from(monogram(COLORS.ink, COLORS.foreground)))
    .resize(180, 180)
    .png({ compressionLevel: 9 })
    .toFile(resolve(outputDir, 'apple-touch-icon.png'))

  return [
    ['favicon.svg', Buffer.byteLength(favicon)],
    ['apple-touch-icon.png', size],
  ]
}

await mkdir(imagesDir, { recursive: true })

const generated = [
  ...(await generatePhotos()),
  ...(await generateOpenGraph()),
  ...(await generateIcons()),
]

const total = generated.reduce((sum, [, size]) => sum + size, 0)
for (const [name, size] of generated) {
  console.log(`${name.padEnd(28)} ${(size / 1024).toFixed(1).padStart(7)} Ko`)
}
console.log(`${'total'.padEnd(28)} ${(total / 1024).toFixed(1).padStart(7)} Ko`)
