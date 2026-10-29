'use client'

import type { KeyboardEvent } from 'react'
import { useId, useRef, useState } from 'react'
import Image from 'next/image'

import { cn } from '@/components/utils/cn'
import type { ISPEAKER } from '@/content/constants'

type Speaker = ISPEAKER & { isModerator?: boolean }

export function SpeakerPicker({ speakers }: { speakers: Speaker[] }) {
  const [selected, setSelected] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const baseId = useId()
  const speaker = speakers[selected]!

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key]
    let next: number | undefined
    if (step)
      next = (selected + step + speakers.length) % speakers.length
    else if (event.key === 'Home')
      next = 0
    else if (event.key === 'End')
      next = speakers.length - 1
    if (next === undefined)
      return
    event.preventDefault()
    setSelected(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="mt-10">
      <div role="tablist" aria-label="Panel speakers" className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
        {speakers.map((person, index) => {
          const isSelected = index === selected
          return (
            <button
              key={person.name}
              ref={(element) => { tabRefs.current[index] = element }}
              id={`${baseId}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`${baseId}-panel`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={onKeyDown}
              className="group self-start text-left focus-visible:outline-none"
            >
              <span
                className={cn(
                  'relative block aspect-square overflow-hidden rounded-xl border border-primary/15 bg-card outline outline-2 outline-offset-2 transition-[outline-color] group-focus-visible:outline-primary',
                  isSelected ? 'outline-primary' : 'outline-transparent group-hover:outline-primary/40',
                )}
              >
                <Image
                  src={person.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 12rem, (min-width: 640px) 30vw, 45vw"
                  className={cn('object-cover transition-[filter] duration-300', !isSelected && 'grayscale-[35%]')}
                />
              </span>
              <span className="mt-3 block font-semibold leading-snug">{person.name}</span>
              <span className="block text-sm text-foreground/70">
                {person.isModerator ? `Moderator, ${person.org}` : person.org}
              </span>
            </button>
          )
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={`${baseId}-tab-${selected}`}
        className="mt-8 rounded-xl border border-primary/15 bg-card/65 p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:p-8"
      >
        <p className="text-2xl font-semibold tracking-[-0.02em]">{speaker.name}</p>
        <p className="mt-1 text-foreground/70">{speaker.title}</p>
        <p className="mt-5 max-w-[72ch] text-pretty leading-7 text-foreground/85">{speaker.bio}</p>
      </div>
    </div>
  )
}
