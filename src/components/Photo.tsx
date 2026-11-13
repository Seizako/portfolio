import { asset } from '@/lib/asset'
import { photoSizes, photoSrcSet } from '@/lib/photo'

export function Photo({ alt }: { alt: string }) {
  return (
    <picture>
      <source type="image/avif" srcSet={photoSrcSet('avif', asset)} sizes={photoSizes} />
      <source type="image/webp" srcSet={photoSrcSet('webp', asset)} sizes={photoSizes} />
      <img
        src={asset('images/photo-480.jpg')}
        srcSet={photoSrcSet('jpg', asset)}
        sizes={photoSizes}
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
