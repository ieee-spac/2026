import * as React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { cn } from '@/components/utils/cn'
import { getLogoByTheme } from '@/components/utils/get-logo-by-theme'

import type { ITIER_LOGO } from '@/content/constants'

interface LogoSectionProps {
  title: string
  titleColor: string
  logos?: ITIER_LOGO[]
  gradientClass: string
}

export function LogoSection({
  title,
  titleColor,
  logos,
  gradientClass,
}: LogoSectionProps) {
  const [mounted, setMounted] = React.useState(false)
  const { resolvedTheme } = useTheme()
  const logoCount = logos?.length ?? 0
  const gridColumns = logoCount === 1
    ? 'grid-cols-1'
    : logoCount === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-1 sm:grid-cols-3'

  React.useEffect(() => setMounted(true), [])

  return (
    <section className="mb-10">
      <h3
        className={`mb-3 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl ${titleColor}`}
      >
        {title}
      </h3>
      <span
        className={`mb-5 block bg-gradient-to-r p-px ${gradientClass}`}
      />
      <div
        className={cn(
          'grid items-stretch gap-x-8 gap-y-6 sm:gap-y-8',
          gridColumns,
        )}
      >
        {logos
        && logos.map(logo => (
          <a
            key={logo.alt}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={logo.alt}
            className={cn(
              'flex min-h-36 w-full items-center justify-center rounded-sm p-6 transition-[background-color,transform] duration-300 hover:scale-[1.025] hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
              logoCount === 1 && 'max-w-2xl justify-self-center sm:min-h-48',
            )}
          >
            {mounted
              ? (
                  <Image
                    src={getLogoByTheme(resolvedTheme, logo)}
                    alt={logo.alt}
                    className={cn(
                      'h-24 w-full object-contain transition-transform duration-300',
                      logoCount === 1 && 'h-32 sm:h-40',
                    )}
                    width={640}
                    height={240}
                    sizes={logoCount === 1
                      ? '(min-width: 640px) 60vw, 90vw'
                      : logoCount === 2
                        ? '(min-width: 640px) 45vw, 90vw'
                        : '(min-width: 640px) 30vw, 90vw'}
                  />
                )
              : (
                  <span
                    aria-hidden
                    className={cn(
                      'block h-24 w-full',
                      logoCount === 1 && 'h-32 sm:h-40',
                    )}
                  />
                )}
          </a>
        ))}
      </div>
    </section>
  )
}
