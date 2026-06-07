import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { GraduationCap, Check, Award } from 'lucide-react'

const education = [
  {
    title: 'Tecnicatura Universitaria en Programación',
    institution: 'Universidad Tecnológica Nacional - FRC',
    date: '2022 - 2025',
    status: 'Finalizado',
    description:
      'Me gradué de la Tecnicatura Universitaria en Programación en la UTN-FRC, donde adquirí conocimientos sólidos en desarrollo de software, metodologías ágiles y buenas prácticas de programación.',
    blocks: [
      {
        title: 'Desarrollo Backend',
        items: ['Java y Spring Framework', 'APIs REST', 'C# y .NET'],
      },
      {
        title: 'Desarrollo Frontend',
        items: [
          'HTML5',
          'CSS3',
          'JavaScript',
          'Angular',
          'TypeScript',
          'Bootstrap',
          'Tailwind CSS',
        ],
      },
      {
        title: 'Bases de datos y metodologías',
        items: [
          'SQL Server',
          'PostgreSQL',
          'MySQL',
          'Scrum y metodologías ágiles',
          'Git',
        ],
      },
    ],
    award: null,
  },
  {
    title: 'Fundamentos de Programación',
    institution: 'Integral Capacitando',
    date: 'Marzo 2021 - Agosto 2021',
    status: 'Finalizado',
    description:
      'Curso introductorio donde aprendí las bases fundamentales de la programación, incluyendo lógica, estructuras de control, funciones, programación orientada a objetos y bases de datos.',
    blocks: [
      {
        title: 'Temas cursados',
        items: [
          'Introducción a la programación',
          'Estructuras de control de flujo',
          'Programación orientada a objetos',
          'Variables y tipos de datos',
          'Funciones y métodos',
          'Bases de datos SQL con Access',
        ],
      },
    ],
    award: 'Examen final aprobado con calificación 10/10.',
  },
]

export function Education() {
  return (
    <section id="educacion" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        highlight="Educación"
        rest="y Formación"
        subtitle="Formación académica y desarrollo profesional."
      />

      <div className="flex flex-col gap-8">
        {education.map((e, i) => (
          <Reveal
            key={e.title}
            delay={i * 120}
            className="rounded-2xl border border-border bg-card p-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <GraduationCap className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{e.title}</h3>
                  <p className="text-sm text-primary">{e.institution}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                  {e.status}
                </span>
                <span className="text-xs text-muted-foreground">{e.date}</span>
              </div>
            </div>

            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              {e.description}
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {e.blocks.map((b) => (
                <div key={b.title}>
                  <h4 className="mb-3 font-semibold">{b.title}</h4>
                  <ul className="space-y-2">
                    {b.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="size-4 shrink-0 text-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {e.award && (
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/10 p-4">
                <Award className="size-5 shrink-0 text-primary" />
                <p className="text-sm font-medium">{e.award}</p>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
