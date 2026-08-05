'use client'

import { useEffect, useState } from 'react'

import { HeaderLogo } from '@/components/layout/header/header-logo'
import { HamburgerButton } from '@/components/twilight/hamburger-button/hamburger-button'
import { HeaderNavLinkButtonsContainer } from '@/components/layout/header/header-nav-link-buttons-container'
import { ThemeToggle } from '@/components/twilight/theme-toggle/theme-toggle'

export function Header({
  logo,
  links,
}: {
  logo: string
  links: { name: string, path: string }[]
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen)
      return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape')
        setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <>
      {/* Top Header */}
      <header className="group fixed z-50 w-full overflow-hidden border-b border-primary/20 bg-background/75 py-2 backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-primary/35 hover:shadow-[0_16px_36px_-28px_rgba(0,202,255,0.65)]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Header Logo */}
          <div>
            <HeaderLogo logo={logo} />
          </div>

          <div>
            {/* Hamburger Button */}
            <span className="md:hidden">
              <ThemeToggle />
            </span>
            <HamburgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <nav className="hidden md:block">
              <menu className="flex flex-nowrap bg-transparent items-center md:space-x-4">
                <HeaderNavLinkButtonsContainer
                  links={links}
                  setMenuOpen={setMenuOpen}
                />
                <ThemeToggle />
              </menu>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav id="mobile-navigation" aria-label="Mobile navigation" className="md:hidden">
        <menu
          aria-hidden={!menuOpen}
          className={`fixed right-4 top-20 z-50 flex min-w-56 flex-col space-y-2 rounded-xl border border-primary/20 bg-background/90 p-3 shadow-[0_24px_60px_-30px_rgba(0,98,155,0.8)] backdrop-blur-xl transition-[transform,opacity,visibility] duration-300 ease-out ${
            menuOpen ? 'visible translate-x-0 opacity-100' : 'pointer-events-none invisible translate-x-[calc(100%+1rem)] opacity-0'
          }`}
        >
          <HeaderNavLinkButtonsContainer
            links={links}
            setMenuOpen={setMenuOpen}
          />
        </menu>
      </nav>
      {/* The reason why the menu navigation menu is not nested inside the header tag is because the stacking contexts created by the backdrop blur property causes the menu tag to not render, hence why they cannot be nested. */}
    </>
  )
}
