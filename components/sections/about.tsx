import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { GraduationCap, Users, Lightbulb, MapPin } from 'lucide-react'

const cards = [
  {
    icon: GraduationCap,
    title: 'Aprendizaje continuo',
    text: 'Siempre busco mejorar mis conocimientos y aprender nuevas herramientas.',
  },
  {
    icon: Users,
    title: 'Trabajo en equipo',
    text: 'Me gusta colaborar, compartir ideas y construir soluciones junto a otros.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    text: 'Busco crear soluciones modernas, simples y eficientes.',
  },
]

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading highlight="Sobre" rest="Mí" />

      <div className="grid items-start gap-6 md:grid-cols-2">
        <Reveal className="rounded-2xl border border-border bg-card p-7">
          <div className="mb-5 flex items-center gap-4">
            <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-lg font-bold text-primary-foreground">
              SP
            </span>
            <div>
              <h3 className="font-semibold">Shirley Palacios</h3>
              <p className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="size-3.5" /> Córdoba, Argentina
              </p>
            </div>
          </div>
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Soy Shirley Palacios, desarrolladora Full Stack-
              QA Automation,
              Argentina.
            </p>
            <p>
              Estudio la Tecnicatura Universitaria en Programación en la
              UTN-FRLR. Me formé en desarrollo backend y frontend de forma personal, trabajando con
              tecnologías como Java, Spring Boot, C#, .NET, Angular, JavaScript
              y bases de datos SQL.Tengo conocimientos en pruebas de performance y automatización  de pruebas, utilizando herramientas como LoadRunner,Jmeter, Postman y Jenkins.
            </p>
            <p>
              Me interesa crear soluciones claras, eficientes y fáciles de
              mantener. Disfruto aprender nuevas tecnologías, trabajar en equipo
              y mejorar constantemente como desarrolladora.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-5">
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 100}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <c.icon className="size-5" />
              </span>
              <div>
                <h4 className="font-semibold">{c.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
