'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/social-icons'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shiirpalacios@gmail.com',
    href: 'mailto:shiirpalacios@gmail.com',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shirleypalacios96/',
    href: 'https://www.linkedin.com/in/shirleypalacios96/',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/shiirpalacios2011',
    href: 'https://github.com/shiirpalacios2011',
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    setLoading(true)
    setError(false)
    setSent(false)

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/shiirpalacios@gmail.com',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        }
      )

      if (response.ok) {
        setSent(true)
        form.reset()
        setTimeout(() => setSent(false), 4000)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading highlight="Contacto" />

      <div className="grid gap-8 md:grid-cols-2">
        <Reveal className="flex flex-col gap-6">
          <div>
            <h3 className="text-2xl font-bold">¡Hablemos!</h3>
            <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
              ¿Tenés un proyecto en mente o simplemente querés saludar? No dudes
              en contactarme.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <c.icon className="size-5" />
                </span>

                <div className="min-w-0">
                  <p className="text-sm font-semibold">{c.label}</p>
                  <p className="truncate text-sm text-muted-foreground">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="rounded-2xl border border-border bg-card p-7"
        >
          <h3 className="mb-6 text-lg font-semibold">Envíame un mensaje</h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="hidden"
              name="_subject"
              value="Nuevo mensaje desde mi portfolio"
            />

            <input type="hidden" name="_captcha" value="false" />

            <input type="text" name="_honey" className="hidden" />

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Tu nombre"
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="tu@email.com"
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Contame sobre tu proyecto o idea..."
                className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
            </div>

            {error && (
              <p className="text-sm text-red-400">
                No se pudo enviar el mensaje. Intentá nuevamente o escribime por
                email.
              </p>
            )}

            {sent && (
              <p className="text-sm text-green-400">
                ¡Mensaje enviado correctamente!
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 disabled:opacity-60"
            >
              <Send className="size-4" />
              {loading ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}