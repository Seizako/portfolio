import { useEffect, useState } from 'react'
import type { SectionId } from '@/content/navigation'

// Section qui traverse le milieu de l'écran, pour marquer le lien actif du menu.
export function useActiveSection(ids: readonly SectionId[]) {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId)
        }
      },
      // Bande d'un pixel au milieu de la fenêtre : une seule section la croise à la fois
      { rootMargin: '-50% 0px -50% 0px' },
    )

    for (const id of ids) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }

    // Au-dessus de la première section (dans le hero), aucun lien n'est actif.
    const top = document.getElementById('top')
    const topObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(null)
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    if (top) topObserver.observe(top)

    return () => {
      observer.disconnect()
      topObserver.disconnect()
    }
  }, [ids])

  return active
}
