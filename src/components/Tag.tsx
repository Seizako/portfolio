// Étiquette de techno (ex: React, Docker...)
export function Tag({ children }: { children: string }) {
  return (
    <li className="datum border border-rule px-2 py-1 text-ink-2">{children}</li>
  )
}
