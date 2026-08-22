import type { ReactNode } from 'react'

// Marges internes de la page
export function Container({ children }: { children: ReactNode }) {
  return <div className="px-6 sm:px-10">{children}</div>
}
