import type { ReactNode } from 'react'

import { cn } from '@/components/utils/cn'

export function SectionHeading({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        'mb-8 text-balance text-4xl font-bold tracking-[-0.025em] text-primary sm:text-5xl',
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function SectionRail({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}
