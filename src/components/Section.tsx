import type { ReactNode } from 'react'
import { Container } from './Container'
import { useReveal } from '@/hooks/useReveal'
import type { SectionId } from '@/content/navigation'

type SectionProps = {
  id: SectionId
  title: string
  intro?: string
  children: ReactNode
}

// Bloc réutilisé pour chaque section. Le titre reste collé dans la marge de gauche au scroll.
export function Section({ id, title, intro, children }: SectionProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <section id={id} ref={ref} className="reveal border-t border-rule">
      <Container>
        <div className="grid gap-y-8 py-16 sm:py-20 lg:grid-cols-[8rem_minmax(0,1fr)] lg:gap-x-14 lg:py-28">
          <div className="lg:sticky lg:top-12 lg:self-start">
            <span aria-hidden className="mb-3 block h-px w-8 bg-earth" />
            <h2 className="marker text-ink">{title}</h2>
          </div>

          <div>
            {intro && (
              <p className="mb-10 max-w-[56ch] text-ink-2">{intro}</p>
            )}
            {children}
          </div>
        </div>
      </Container>
    </section>
  )
}
