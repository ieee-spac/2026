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
}: BorderBeamProps) {
  const cssBorderRadius = typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius

  return (
    <div
      style={
        {
          '--size': size,
          '--duration': duration,
          '--anchor': anchor,
          '--border-width': borderWidth,
          '--border-radius': cssBorderRadius,
          '--color-from': colorFrom,
          '--color-to': colorTo,
          '--delay': `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[var(--border-radius)]',
        'after:absolute after:left-0 after:top-0 after:h-[calc(var(--border-width)*1px)] after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_var(--border-radius))] after:[offset-rotate:auto]',
        className,
      )}
    />
  )
}
