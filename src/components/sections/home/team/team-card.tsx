'use client'

import { FaGlobe } from 'react-icons/fa'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import Image from 'next/image'

import type { ITEAM_MEMBER } from '@/content/constants'

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex size-11 items-center justify-center rounded-full border border-primary/20 bg-background/45 text-muted-foreground transition-[border-color,background-color,color,transform] duration-300 hover:scale-[1.04] hover:border-primary/50 hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={label}
    >
      {children}
    </a>
  )
}

export function TeamCard({ member }: { member: ITEAM_MEMBER }) {
  if (!member)
    return null

  return (
    <article className="group flex h-full flex-col rounded-xl border border-primary/15 bg-card/65 p-5 shadow-[0_22px_60px_-42px_rgba(0,98,155,0.8)] backdrop-blur-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_26px_68px_-38px_rgba(0,202,255,0.45)]">
      <p className="min-h-11 text-center text-sm font-semibold tracking-[0.11em] text-primary">
        {member.role}
      </p>

      <div className="relative mx-auto mt-4 size-36">
        <div className="size-full overflow-hidden rounded-full border border-primary/30 bg-background p-1 shadow-[0_16px_40px_-26px_rgba(0,202,255,0.7)]">
          {member.image
            ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={144}
                  height={144}
                  className="size-full rounded-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              )
            : (
                <div
                  className="size-full rounded-full bg-primary/5"
                  aria-hidden="true"
                />
              )}
        </div>

        {member.institution && (
          <a
            href={member.institution.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -right-1 -top-1 flex size-11 items-center justify-center rounded-full border border-primary/20 bg-background p-1.5 shadow-md transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Visit ${member.institution.name} website`}
          >
            <Image
              src={member.institution.imageUrl || '/placeholder.svg?height=40&width=40&query=university logo'}
              alt={`${member.institution.name} logo`}
              width={40}
              height={40}
              className="size-full object-contain"
            />
          </a>
        )}

        {member.yearStanding && (
          <div
            className="absolute -bottom-1 -right-1 flex min-w-11 items-center justify-center rounded-full border border-primary/20 bg-background px-2 py-1.5 text-xs font-bold text-primary shadow-md"
            aria-label={`${member.yearStanding} year standing`}
          >
            {member.yearStanding}
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-1 flex-col text-center">
        <h3 className="text-xl font-bold tracking-[-0.02em] text-foreground">
          {member.name}
        </h3>
        <p className="mx-auto mt-2 max-w-[28ch] text-sm leading-relaxed text-muted-foreground">
          {member.programName}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {member.linkedin && (
          <SocialLink href={member.linkedin} label={`${member.name} on LinkedIn`}>
            <FaLinkedinIn aria-hidden="true" className="text-lg" />
          </SocialLink>
        )}
        {member.github && (
          <SocialLink href={member.github} label={`${member.name} on GitHub`}>
            <FaGithub aria-hidden="true" className="text-lg" />
          </SocialLink>
        )}
        {member.website && (
          <SocialLink href={member.website} label={`${member.name}'s website`}>
            <FaGlobe aria-hidden="true" className="text-lg" />
          </SocialLink>
        )}
        {member.instagram && (
          <SocialLink href={member.instagram} label={`${member.name} on Instagram`}>
            <FaInstagram aria-hidden="true" className="text-lg" />
          </SocialLink>
        )}
      </div>
    </article>
  )
}
