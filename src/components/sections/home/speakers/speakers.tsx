import { SectionHeading, SectionRail } from '@/components/sections/home/section-heading'
import { SpeakerPicker } from '@/components/sections/home/speakers/speaker-picker'

import { SPEAKERS } from '@/content/constants'

export function Speakers() {
  const { PANEL, TALKS } = SPEAKERS

  return (
    <section id={SPEAKERS.ID} className="mt-28 scroll-mt-28">
      <SectionRail>
        <SectionHeading>{SPEAKERS.TITLE}</SectionHeading>

        <p className="text-foreground/70">
          {PANEL.LABEL}
          {', '}
          <span className="tabular-nums">{PANEL.WHEN}</span>
          {' in '}
          {PANEL.ROOM}
        </p>
        <h3 className="mt-2 max-w-[32ch] text-balance text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl">
          {PANEL.TITLE}
        </h3>
        <p className="mt-5 max-w-[68ch] text-pretty leading-7 text-foreground/70">{PANEL.DESCRIPTION}</p>

        <SpeakerPicker speakers={[{ ...PANEL.MODERATOR, isModerator: true }, ...PANEL.PANELISTS]} />

        <h3 className="mt-16 text-2xl font-semibold tracking-[-0.02em]">Also speaking</h3>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          {TALKS.map(talk => (
            <li key={talk.name} className="rounded-xl border border-primary/15 bg-card/65 px-5 py-4">
              <p className="text-lg font-semibold">{talk.name}</p>
              <p className="text-foreground/70">{talk.topic}</p>
              <p className="mt-2 text-sm text-foreground/60">
                <span className="tabular-nums">{talk.when}</span>
                {' in '}
                {talk.room}
              </p>
            </li>
          ))}
        </ul>
      </SectionRail>
    </section>
  )
}
