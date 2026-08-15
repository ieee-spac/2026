'use client'
import { useReducedMotion } from 'framer-motion'

import type { HTMLAttributes } from 'react'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { cn } from '@/components/utils/cn'
import { BorderBeam } from '@/components/twilight/border-beam/border-beam'

interface WarpBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  perspective?: number
  perspectiveOrigin?: string
  beamsPerSide?: number
  beamSize?: number
  beamDelayMax?: number
  beamDelayMin?: number
  beamDuration?: number
  gridColor?: string
}

function Beam({
  width,
  x,
  delay,
  duration,
  hue,
  aspectRatio,
  motionEnabled,
  motionActive,
}: {
  width: string | number
  x: string | number
  delay: number
  duration: number
  hue: number
  aspectRatio: number
  motionEnabled: boolean
  motionActive: boolean
}) {
  const cssWidth = typeof width === 'number' ? `${width}px` : width
  const cssX = typeof x === 'number' ? `${x}px` : x

  return (
    <div
      data-warp-ray="true"
      style={
        {
          '--x': cssX,
          '--width': cssWidth,
          '--aspect-ratio': `${aspectRatio}`,
          '--background': `linear-gradient(hsl(${hue} 80% 60%), transparent)`,
          '--warp-ray-delay': `${-delay}s`,
          '--warp-ray-duration': `${duration}s`,
          'animationPlayState': motionActive ? 'running' : 'paused',
          'transform': motionEnabled ? undefined : 'translate3d(0, 25cqmax, 0)',
        } as React.CSSProperties
      }
      className={cn(
        'absolute left-[var(--x)] top-0 [aspect-ratio:1/var(--aspect-ratio)] [background:var(--background)] [width:var(--width)]',
        motionEnabled && 'warp-ray-motion',
        motionActive && '[will-change:transform]',
      )}
    />
  )
}

const DEPTH_RING_DURATION = 18
const DEPTH_RING_RADIUS = 'clamp(10px, 1.2vw, 16px)'

const DEPTH_RINGS = Array.from({ length: 10 }, (_, index) => ({
  depth: index + 1,
  shineDelay: index * 1.1,
  travelDelay: index * -(DEPTH_RING_DURATION / 10),
  lightOpacity: 0.74 - index * 0.035,
  darkOpacity: 0.92 - index * 0.035,
}))

