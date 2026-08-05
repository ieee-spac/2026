/* eslint-disable react-dom/no-unsafe-iframe-sandbox -- The cross-origin Figma schedule requires scripts and its own origin to render. */
import { LINKS } from '@/content/constants'
import { SectionHeading, SectionRail } from '@/components/sections/home/section-heading'

export function Agenda() {
  return (
    <section id="agenda" className="mt-28 scroll-mt-28">
      <SectionRail>
        <SectionHeading>Agenda</SectionHeading>

        <div className="relative mb-4 mt-6 w-full overflow-hidden rounded-xl border border-primary/20 bg-card/40 p-1.5 shadow-[0_24px_70px_-36px_rgba(0,98,155,0.75)]">
          <iframe
            title="IEEE SPAC event agenda"
            className="h-[500px] w-full rounded-lg border-none sm:h-[600px] md:h-[700px]"
            src={LINKS.AGENDA}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            allowFullScreen
          />
        </div>
        <p className="text-right text-sm text-muted-foreground">
          Having trouble with the embedded schedule?
          {' '}
          <a className="font-medium text-primary underline underline-offset-4" href={LINKS.AGENDA} target="_blank" rel="noopener noreferrer">
            Open the agenda in a new tab
          </a>
          .
        </p>
      </SectionRail>
    </section>

  )
}
