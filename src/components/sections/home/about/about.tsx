import Image from 'next/image'

import { Bubble } from '@/components/sections/home/about/bubble'
import { SectionHeading, SectionRail } from '@/components/sections/home/section-heading'

import { ABOUT } from '@/content/constants'

function OutcomeItem({
  title,
  description,
  imgSrc,
  imgAlt,
}: {
  title: string
  description: string
  imgSrc: string
  imgAlt: string
}) {
  return (
    <article className="grid grid-cols-[minmax(0,1fr)_5.5rem] items-center gap-5 border-t border-primary/20 py-6 sm:grid-cols-[minmax(0,1fr)_7rem] sm:gap-8 sm:py-8">
      <div>
        <h4 className="text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
          {title}
        </h4>
        <p className="mt-2 max-w-[52ch] text-sm leading-6 text-foreground/70 sm:text-base sm:leading-7">
          {description}
        </p>
      </div>

      <Image
        src={imgSrc}
        alt={imgAlt}
        className="h-auto w-full opacity-90 drop-shadow-[0_12px_28px_hsl(var(--primary)/0.12)]"
        width={160}
        height={160}
        sizes="(min-width: 640px) 7rem, 5.5rem"
      />
    </article>
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

        <div className="space-y-16">
          <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(28rem,1.1fr)] lg:gap-16">
            <div>
              <p className="max-w-[62ch] text-pretty text-xl font-medium leading-8 tracking-[-0.015em] sm:text-2xl sm:leading-9">
                {ABOUT.PARAGRAPHS[0]}
              </p>
              <p className="mt-5 max-w-[65ch] leading-7 text-foreground/70">
                {ABOUT.PARAGRAPHS[1]}
              </p>
            </div>

            <div className="relative h-[70vw] max-h-[23rem] min-h-64 w-full sm:h-[42vw] lg:h-[23rem]">
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
          </section>

          <section>
            <h3 className="mb-6 text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">
              {ABOUT.SUBTITLE}
            </h3>
            <div className="grid gap-x-12 md:grid-cols-2">
              {ABOUT.SECTIONS.map(section => (
                <OutcomeItem
                  key={section.title}
                  title={section.title}
                  description={section.description}
                  imgSrc={section.imgSrc}
                  imgAlt={section.imgAlt}
                />
              ))}
            </div>
          </section>

        </div>
      </SectionRail>
    </article>
  )
}
