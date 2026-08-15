'use client'

import type { CSSProperties } from 'react'
import { useEffect, useLayoutEffect, useRef } from 'react'

import { cn } from '@/components/utils/cn'

interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  borderWidth?: number
  borderRadius?: number | string
  anchor?: number
  colorFrom?: string
  colorTo?: string
  delay?: number
  enabled?: boolean
  playState?: 'paused' | 'running'
}

interface BorderBeamPathPoint {
  angle: number
  distance: number
  x: number
  y: number
}

const CORNER_STEPS = 8

function createRoundedRectKeyframes(width: number, height: number, requestedRadius: number): Keyframe[] {
  const radius = Math.min(Math.max(requestedRadius, 0), width / 2, height / 2)
  const points: BorderBeamPathPoint[] = []

  const addPoint = (x: number, y: number, angle: number) => {
    const previous = points.at(-1)
    const distance = previous
      ? previous.distance + Math.hypot(x - previous.x, y - previous.y)
      : 0

    points.push({ angle, distance, x, y })
  }

  const addCorner = (centerX: number, centerY: number, startAngle: number) => {
    for (let step = 1; step <= CORNER_STEPS; step++) {
      const angle = startAngle + (step / CORNER_STEPS) * 90
      const radians = angle * Math.PI / 180
      addPoint(
        centerX + Math.cos(radians) * radius,
        centerY + Math.sin(radians) * radius,
        angle + 90,
      )
    }
  }

  addPoint(radius, 0, 0)
  addPoint(width - radius, 0, 0)
  addCorner(width - radius, radius, -90)
  addPoint(width, height - radius, 90)
  addCorner(width - radius, height - radius, 0)
  addPoint(radius, height, 180)
  addCorner(radius, height - radius, 90)
  addPoint(0, radius, 270)
  addCorner(radius, radius, 180)

  const perimeter = points.at(-1)?.distance || 1

  return points.map(point => ({
    offset: point.distance / perimeter,
    transform: `translate3d(${point.x.toFixed(3)}px, ${point.y.toFixed(3)}px, 0) rotate(${point.angle.toFixed(3)}deg)`,
  }))
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  borderRadius = 0,
  colorFrom = '#ffaa40',
  colorTo = '#9c40ff',
  delay = 0,
  enabled = true,
  playState = 'running',
}: BorderBeamProps) {
  const hostRef = useRef<HTMLDivElement>(null)
  const runnerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<Animation | null>(null)
  const playStateRef = useRef(playState)
  const cssBorderRadius = typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius
  const glowSize = Math.max(8, borderWidth * 8)

  playStateRef.current = playState

  useLayoutEffect(() => {
    const host = hostRef.current
    const runner = runnerRef.current

    if (!host || !runner)
      return

    let resizeFrame: number | undefined

    const rebuildAnimation = () => {
      const width = host.clientWidth
      const height = host.clientHeight

      if (width <= 0 || height <= 0)
        return

      const radius = Number.parseFloat(getComputedStyle(host).borderTopLeftRadius) || 0
      const keyframes = createRoundedRectKeyframes(width, height, radius)
      const previousTime = animationRef.current?.currentTime

      animationRef.current?.cancel()
      animationRef.current = null
      runner.style.opacity = '1'

      if (!enabled || typeof runner.animate !== 'function') {
        runner.style.transform = keyframes[0]?.transform?.toString() ?? 'none'
        return
      }

      const animation = runner.animate(keyframes, {
        delay: -delay * 1000,
        duration: duration * 1000,
        easing: 'linear',
        fill: 'both',
        iterations: Infinity,
      })

      animationRef.current = animation

      if (typeof previousTime === 'number')
        animation.currentTime = previousTime

      if (playStateRef.current === 'paused')
        animation.pause()
    }

    rebuildAnimation()

    const resizeObserver = typeof ResizeObserver === 'undefined'
      ? null
      : new ResizeObserver(() => {
        if (resizeFrame !== undefined)
          cancelAnimationFrame(resizeFrame)

        resizeFrame = requestAnimationFrame(rebuildAnimation)
      })

    resizeObserver?.observe(host)

    return () => {
      if (resizeFrame !== undefined)
        cancelAnimationFrame(resizeFrame)

      resizeObserver?.disconnect()
      animationRef.current?.cancel()
      animationRef.current = null
    }
  }, [cssBorderRadius, delay, duration, enabled])

  useEffect(() => {
    const animation = animationRef.current

    if (!animation)
      return

    if (playState === 'running')
      animation.play()
    else
      animation.pause()
  }, [playState])

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      style={
        {
          '--beam-anchor-offset': `${size * anchor / -100}px`,
          '--beam-glow-size': `${glowSize}px`,
          '--beam-line-width': `${borderWidth}px`,
          '--beam-size': `${size}px`,
          '--border-radius': cssBorderRadius,
          '--color-from': colorFrom,
          '--color-to': colorTo,
        } as CSSProperties
      }
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden rounded-[var(--border-radius)]',
        className,
      )}
    >
      <div
        ref={runnerRef}
        data-border-beam-runner="true"
        className="absolute left-0 top-0 h-0 w-0 opacity-0 [transform-origin:0_0] [will-change:transform]"
      >
        <span
          className="absolute block opacity-60"
          style={{
            background: 'radial-gradient(ellipse at center, var(--color-to) 0%, transparent 72%)',
            height: 'var(--beam-glow-size)',
            left: 'var(--beam-anchor-offset)',
            top: 'calc(var(--beam-glow-size) / -2)',
            width: 'var(--beam-size)',
          }}
        />
        <span
          className="absolute block"
          style={{
            background: 'linear-gradient(to left, var(--color-from), var(--color-to), transparent)',
            height: 'var(--beam-line-width)',
            left: 'var(--beam-anchor-offset)',
            top: 'calc(var(--beam-line-width) / -2)',
            width: 'var(--beam-size)',
          }}
        />
      </div>
    </div>
  )
}
