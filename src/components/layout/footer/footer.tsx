import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/components/utils/cn'

import { FOOTER } from '@/content/constants'

function DEFAULT_LOGO_IMAGE() {
  return (
    <Image
      src={FOOTER.LOGO}
      alt="IEEE SPAC Footer Logo"
      className="h-6 w-auto transition-all duration-700 hover:scale-105"
      width={0}
      height={0}
    />
  )
}

export function Footer({
  Logo = DEFAULT_LOGO_IMAGE,
  socialMediaData = FOOTER.SOCIAL_MEDIA,
}: {
  Logo?: React.ComponentType
  socialMediaData?: {
    name: string
    url: string
    Icon: React.ComponentType
    className: string
  }[]
}) {
  return (
    <footer className="border-t border-primary/20 text-neutral-content transition-[border-color,box-shadow] duration-300 hover:border-primary/35 hover:shadow-[0_-18px_42px_-34px_rgba(0,202,255,0.65)]">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        {/* LOGO and SOCIAL MEDIA ICONS in one row */}
        <div className="flex flex-wrap justify-between items-start">
          {/* LOGO */}
          <aside className="flex flex-col">
            <Link href="/" className="scroll-smooth">
              <Logo />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">{FOOTER.COPYRIGHT_TEXT}</p>
          </aside>

          {/* SOCIAL MEDIA ICONS */}
          <nav className="flex flex-wrap justify-center 2xs:justify-end">
            {socialMediaData.map(({ name, url, Icon, className }) => (
              <a
                key={name}
                aria-label={`${name} Link`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn('rounded-sm p-3 text-2xl transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary', className)}
              >
                <Icon />
              </a>
            ))}
          </nav>
        </div>

        {/* CREDITS */}
        <div className="mt-6 text-sm md:text-center">
          <p>
            Inspired by the
            {' '}
            <a
              href="https://2024ieeespac.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary underline transition ease-in-out duration-700"
            >
              2024 SPAC Website
            </a>
            .
            Cover made with 💛 by
            {
              ' '
            }
            <span className="font-bold text-yellow-500">
              Gray Joslin
            </span>
            .
            Re-designed & developed with 💜 by
            {
              ' '
            }
            <a
              href="https://www.linkedin.com/in/saim-hashmi-2230b6243/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 font-bold transition ease-in-out duration-700"
            >
              Saim Hashmi
            </a>
            {' '}
            and
            {' '}
            <a
              href="https://linkedin.com/in/waaberi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 font-bold transition ease-in-out duration-700"
            >
              Waaberi Ibrahim
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
