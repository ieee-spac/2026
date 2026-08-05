'use client'

import Image from 'next/image'
// import CountUp from 'react-countup'

import { Bubble } from '@/components/sections/home/about/bubble'
import { ShinyButton } from '@/components/twilight/shiny-button/shiny-button'
import { SectionHeading, SectionRail } from '@/components/sections/home/section-heading'

import { ABOUT, LINKS } from '@/content/constants'

// Render events in the "A typical SPAC" section
function SectionItem({
  title,
  description,
  imgSrc,
  imgAlt,
  isReversed = false,
}: {
  title: string
  description: string
  imgSrc: string
  imgAlt: string
  isReversed: boolean
}) {
  return (
    <div className={`flex w-full flex-col items-center justify-between gap-5 sm:gap-8 ${isReversed ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
      {/* Text Container */}
      <div className="flex w-full flex-col justify-center sm:w-1/2">
        <h4 className="text-2xl font-semibold tracking-[-0.02em] text-base-content md:text-3xl">
          {title}
        </h4>
        <p className="mt-2 text-base leading-relaxed text-stone-600 dark:text-stone-300 md:text-lg">
          {description}
        </p>
      </div>

      {/* Image Container */}
      <div
        className={`flex w-full items-center justify-center sm:w-1/2 ${isReversed ? 'sm:justify-start' : 'sm:justify-end'}`}
      >
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={imgAlt}
            className="h-auto w-full max-w-[180px]"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        )}
      </div>
    </div>
  )
}

export function About() {
  return (
    <article
      id="about"
      className="mt-28 scroll-mt-28 overflow-x-clip"
    >
      <SectionRail>
        <SectionHeading>{ABOUT.TITLE}</SectionHeading>

        <div className="space-y-14">
          <section className="space-y-6">
            <p className="max-w-[70ch] leading-7">{ABOUT.PARAGRAPHS[0]}</p>
            <p className="max-w-[70ch] leading-7">{ABOUT.PARAGRAPHS[1]}</p>

            {/* Colour Bubbles */}
            <div className="flex w-full h-[45vw] max-h-80 md:ml-10">
              {ABOUT.STAT_BUBBLES.map(item => (
                <Bubble
                  key={item.label}
                  className={item.className}
                  number={item.number}
                  label={item.label}
                  color={[item.color[0], item.color[1]]}
                  size={item.size}
                />
              ))}
            </div>

            <p className="max-w-[70ch] leading-7 text-base-content">{ABOUT.PARAGRAPHS[2]}</p>
          </section>

          {/* A typical SPAC section */}
          <section className="space-y-9">
            <h3 className="pb-2 text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">{ABOUT.SUBTITLE}</h3>
            {ABOUT.SECTIONS.map((section, index) => (
              <SectionItem
                key={section.title}
                title={section.title}
                description={section.description}
                imgSrc={section.imgSrc}
                imgAlt={section.imgAlt}
                isReversed={index % 2 !== 0}
              />
            ))}
            <p className="max-w-[70ch] leading-7">{ABOUT.PARAGRAPHS[3]}</p>
          </section>
          <div className="flex w-full flex-wrap justify-center gap-2 md:text-nowrap lg:flex-nowrap">
            <ShinyButton
              href={LINKS.GALLERY}
              external
              text="View Gallery"
            />
          </div>
        </div>
      </SectionRail>
    </article>
  )
}
