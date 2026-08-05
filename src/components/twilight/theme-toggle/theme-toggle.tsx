'use client'

import * as React from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { Button } from '@/components/twilight/button/button'

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === 'dark'

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <Button
      type="button"
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      disabled={!mounted}
      aria-label="Toggle theme"
    >
      <SunIcon
        className={`h-[2.5rem] w-[2.5rem] p-2 transition-transform
          ${isDark ? '-rotate-90 scale-0 duration-300' : 'rotate-0 scale-100 duration-300'}`}
      />
      <MoonIcon
        className={`absolute h-[2.5rem] w-[2.5rem] p-2 transition-transform
          ${isDark ? 'rotate-0 scale-100 duration-300' : 'rotate-90 scale-0 duration-300'}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
