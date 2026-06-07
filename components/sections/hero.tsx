import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/social-icons'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28 pb-16"
    >
      {/* subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/4 -z-10 size-96 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-40 -z-10 size-80 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl">
              <span className="bg-gradient-to-r from-primary via-accent to-violet bg-clip-text text-transparent">
                Shirley
              </span>
              <br />
              Palacios
            </h1>
            <p className="mt-3 text-lg font-medium text-muted-foreground">
              Desarrolladora Full Stack
            </p>
          </div>

          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
            Creo aplicaciones web modernas, APIs y soluciones digitales
            enfocadas en código limpio, buenas prácticas y experiencia de
            usuario.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/shiirpalacios2011"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex size-11 items-center justify-center rounded-xl border border-border bg-card transition-colors hover:border-primary hover:text-primary"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/shirleypalacios96/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex size-11 items-center justify-center rounded-xl border border-border bg-card transition-colors hover:border-primary hover:text-primary"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative rounded-3xl border border-border bg-card p-3 shadow-2xl shadow-primary/10">
            <div className="absolute -inset-0.5 -z-10 rounded-3xl bg-gradient-to-br from-primary/40 to-accent/40 opacity-60 blur" />
            <Image
              src="/shirley.png"
              alt="Shirley Palacios"
              width={320}
              height={360}
              priority
              className="h-80 w-72 rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      <a
        href="#sobre-mi"
        aria-label="Ir a la sección Sobre mí"
        className="mx-auto mt-12 hidden text-muted-foreground transition-colors hover:text-foreground md:block"
      >
        <ChevronDown className="size-7 animate-bounce" />
      </a>
    </section>
  )
}