export const WarpBackground: React.FC<WarpBackgroundProps> = ({
  children,
  perspective = 100,
  perspectiveOrigin = '50% 50%',
  className,
  beamsPerSide = 3,
  beamSize = 5,
  beamDelayMax = 3,
  beamDelayMin = 0,
  beamDuration = 3,
  gridColor = 'hsl(var(--border))',
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const [isInView, setIsInView] = useState(true)
  const [isPageVisible, setIsPageVisible] = useState(true)

  useEffect(() => {
    const container = containerRef.current

    if (!container || typeof IntersectionObserver === 'undefined')
      return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry)
        setIsInView(entry.isIntersecting)
    }, { threshold: 0.05 })

    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const updateVisibility = () => setIsPageVisible(document.visibilityState === 'visible')

    updateVisibility()
    document.addEventListener('visibilitychange', updateVisibility)

    return () => document.removeEventListener('visibilitychange', updateVisibility)
  }, [])

  const motionEnabled = !reduceMotion
  const motionActive = motionEnabled && isInView && isPageVisible

  const generateBeams = useCallback((sideSeed: number) => {
    const beams = []

    for (let i = 0; i < beamsPerSide; i++) {
      const seed = sideSeed * 97 + i * 53 + 17
      const fraction = Math.abs(Math.sin(seed) * 10000) % 1
      const delay = fraction * (beamDelayMax - beamDelayMin) + beamDelayMin
      const position = (i + 1) * 100 / (beamsPerSide + 1)

      beams.push({
        id: `${sideSeed}-${i}`,
        x: `round(down, ${position}%, var(--grid-size))`,
        delay,
        hue: (seed * 47) % 360,
        aspectRatio: (seed % 10) + 1,
      })
    }
    return beams
  }, [beamsPerSide, beamDelayMax, beamDelayMin])

  const topBeams = useMemo(() => generateBeams(1), [generateBeams])
  const rightBeams = useMemo(() => generateBeams(2), [generateBeams])
  const bottomBeams = useMemo(() => generateBeams(3), [generateBeams])
  const leftBeams = useMemo(() => generateBeams(4), [generateBeams])

  return (
    <div ref={containerRef} className={cn('relative rounded border p-20', className)} {...props}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -inset-px">
          <div
            data-warp-depth-motion={motionActive ? 'running' : motionEnabled ? 'paused' : 'disabled'}
            data-warp-motion={motionActive ? 'running' : motionEnabled ? 'paused' : 'disabled'}
            style={
              {
                '--perspective': `${perspective}px`,
                '--perspective-origin': perspectiveOrigin,
                '--grid-color': gridColor,
                '--grid-size': `clamp(48px, ${beamSize}cqmax, 72px)`,
                '--depth-ring-duration': `${DEPTH_RING_DURATION}s`,
              } as React.CSSProperties
            }
            className="absolute inset-px [container-type:size] [perspective-origin:var(--perspective-origin)] [perspective:var(--perspective)] [transform-style:preserve-3d]"
          >
            {/* top side */}
            <div data-warp-face="top" className="absolute [background:linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--grid-size))_-0.5px_0_/var(--grid-size)_var(--grid-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform-style:preserve-3d] [transform:rotateX(-90deg)] [width:100cqi]">
              <span
                data-warp-corner-rail="top-right"
                className="absolute right-0 top-0 h-full w-px -translate-x-[0.5px] bg-[var(--grid-color)]"
              />
              {topBeams.map(beam => (
                <Beam
                  key={`top-${beam.id}`}
                  width="var(--grid-size)"
                  x={beam.x}
                  delay={beam.delay}
                  duration={beamDuration}
                  hue={beam.hue}
                  aspectRatio={beam.aspectRatio}
                  motionEnabled={motionEnabled}
                  motionActive={motionActive}
                />
              ))}
            </div>
            {/* bottom side */}
            <div data-warp-face="bottom" className="absolute top-full [background:linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--grid-size))_-0.5px_0_/var(--grid-size)_var(--grid-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform-style:preserve-3d] [transform:rotateX(-90deg)] [width:100cqi]">
              {bottomBeams.map(beam => (
                <Beam
                  key={`bottom-${beam.id}`}
                  width="var(--grid-size)"
                  x={beam.x}
                  delay={beam.delay}
                  duration={beamDuration}
                  hue={beam.hue}
                  aspectRatio={beam.aspectRatio}
                  motionEnabled={motionEnabled}
                  motionActive={motionActive}
                />
              ))}
            </div>
            {/* left side */}
            <div data-warp-face="left" className="absolute left-0 top-0 [background:linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--grid-size))_-0.5px_0_/var(--grid-size)_var(--grid-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:0%_0%] [transform-style:preserve-3d] [transform:rotate(90deg)_rotateX(-90deg)] [width:100cqh]">
              {leftBeams.map(beam => (
                <Beam
                  key={`left-${beam.id}`}
                  width="var(--grid-size)"
                  x={beam.x}
                  delay={beam.delay}
                  duration={beamDuration}
                  hue={beam.hue}
                  aspectRatio={beam.aspectRatio}
                  motionEnabled={motionEnabled}
                  motionActive={motionActive}
                />
              ))}
            </div>
            {/* right side */}
            <div data-warp-face="right" className="absolute right-0 top-0 [background:linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--grid-size))_-0.5px_0_/var(--grid-size)_var(--grid-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:100%_0%] [transform-style:preserve-3d] [transform:rotate(-90deg)_rotateX(-90deg)] [width:100cqh]">
              {rightBeams.map(beam => (
                <Beam
                  key={`right-${beam.id}`}
                  width="var(--grid-size)"
                  x={beam.x}
                  delay={beam.delay}
                  duration={beamDuration}
                  hue={beam.hue}
                  aspectRatio={beam.aspectRatio}
                  motionEnabled={motionEnabled}
                  motionActive={motionActive}
                />
              ))}
            </div>

            {DEPTH_RINGS.map(ring => (
              <div
                key={ring.depth}
                data-warp-depth-ring={ring.depth}
                style={
                  {
                    'transform': `translateZ(calc(var(--grid-size) * -${ring.depth}))`,
                    'animationDelay': `${ring.travelDelay}s`,
                    'animationPlayState': motionActive ? 'running' : 'paused',
                    '--depth-ring-light-opacity': ring.lightOpacity,
                    '--depth-ring-dark-opacity': ring.darkOpacity,
                    '--depth-ring-radius': DEPTH_RING_RADIUS,
                  } as React.CSSProperties
                }
                className={cn(
                  'absolute -inset-[0.5px] [transform-style:preserve-3d]',
                  motionEnabled && 'warp-depth-ring-motion',
                  motionActive && '[will-change:transform,opacity]',
                )}
              >
                <div
                  className={cn(
                    'relative size-full overflow-hidden rounded-[var(--depth-ring-radius)] border border-[hsla(var(--auxiliary),0.22)] shadow-[inset_0_0_18px_hsla(var(--auxiliary),0.055)] dark:border-[hsl(var(--primary)/0.18)] dark:shadow-[inset_0_0_20px_hsl(var(--primary)/0.045)]',
                    motionEnabled
                      ? 'opacity-[0.85] dark:opacity-95'
                      : 'opacity-[var(--depth-ring-light-opacity)] dark:opacity-[var(--depth-ring-dark-opacity)]',
                  )}
                >
                  <BorderBeam
                    size={120}
                    duration={11}
                    delay={ring.shineDelay}
                    borderWidth={1}
                    borderRadius="var(--depth-ring-radius)"
                    colorFrom="hsl(var(--primary))"
                    colorTo="hsla(var(--auxiliary), 0.76)"
                    enabled={motionEnabled}
                    playState={motionActive ? 'running' : 'paused'}
                    className="opacity-[0.85] dark:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  )
}
