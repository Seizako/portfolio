import { profile } from '@/content/profile'
import { asset } from '@/lib/asset'

const srcSet = (extension: string) =>
  profile.photo.widths
    .map((width) => `${asset(`images/photo-${width}.${extension}`)} ${width}w`)
    .join(', ')

// Photo en AVIF/WebP avec repli JPEG pour les vieux navigateurs.
export function Photo({ alt, sizes }: { alt: string; sizes: string }) {
  return (
    <picture>
      <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet('webp')} sizes={sizes} />
      <img
        src={asset('images/photo-480.jpg')}
        srcSet={srcSet('jpg')}
        sizes={sizes}
        alt={alt}
        width={480}
        height={480}
        decoding="async"
        fetchPriority="high"
        className="size-28 border border-rule object-cover sm:size-40 lg:size-52"
      />
    </picture>
  )
}
