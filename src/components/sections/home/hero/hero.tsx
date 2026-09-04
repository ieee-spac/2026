import Image from 'next/image'

import logo from '@root/public/assets/twilight-design-system/SPAC2025_logo_sparkles.svg'
import { ShinyButton } from '@/components/twilight/shiny-button/shiny-button'
import { WarpBackground } from '@/components/twilight/warp-background/warp-background'

import { EVENT_YEAR, HERO, LINKS } from '@/content/constants'

export function Hero() {
  return (
    <WarpBackground
      id="home"
      perspectiveOrigin="50% calc(50% + 1.5rem)"
      className="isolate flex min-h-screen w-full items-center justify-center overflow-hidden rounded-none border-x-0 border-t-0 p-0 px-4 pb-16 pt-28 supports-[height:100dvh]:min-h-[100dvh] sm:px-6"
    >

      <main className="group mx-auto flex h-fit w-full max-w-4xl flex-col items-center justify-center space-y-5 px-4 py-10 sm:px-10 md:px-20 md:py-16">

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
            <h1 className="text-balance text-lg font-medium md:text-2xl">
              {HERO.TITLE}
            </h1>
            <p className="text-sm font-normal text-foreground/75 md:text-xl">
              {HERO.DATE}
              <sup>{HERO.DATE_ENDING}</sup>
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

        <div className="flex w-full flex-col items-center gap-3">
          <p className="text-sm text-foreground/65">
            Registration opens soon
          </p>
          <ShinyButton
            href={LINKS.GALLERY}
            external
            text={`View ${EVENT_YEAR - 1} Gallery `}
          />
        </div>
      </main>
    </WarpBackground>
  )
}
