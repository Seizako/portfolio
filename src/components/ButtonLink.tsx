import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary'

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 px-5 text-sm font-medium ' +
  'transition-colors'

const variants: Record<Variant, string> = {
  primary: 'bg-earth text-earth-ink hover:bg-earth-hover',
  secondary: 'border border-rule-strong text-ink hover:border-ink hover:bg-plate',
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  children: ReactNode
}

export function ButtonLink({
  variant = 'secondary',
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
