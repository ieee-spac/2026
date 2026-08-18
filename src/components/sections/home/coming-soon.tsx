import type { ReactNode } from 'react'

import { PatronsOrbit } from '@/components/sections/home/patrons/patrons-orbit'
import { ShinyButton } from '@/components/twilight/shiny-button/shiny-button'
import { Spotlight } from '@/components/twilight/spotlight/spotlight'

interface ComingSoonProps {
  action: {
    href: string
    text: string
  }
  description: ReactNode
  title?: string
}

export function ComingSoon({
  action,
  description,
  title = 'Coming soon.',
}: ComingSoonProps) {
  return (
    <div className="relative isolate overflow-hidden rounded-xl border border-primary/20 bg-[radial-gradient(circle_at_18%_15%,hsl(var(--primary)/0.12),transparent_34%),linear-gradient(135deg,hsl(var(--card)/0.82),hsl(var(--background))_72%)] px-6 py-12 sm:px-10 sm:py-16 lg:min-h-[28rem] lg:px-14">
      <Spotlight
        className="-left-28 -top-20 opacity-40 md:left-0 md:top-0"
        fill="hsl(var(--primary))"
      />

      <span
        aria-hidden="true"
        className="coming-soon-border-light pointer-events-none absolute inset-0 rounded-[inherit]"
      />

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(19rem,0.9fr)] lg:gap-16">
        <div className="max-w-2xl">
          <h3 className="text-balance text-5xl font-bold tracking-[-0.035em] text-primary sm:text-6xl lg:text-7xl">
            {title}
          </h3>
          <p className="mt-6 max-w-[62ch] text-pretty text-base leading-7 text-foreground/75 sm:text-lg sm:leading-8">
            {description}
          </p>
          <div className="coming-soon-cta mt-9">
            <ShinyButton
              href={action.href}
              text={action.text}
            />
          </div>
        </div>

        <PatronsOrbit />
      </div>
    </div>
  )
}
