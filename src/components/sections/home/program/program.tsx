import { SectionHeading, SectionRail } from '@/components/sections/home/section-heading'
import { cn } from '@/components/utils/cn'
import type { ISESSION, SESSION_KIND } from '@/content/constants'
import { PROGRAM, SESSIONS } from '@/content/constants'

const SLOT_TIMES = [...PROGRAM.SLOT_LABELS, '5:00']

const KINDS: Record<SESSION_KIND, { label: string, dot: string }> = {
  workshop: { label: 'Workshop', dot: 'bg-primary' },
  talk: { label: 'Talk', dot: 'bg-tertiary' },
  panel: { label: 'Panel', dot: 'bg-emerald-500' },
}

function SessionCard({ session }: { session: ISESSION }) {
  const kind = KINDS[session.kind]
  const Wrapper = session.href ? 'a' : 'div'

  return (
    <Wrapper
      href={session.href}
      style={{ gridColumn: session.room + 2, gridRow: `${session.start + 2} / span ${session.span}` }}
      className={cn(
        'm-1 flex flex-col rounded-lg border border-primary/15 bg-card p-3',
        session.href && 'transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
      )}
    >
      <p className="flex flex-wrap items-center justify-between gap-x-2 text-xs text-foreground/60">
        <span className="inline-flex items-center gap-1.5">
          <span aria-hidden="true" className={cn('size-1.5 rounded-full', kind.dot)} />
          {kind.label}
          <span className="sr-only">
            {' in '}
            {PROGRAM.ROOMS[session.room]}
            {', '}
          </span>
        </span>
        <span className="tabular-nums">
          {SLOT_TIMES[session.start]}
          –
          {SLOT_TIMES[session.start + session.span]}
        </span>
      </p>
      <p className="mt-1.5 text-sm font-semibold leading-snug sm:text-base">{session.title}</p>
      {session.detail && <p className="text-sm leading-snug text-foreground/70">{session.detail}</p>}
      {session.href && <p className="mt-auto pt-2 text-sm font-medium text-primary">Meet the panel</p>}
    </Wrapper>
  )
}

export function Program() {
  return (
    <section id={PROGRAM.ID} className="mt-28 scroll-mt-28">
      <SectionRail>
        <SectionHeading className="mb-3">{PROGRAM.TITLE}</SectionHeading>
        <p className="mb-10 max-w-[62ch] leading-7 text-foreground/70">{PROGRAM.INTRO}</p>

        <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.02em]">The day at a glance</h3>
            <ol className="mt-6 divide-y divide-primary/15 border-y border-primary/15">
              {PROGRAM.OVERVIEW.map(item => (
                <li key={`${item.time}-${item.title}`} className="py-4">
                  <p className="text-sm tabular-nums text-foreground/60">
                    {item.time}
                    {' – '}
                    {item.endTime}
                  </p>
                  <p className="mt-0.5 font-semibold">
                    {item.href
                      ? <a href={item.href} className="text-primary hover:underline">{item.title}</a>
                      : item.title}
                  </p>
                  <p className="text-sm text-foreground/70">{item.room}</p>
                </li>
              ))}
            </ol>
          </div>

          <div id="workshops" className="scroll-mt-28">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="text-2xl font-semibold tracking-[-0.02em]">{PROGRAM.WORKSHOPS_TITLE}</h3>
              <ul className="flex gap-x-4 text-sm text-foreground/70">
                {Object.values(KINDS).map(kind => (
                  <li key={kind.label} className="inline-flex items-center gap-1.5">
                    <span aria-hidden="true" className={cn('size-1.5 rounded-full', kind.dot)} />
                    {kind.label}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-2 max-w-[56ch] text-sm leading-6 text-foreground/70">{PROGRAM.WORKSHOPS_DESCRIPTION}</p>

            <div className="mt-6 grid grid-cols-[2.5rem_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[auto_repeat(8,6.5rem)] sm:grid-cols-[3.25rem_minmax(0,1fr)_minmax(0,1fr)]">
              {PROGRAM.ROOMS.map((room, index) => (
                <p key={room} style={{ gridColumn: index + 2, gridRow: 1 }} className="px-1 pb-3 font-semibold">
                  {room}
                </p>
              ))}
              {PROGRAM.SLOT_LABELS.map((label, index) => (
                <p
                  key={label}
                  aria-hidden="true"
                  style={{ gridColumn: '1 / -1', gridRow: index + 2 }}
                  className="border-t border-primary/15 pt-1.5 text-xs tabular-nums text-foreground/60"
                >
                  {label}
                </p>
              ))}
              {SESSIONS.map(session => (
                <SessionCard key={`${session.room}-${session.start}`} session={session} />
              ))}
            </div>
          </div>
        </div>
      </SectionRail>
    </section>
  )
}
