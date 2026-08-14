import { ShinyButton } from '@/components/twilight/shiny-button/shiny-button'
import { Spotlight } from '@/components/twilight/spotlight/spotlight'
import { SectionHeading, SectionRail } from '@/components/sections/home/section-heading'
import { PatronsOrbit } from '@/components/sections/home/patrons/patrons-orbit'

// Restore these imports with the patron-tier block below once the lineup is confirmed.
// import { LogoSection } from '@/components/sections/home/patrons/patrons-tier'
// import { LINKS, PATRONS_DATA, TIER_NAME, TIER_PROPERTIES } from '@/content/constants'
import { EVENT_YEAR, PATRONS } from '@/content/constants'

export function Patrons() {
  return (
    <section id={PATRONS.ID} className="relative mt-28 scroll-mt-28 overflow-x-clip">
      <SectionRail>
        <SectionHeading>{PATRONS.TITLE}</SectionHeading>

        {/*
          Patron tiers are temporarily hidden while the upcoming lineup is unconfirmed.
          Restore the imports above and this block, then comment out the coming-soon block.

          <div className="relative">
            <Spotlight
              className="-left-20 top-0 md:left-10 md:top-0"
              fill="LightGoldenRodYellow"
            />
            {Object.values(TIER_NAME).map(tier => (
              <LogoSection
                key={tier}
                title={tier}
                titleColor={TIER_PROPERTIES[tier].titleColor}
                logos={PATRONS_DATA[tier]}
                gradientClass={TIER_PROPERTIES[tier].gradientClass}
              />
            ))}
            <div className="flex w-full justify-center pt-2">
              <ShinyButton
                href={LINKS.PATRONAGE_PACKAGE}
                external
                text="Become a Patron"
              />
            </div>
          </div>
        */}

        <div className="relative isolate overflow-hidden rounded-xl border border-primary/20 bg-[radial-gradient(circle_at_18%_15%,hsl(var(--primary)/0.12),transparent_34%),linear-gradient(135deg,hsl(var(--card)/0.82),hsl(var(--background))_72%)] px-6 py-12 sm:px-10 sm:py-16 lg:min-h-[28rem] lg:px-14">
          <Spotlight
            className="-left-28 -top-20 opacity-40 md:left-0 md:top-0"
            fill="hsl(var(--primary))"
          />

          <span
            aria-hidden="true"
            className="patrons-border-light pointer-events-none absolute inset-0 rounded-[inherit]"
          />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(19rem,0.9fr)] lg:gap-16">
            <div className="max-w-2xl">
              <h3 className="text-balance text-5xl font-bold tracking-[-0.035em] text-primary sm:text-6xl lg:text-7xl">
                Coming soon.
              </h3>
              <p className="mt-6 max-w-[62ch] text-pretty text-base leading-7 text-foreground/75 sm:text-lg sm:leading-8">
                The organizations supporting SPAC
                {' '}
                {EVENT_YEAR}
                {' '}
                will be announced here as the patron lineup is confirmed.
              </p>
              <div className="mt-9">
                <ShinyButton
                  href="#contact"
                  text="Partner with SPAC"
                />
              </div>
            </div>

            <PatronsOrbit />
          </div>
        </div>
      </SectionRail>
    </section>
  )
}
