'use client'

import { type AnimationProps, motion, useReducedMotion } from 'framer-motion'

const animationProps = {
  initial: { '--x': '100%', 'scale': 0.8 },
  animate: { '--x': '-100%', 'scale': 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: 'loop',
    repeatDelay: 1,
    type: 'spring',
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: 'spring',
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps

export function ShinyButton(
  {
    text = 'shiny-button',
    href,
    external = false,
    onClick,
  }: {
    text?: string
    href?: string
    external?: boolean
    onClick?: () => void
  },
) {
  const reduceMotion = useReducedMotion()
  const resolvedAnimationProps = reduceMotion
    ? ({
        initial: false,
        animate: { '--x': '-100%', 'scale': 1 },
        transition: { duration: 0 },
      } as AnimationProps)
    : animationProps

  const className = 'group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-sm bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/14%)_0%,transparent_68%)] px-8 py-3 font-medium shadow-[0_16px_38px_-24px_rgba(0,202,255,0.65)] backdrop-blur-2xl transition-[box-shadow,background-color] duration-300 hover:shadow-[0_18px_42px_-22px_rgba(0,202,255,0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background'

  const content = (
    <>
      <span
        className="relative block h-full w-full text-lg tracking-[0.03em] text-neutral dark:text-tertiary"
        style={{
          maskImage:
            'linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))',
        }}
      >
        {text}
      </span>
      <span
        style={{
          mask: 'linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))',
          maskComposite: 'exclude',
        }}
        className="pointer-events-none absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
      >
      </span>
    </>
  )

  if (href) {
    return (
      <motion.a
        {...resolvedAnimationProps}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={className}
        onClick={onClick}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      {...resolvedAnimationProps}
      type="button"
      className={className}
      onClick={onClick}
    >
      {content}
    </motion.button>
  )
}
