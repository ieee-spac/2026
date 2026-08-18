import { ComingSoon } from '@/components/sections/home/coming-soon'
import { SectionHeading, SectionRail } from '@/components/sections/home/section-heading'

// Restore these imports with the patron-tier block below once the lineup is confirmed.
// import { LogoSection } from '@/components/sections/home/patrons/patrons-tier'
// import { ShinyButton } from '@/components/twilight/shiny-button/shiny-button'
// import { Spotlight } from '@/components/twilight/spotlight/spotlight'
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

        <ComingSoon
          action={{ href: '#contact', text: 'Partner with SPAC' }}
          description={(
            <>
              The organizations supporting SPAC
              {' '}
              {EVENT_YEAR}
              {' '}
              will be announced here as the patron lineup is confirmed.
            </>
          )}
        />
      </SectionRail>
    </section>
  )
}
