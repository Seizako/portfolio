import { readFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { profile } from './src/content/profile'
import { photoSizes, photoSrcSet } from './src/lib/photo'

const BASE = '/'
const SITE_URL = 'https://ludovic-weng.vercel.app/'

const path = (relative: string) => fileURLToPath(new URL(relative, import.meta.url))

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: SITE_URL,
  email: `mailto:${profile.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Epitech Paris' },
    { '@type': 'CollegeOrUniversity', name: 'INSA Strasbourg' },
    { '@type': 'EducationalOrganization', name: 'Lycée Raspail' },
  ],
  sameAs: [profile.links.linkedin, profile.links.github],
}

// Ajoute au <head> des deux pages le thème, le JSON-LD et le préchargement de la photo
function sharedHead(): Plugin {
  const themeScript = readFileSync(path('./src/theme-init.js'), 'utf8')

  return {
    name: 'shared-head',
    transformIndexHtml: () => [
      { tag: 'script', children: themeScript, injectTo: 'head-prepend' },
      {
        tag: 'script',
        attrs: { type: 'application/ld+json' },
        children: JSON.stringify(person),
        injectTo: 'head',
      },
      {
        tag: 'link',
        attrs: {
          rel: 'preload',
          as: 'image',
          type: 'image/avif',
          imagesrcset: photoSrcSet('avif', (file) => `${BASE}${file}`),
          imagesizes: photoSizes,
          fetchpriority: 'high',
        },
        injectTo: 'head',
      },
    ],
  }
}

export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss(), sharedHead()],
  resolve: {
    alias: { '@': path('./src') },
  },
  build: {
    rollupOptions: {
      input: {
        fr: path('./index.html'),
        en: path('./en/index.html'),
      },
    },
  },
})
