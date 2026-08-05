import Image from 'next/image'

import logo from '@root/public/assets/twilight-design-system/SPAC2025_logo_sparkles.svg'
import { ShinyButton } from '@/components/twilight/shiny-button/shiny-button'
import ShineBorder from '@/components/twilight/shine-pulse/shine-pulse'
import { WarpBackground } from '@/components/twilight/warp-background/warp-background'

import { EVENT_YEAR, HERO, LINKS } from '@/content/constants'

export function Hero() {
  return (
    <WarpBackground>
      <div
        id="home"
        className="overflow-x-clip flex h-screen w-full items-center justify-center "
      >

        {/* Center box */}
        <ShineBorder
          color={['hsl(var(--primary))', 'hsl(var(--warning))', 'hsl(var(--tertiary))']}
        >
          <main className="backdrop-blur-xs group flex h-fit w-full max-w-full md:max-w-4xl flex-col items-center justify-center space-y-4 rounded-sm hover:border-primary px-4 py-8 transition-all duration-300 ease-in-out md:px-20 md:py-16 mx-auto">

            {/* Logo */}
            <Image
              priority
              src={logo}
              alt={HERO.IMAGE_ALT_TEXT}
              className="bobbing-animation-1 w-full max-w-lg transition-all duration-700 ease-in-out group-hover:drop-shadow-[0_0px_5px_rgba(0,202,255,1)] sm:max-w-xl"
            />
            <div
              className="text-lg font-semibold md:text-2xl"
            >
              <div className="flex flex-col items-center space-y-2 text-center">
                <p className="text-lg font-medium md:text-2xl">
                  {HERO.TITLE}
                </p>
                <p className="text-xs md:text-xl font-thin">
                  {HERO.DATE}
                  <sup>st</sup>
                  {' '}
                  {' '}
                  <a
                    href={HERO.LOCATION_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {HERO.LOCATION}
                  </a>
                  {' '}
                  |
                  {' '}
                  {HERO.TIME}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap md:text-nowrap w-full justify-center gap-2">
              <a
                href={LINKS.GALLERY}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShinyButton
                  text={`VIEW GALLERY ${EVENT_YEAR}`}
                />
              </a>
            </div>
          </main>
        </ShineBorder>
      </div>
    </WarpBackground>
  )
}
