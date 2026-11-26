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

// En-tête de section : le titre suivi d'un filet, comme un repère de plan
export function Section({ id, title, intro, children }: SectionProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <section id={id} ref={ref} className="reveal">
      <Container>
        <div className="py-20 sm:py-24 lg:py-28">
          <div className="mb-10 flex items-center gap-5 sm:mb-14">
            <h2 className="text-base font-semibold tracking-[-0.005em] text-ink">{title}</h2>
            <span aria-hidden className="h-px flex-1 bg-rule" />
          </div>

          {intro && <p className="mb-14 max-w-[54ch] text-ink-2 sm:mb-16">{intro}</p>}
          {children}
        </div>
      </Container>
    </section>
  )
}
