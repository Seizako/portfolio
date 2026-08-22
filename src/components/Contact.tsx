import { ArrowUpRight, FileDown, Github, Linkedin, Mail } from './icons'
import type { Icon } from './icons'
import { Section } from './Section'
import { profile } from '@/content/profile'
import { asset } from '@/lib/asset'
import type { Dictionary } from '@/i18n/dictionary'

type ContactLink = {
  icon: Icon
  label: string
  value: string
  href: string
  external: boolean
  download?: boolean
}

export function Contact({ t }: { t: Dictionary }) {
  const links: ContactLink[] = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: profile.email,
      href: `mailto:${profile.email}`,
      external: false,
    },
    {
      icon: Linkedin,
      label: t.contact.linkedinLabel,
      value: 'in/ludovic-weng',
      href: profile.links.linkedin,
      external: true,
    },
    {
      icon: Github,
      label: t.contact.githubLabel,
      value: 'Seizako',
      href: profile.links.github,
      external: true,
    },
    {
      icon: FileDown,
      label: 'CV',
      value: t.contact.cvLabel,
      href: asset(profile.cv),
      external: false,
      download: true,
    },
  ]

  return (
    <Section id="contact" title={t.contact.title} intro={t.contact.lead}>
      <ul className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              download={link.download}
              {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="flex min-h-16 items-center gap-4 border border-rule bg-plate px-4 py-3 transition-colors hover:border-rule-strong"
            >
              <link.icon className="size-5 shrink-0 text-ink-3" />
              <span className="min-w-0">
                <span className="marker block text-ink-3">{link.label}</span>
                <span className="mt-1 block truncate text-[0.9375rem] text-ink">
                  {link.value}
                </span>
              </span>
              {link.external && (
                <ArrowUpRight className="ml-auto size-4 shrink-0 text-ink-3" />
              )}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
