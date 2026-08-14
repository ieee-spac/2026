'use client'

import Image from 'next/image'

import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import spacLogo from '@root/public/assets/twilight-design-system/ieee_spac_logo_vertical_no_year.svg'
import { cn } from '@/components/utils/cn'

const FAST_PLAYBACK_RATE = 1.8
const NORMAL_TRAIL_END_ANGLE = 360
const REVERSE_TRAIL_END_ANGLE = 0

function updateOrbitSpeed(container: HTMLDivElement | null, playbackRate: number) {
  container?.getAnimations({ subtree: true })
    .forEach(animation => animation.updatePlaybackRate(playbackRate))
}

function syncOrbitTrails(container: HTMLDivElement) {
  const tracks = container.querySelectorAll<HTMLElement>('.patrons-orbit-track')

  tracks.forEach((track) => {
    const planet = track.querySelector<HTMLElement>('.patrons-orbit-planet')

    if (!planet)
      return

    const trackRect = track.getBoundingClientRect()
    const planetRect = planet.getBoundingClientRect()
    const rotation = Number(track.dataset.orbitRotation) * Math.PI / 180
    const deltaX = planetRect.left + planetRect.width / 2 - (trackRect.left + trackRect.width / 2)
    const deltaY = planetRect.top + planetRect.height / 2 - (trackRect.top + trackRect.height / 2)
    const localX = deltaX * Math.cos(rotation) + deltaY * Math.sin(rotation)
    const localY = -deltaX * Math.sin(rotation) + deltaY * Math.cos(rotation)
    const planetAngle = Math.atan2(localX, -localY) * 180 / Math.PI
    const trailEndAngle = track.dataset.orbitDirection === 'reverse'
      ? REVERSE_TRAIL_END_ANGLE
      : NORMAL_TRAIL_END_ANGLE

    track.style.setProperty('--orbit-trail-angle', `${planetAngle - trailEndAngle}deg`)
    track.dataset.orbitSynced = 'true'
  })
}

interface OrbitPlanetProps {
  className: string
  motionActive: boolean
  restPosition: string
}

function OrbitPlanet({
  className,
  motionActive,
  restPosition,
}: OrbitPlanetProps) {
  return (
    <span
      style={
        {
          '--orbit-rest-position': restPosition,
        } as CSSProperties
      }
      className={cn(
        'patrons-orbit-planet patrons-orbit-planet-motion patrons-planet absolute rounded-full',
        className,
        motionActive && '[will-change:offset-distance]',
      )}
    />
  )
}

export function PatronsOrbit() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isHoveringRef = useRef(false)
  const [isInView, setIsInView] = useState(true)
  const [isPageVisible, setIsPageVisible] = useState(true)

  useEffect(() => {
    const container = containerRef.current

    if (!container || typeof IntersectionObserver === 'undefined')
      return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry)
        setIsInView(entry.isIntersecting)
    }, { threshold: 0.1 })

    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const updateVisibility = () => setIsPageVisible(document.visibilityState === 'visible')

    updateVisibility()
    document.addEventListener('visibilitychange', updateVisibility)

    return () => document.removeEventListener('visibilitychange', updateVisibility)
  }, [])

  const motionActive = isInView && isPageVisible

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      updateOrbitSpeed(containerRef.current, isHoveringRef.current ? 1 : FAST_PLAYBACK_RATE)
    })

    return () => cancelAnimationFrame(frame)
  }, [motionActive])

  useEffect(() => {
    const container = containerRef.current

    if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return

    let frame = 0

    const updateTrails = () => {
      syncOrbitTrails(container)

      if (motionActive)
        frame = requestAnimationFrame(updateTrails)
    }

    updateTrails()

    return () => cancelAnimationFrame(frame)
  }, [motionActive])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      data-orbit-motion={motionActive ? 'running' : 'paused'}
      className="relative mx-auto aspect-square w-full max-w-[23rem]"
      onMouseEnter={() => {
        isHoveringRef.current = true
        updateOrbitSpeed(containerRef.current, 1)
      }}
      onMouseLeave={() => {
        isHoveringRef.current = false
        updateOrbitSpeed(containerRef.current, FAST_PLAYBACK_RATE)
      }}
    >
      <div
        style={
          {
            '--orbit-delay': '-4.1s',
            '--orbit-direction': 'normal',
            '--orbit-duration': '24s',
            '--orbit-play-state': motionActive ? 'running' : 'paused',
          } as CSSProperties
        }
        data-orbit-direction="normal"
        data-orbit-rotation="12"
        className="patrons-orbit-track patrons-orbit-track-neutral absolute left-1/2 top-1/2 h-[68%] w-[86%] -translate-x-1/2 -translate-y-1/2 rotate-[12deg] rounded-[50%] border border-foreground/25"
      >
        <OrbitPlanet
          className="patrons-planet-neutral size-2.5"
          restPosition="17%"
          motionActive={motionActive}
        />
      </div>

      <div
        style={
          {
            '--orbit-delay': '-8.3s',
            '--orbit-direction': 'normal',
            '--orbit-duration': '18s',
            '--orbit-play-state': motionActive ? 'running' : 'paused',
          } as CSSProperties
        }
        data-orbit-direction="normal"
        data-orbit-rotation="28"
        className="patrons-orbit-track patrons-orbit-track-primary absolute left-1/2 top-1/2 h-[42%] w-full -translate-x-1/2 -translate-y-1/2 rotate-[28deg] rounded-[50%] border border-primary/30"
      >
        <OrbitPlanet
          className="patrons-planet-primary size-3"
          restPosition="46%"
          motionActive={motionActive}
        />
      </div>

      <div
        style={
          {
            '--orbit-delay': '-17.6s',
            '--orbit-direction': 'reverse',
            '--orbit-duration': '20s',
            '--orbit-play-state': motionActive ? 'running' : 'paused',
          } as CSSProperties
        }
        data-orbit-direction="reverse"
        data-orbit-rotation="-28"
        className="patrons-orbit-track patrons-orbit-track-tertiary absolute left-1/2 top-1/2 h-[42%] w-full -translate-x-1/2 -translate-y-1/2 -rotate-[28deg] rounded-[50%] border border-[hsla(var(--tertiary),0.25)]"
      >
        <OrbitPlanet
          className="patrons-planet-tertiary size-2.5"
          restPosition="12%"
          motionActive={motionActive}
        />
      </div>

      <Image
        src={spacLogo}
        alt=""
        className="absolute left-1/2 top-1/2 h-auto w-28 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_8px_24px_hsl(var(--primary)/0.28)] sm:w-32"
        sizes="(min-width: 640px) 8rem, 7rem"
      />
    </div>
  )
}
