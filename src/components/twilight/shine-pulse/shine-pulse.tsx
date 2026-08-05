'use client'

import { cn } from '@/components/utils/cn'

type TColorProp = string | string[]

interface ShineBorderProps {
  borderRadius?: number
  borderWidth?: number
  duration?: number
  delay?: number
  color?: TColorProp
  className?: string
  shineClassName?: string
  children: React.ReactNode
}

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 */
export default function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  delay = 0,
  color = '#000000',
  className,
  shineClassName,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          '--border-radius': `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn(
        'relative',
        className,
      )}
    >
      <div
        style={
          {
            '--border-width': `${borderWidth}px`,
            '--border-radius': `${borderRadius}px`,
            '--shine-pulse-duration': `${duration}s`,
            '--shine-pulse-delay': `${delay}s`,
            '--mask-linear-gradient': `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            '--background-radial-gradient': `radial-gradient(transparent,transparent, ${Array.isArray(color) ? color.join(',') : color},transparent,transparent)`,
          } as React.CSSProperties
        }
        className={cn(
          'before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_var(--shine-pulse-delay)_infinite_linear]',
          shineClassName,
        )}
      >
      </div>
      {children}
    </div>
  )
}
