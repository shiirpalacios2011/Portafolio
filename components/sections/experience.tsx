import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Briefcase, MapPin, Check } from 'lucide-react'

const jobs = [
  {
    role: 'QA automatizadora Junior-Cliente: Claro',
    company: 'Tsoft',
    date: 'Junio 2024 - Diciembre 2025',
    status: 'Actual',
    location: 'La Rioja, Argentina / Remoto',
    description:
      'Trabajé en colaboración con Claro evaluando y optimizando aplicaciones críticas mediante pruebas de performance, carga y estrés.\nUtilicé herramientas como LoadRunner, Postman, Jenkins, OpenShift, Swagger y bases de datos Oracle.\nAnalicé tiempos de respuesta, conexiones simultáneas, límites de carga y posibles cuellos de botella antes de las liberaciones.\nTambién participé en la creación de reportes de rendimiento y en la definición de escenarios reales de prueba.\nColaboré con equipos internacionales, incluyendo comunicación en inglés con equipos de India para coordinar pruebas y resultados.',
    responsibilities: [],
    blocks: [
      {
        title: 'Tecnologías',
        items: ['LoadRunner',
          'Postman',
          'Jenkins',
          'OpenShift',
          'Swagger',
          'Oracle',],
      },
      {
        title: 'Tipo de trabajo',
        items: ['Remoto', 'Full-time', 'QA'],
      },
    ],
  },
  {
    role: 'QA automatizadora Junior-Cliente: Claro',
    company: 'Tsoft',
    date: 'Junio 2024 - Diciembre 2025',
    status: 'Finalizado',
    location: 'Trabajo remoto',
    description:
      'Trabajé en colaboración con Claro evaluando y optimizando aplicaciones críticas mediante pruebas de performance, carga y estrés.\nUtilicé herramientas como LoadRunner, Postman, Jenkins, OpenShift, Swagger y bases de datos Oracle.\nAnalicé tiempos de respuesta, conexiones simultáneas, límites de carga y posibles cuellos de botella antes de las liberaciones.\nTambién participé en la creación de reportes de rendimiento y en la definición de escenarios reales de prueba.\nColaboré con equipos internacionales, incluyendo comunicación en inglés con equipos de India para coordinar pruebas y resultados.',
    responsibilities: [],
    blocks: [
      {
        title: 'Tecnologías',
        items: [
          'LoadRunner',
          'Postman',
          'Jenkins',
          'OpenShift',
          'Swagger',
          'Oracle',
        ],
      },
    ],
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        highlight="Experiencia"
        rest="Laboral"
        subtitle="Experiencia profesional en desarrollo de software."
      />

      <div className="flex flex-col gap-8">
        {jobs.map((job, i) => (
          <Reveal
            key={job.role}
            delay={i * 120}
            className="rounded-2xl border border-border bg-card p-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <Briefcase className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-sm text-primary">{job.company}</p>
                  <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="size-3.5" /> {job.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span
                  className={
                    job.status === 'Actual'
                      ? 'rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary'
                      : 'rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground'
                  }
                >
                  {job.status}
                </span>
                <span className="text-xs text-muted-foreground">
                  {job.date}
                </span>
              </div>
            </div>

            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              {job.description}
            </p>

            {job.responsibilities.length > 0 && (
              <div className="mt-6">
                <h4 className="mb-3 font-semibold">Responsabilidades</h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {job.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="size-4 shrink-0 text-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {job.blocks.map((b) => (
                <div key={b.title}>
                  <h4 className="mb-3 font-semibold">{b.title}</h4>
                  <ul className="flex flex-wrap gap-2">
                    {b.items.map((t) => (
                      <li
                        key={t}
                        className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
