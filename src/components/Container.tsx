import type { ReactNode } from 'react'

export function Container({ children }: { children: ReactNode }) {
  return <div className="px-6 sm:px-10 lg:px-16">{children}</div>
}
