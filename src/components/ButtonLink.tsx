import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'text'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  children: ReactNode
}

// Un seul bouton plein par écran ; les autres actions sont des liens soulignés.
export function ButtonLink({
  variant = 'text',
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  if (variant === 'primary') {
    return (
      <a
        className={
          'inline-flex min-h-13 items-center justify-center gap-3 bg-ink px-6.5 text-[0.9375rem] font-medium ' +
          `text-paper transition-colors duration-300 hover:bg-earth hover:text-earth-ink ${className}`
        }
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      className={`inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-medium text-ink transition-colors hover:text-earth ${className}`}
      {...props}
    >
      <span className="ulink">{children}</span>
    </a>
  )
}
