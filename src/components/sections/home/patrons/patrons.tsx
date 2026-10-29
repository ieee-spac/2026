import Image from 'next/image'

import { SectionHeading, SectionRail } from '@/components/sections/home/section-heading'
import { cn } from '@/components/utils/cn'
import type { ITIER_LOGO } from '@/content/constants'
import { PATRONS, PATRONS_DATA, TIER_NAME, TIER_PROPERTIES } from '@/content/constants'

function PatronLogo({ logo, height }: { logo: ITIER_LOGO, height: number }) {
  const imageProps = {
    alt: logo.name,
    width: logo.width,
    height: logo.height,
    sizes: '20rem',
  }

  return (
    <a
      href={logo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center rounded-sm p-2 transition-transform duration-700 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <span className="block max-w-full" style={{ height: `${height * (logo.scale ?? 1)}rem` }}>
        {/* A dark variant only exists when the organization publishes one; otherwise the same file serves both themes. */}
        <Image
          {...imageProps}
          src={logo.src}
          unoptimized={logo.src.endsWith('.svg')}
          className={cn('h-full w-auto max-w-full object-contain', logo.darkSrc && 'dark:hidden')}
        />
        {logo.darkSrc && (
          <Image
            {...imageProps}
            src={logo.darkSrc}
            unoptimized={logo.darkSrc.endsWith('.svg')}
            className="hidden h-full w-auto max-w-full object-contain dark:block"
          />
        )}
      </span>
    </a>
  )
}

// Same gentle float the 2025 patron logos had.
const BOBBING = ['bobbing-animation-1', 'bobbing-animation-2', 'bobbing-animation-3']

function LogoSection({ tier }: { tier: TIER_NAME }) {
  const { titleColor, gradientClass, logoHeight } = TIER_PROPERTIES[tier]
  const logos = PATRONS_DATA[tier]

  return (
    <section>
      <h3 className={cn('mb-4 text-3xl font-semibold sm:text-4xl md:text-5xl', titleColor)}>
        {tier}
      </h3>
      <span aria-hidden="true" className={cn('mb-6 block bg-gradient-to-r p-[0.5px]', gradientClass)} />
      <ul className="flex flex-wrap items-center justify-around gap-x-8 gap-y-6">
        {logos.map((logo, index) => (
          <li key={logo.name} className={BOBBING[index % BOBBING.length]}>
            <PatronLogo logo={logo} height={logoHeight} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Patrons() {
  return (
    <section id={PATRONS.ID} className="mt-28 scroll-mt-28">
      <SectionRail>
        <SectionHeading>{PATRONS.TITLE}</SectionHeading>

        <div className="mx-auto max-w-3xl space-y-10">
          {Object.values(TIER_NAME).map(tier => (
            <LogoSection key={tier} tier={tier} />
          ))}
        </div>
      </SectionRail>
    </section>
  )
}
