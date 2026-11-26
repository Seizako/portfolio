import { useEffect, useState } from 'react'
import { topId } from '@/content/navigation'
import type { SectionId } from '@/content/navigation'

// Section qui traverse le milieu de l'écran, pour marquer le lien actif du menu.
export function useActiveSection(ids: readonly SectionId[]) {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const { id } = entry.target
          setActive(id === topId ? null : (id as SectionId))
        }
      },
      // Bande d'un pixel au milieu de la fenêtre : une seule section la croise à la fois
      { rootMargin: '-50% 0px -50% 0px' },
    )

    for (const id of [topId, ...ids]) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }

    return () => observer.disconnect()
  }, [ids])

  return active
}
