import { GithubIcon, LinkedinIcon } from '@/components/social-icons'

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#skills', label: 'Skills & Tecnologías' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#educacion', label: 'Educación' },
  { href: '#contacto', label: 'Contacto' },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
              CC
            </span>
            <div>
              <p className="font-semibold">Carolina Comba</p>
              <p className="text-sm text-muted-foreground">
                Desarrolladora Full Stack
              </p>
            </div>
          </div>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
            Desarrolladora apasionada por crear proyectos claros, modernos y
            eficientes, siempre aprendiendo nuevas tecnologías.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://github.com/carolinacomba"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex size-10 items-center justify-center rounded-xl border border-border bg-card transition-colors hover:border-primary hover:text-primary"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href="https://linkedin.com/in/carolinacomba"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex size-10 items-center justify-center rounded-xl border border-border bg-card transition-colors hover:border-primary hover:text-primary"
            >
              <LinkedinIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="md:justify-self-end">
          <h4 className="mb-4 font-semibold">Enlaces rápidos</h4>
          <ul className="space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-muted-foreground">
          © 2025 Carolina Comba. Desarrollado con dedicación.
        </p>
      </div>
    </footer>
  )
}
