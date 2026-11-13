// Largeurs produites par scripts/generate-assets.mjs
const PHOTO_WIDTHS = [320, 480, 640] as const

// Doit suivre les tailles affichées par Photo.tsx
export const photoSizes = '(min-width: 1024px) 232px, (min-width: 640px) 208px, 160px'

export const photoSrcSet = (extension: string, resolve: (path: string) => string) =>
  PHOTO_WIDTHS.map((width) => `${resolve(`images/photo-${width}.${extension}`)} ${width}w`).join(', ')
