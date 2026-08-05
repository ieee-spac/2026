'use client'
import { ShinyButton } from '@/components/twilight/shiny-button/shiny-button'
import { LogoSection } from '@/components/sections/home/patrons/patrons-tier'
import { Spotlight } from '@/components/twilight/spotlight/spotlight'
import { SectionHeading, SectionRail } from '@/components/sections/home/section-heading'

import { LINKS, PATRONS, PATRONS_DATA, TIER_NAME, TIER_PROPERTIES } from '@/content/constants'

export function Patrons() {
  return (
    <section id={PATRONS.ID} className="relative mt-28 scroll-mt-28 overflow-x-clip">
      <SectionRail>
        <SectionHeading>{PATRONS.TITLE}</SectionHeading>

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
      </SectionRail>
    </section>
  )
}
