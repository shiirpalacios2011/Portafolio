import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Server, MonitorSmartphone, Database } from 'lucide-react'

const groups = [
  {
    icon: Server,
    title: 'Backend',
    text: 'Tecnologías para crear la lógica del sistema, APIs y servicios.',
    techs: ['Java', 'Spring Boot', 'C#', '.NET', 'APIs REST', 'Microservicios'],
  },
  {
    icon: MonitorSmartphone,
    title: 'Frontend',
    text: 'Tecnologías para crear interfaces web claras y responsivas.',
    techs: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'Angular',
      'Bootstrap',
      'Tailwind CSS',
      'jQuery',
    ],
  },
  {
    icon: Database,
    title: 'Base de Datos',
    text: 'Herramientas para guardar, consultar y administrar información.',
    techs: ['SQL Server', 'PostgreSQL', 'MySQL'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        highlight="Habilidades"
        rest="y Tecnologías"
        subtitle="Tecnologías y herramientas que utilizo para desarrollar aplicaciones web y APIs."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal
            key={g.title}
            delay={i * 120}
            className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <g.icon className="size-5" />
              </span>
              <h3 className="text-lg font-semibold">{g.title}</h3>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              {g.text}
            </p>
            <ul className="mt-auto flex flex-wrap gap-2">
              {g.techs.map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
