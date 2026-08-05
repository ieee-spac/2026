'use client'

import Link from 'next/link'
import { Button } from '@/components/shadcn/ui/button/button'

export function HeaderNavLinkButton({
  name,
  path,
  onCloseMenu,
}: {
  name: string
  path: string
  onCloseMenu: () => void
}) {
  return (
    <Button
      asChild
      size="lg"
      className="h-12 w-full border border-primary/25 bg-background/40 px-5 py-3 uppercase text-primary shadow-none transition-[background-color,color,border-color,transform] duration-300 hover:scale-[1.02] hover:border-primary/50 hover:bg-primary hover:text-primary-foreground md:h-11 md:border-transparent md:bg-transparent md:px-4"
    >
      <Link
        key={name}
        href={path}
        scroll
        onClick={onCloseMenu}
      >
        {name}
      </Link>
    </Button>
  )
}
