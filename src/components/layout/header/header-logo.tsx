import Link from 'next/link'
import Image from 'next/image'

import { EVENT_YEAR } from '@/content/constants'

export function HeaderLogo({ logo }: { logo: string }) {
  return (
    <Link href="/" className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background">
      <Image
        src={logo}
        alt={`SPAC ${EVENT_YEAR} Logo`}
        className="h-10 w-auto transition-transform duration-300 ease-out hover:scale-[1.04] md:h-14"
        height={40}
        width={40}
      />
    </Link>
  )
}
