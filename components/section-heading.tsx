import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function SectionHeading({
  highlight,
  rest,
  subtitle,
  className,
}: {
  highlight: string
  rest?: string
  subtitle?: string
  className?: string
}) {
  return (
    <Reveal className={cn('mb-12 text-center', className)}>
      <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {highlight}
        </span>
        {rest ? <span> {rest}</span> : null}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  )
}
