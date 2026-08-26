import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vercel sert le site à la racine du domaine
const BASE = '/'

export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    rollupOptions: {
      input: {
        fr: fileURLToPath(new URL('./index.html', import.meta.url)),
        en: fileURLToPath(new URL('./en/index.html', import.meta.url)),
      },
    },
  },
})
