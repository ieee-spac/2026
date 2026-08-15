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
    <article className="group grid h-full grid-cols-[5.5rem_minmax(0,1fr)] gap-x-4 rounded-xl border border-primary/15 bg-card/65 p-4 shadow-[0_18px_52px_-42px_rgba(0,98,155,0.72)] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-primary/35 hover:shadow-[0_22px_58px_-40px_rgba(0,202,255,0.34)] sm:flex sm:flex-col sm:p-5">
      <p className="col-start-2 row-start-1 self-end text-left text-sm font-semibold tracking-[0.04em] text-primary sm:min-h-10 sm:self-auto sm:text-center sm:text-[15px]">
        {member.role}
      </p>

      <div className="relative col-start-1 row-span-3 row-start-1 mx-auto size-20 self-center sm:mt-3 sm:size-32 sm:self-auto">
        <div className="size-full overflow-hidden rounded-full border border-primary/30 bg-background p-1 shadow-[0_16px_40px_-26px_rgba(0,202,255,0.7)]">
          {member.image
            ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="size-full rounded-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              )
            : (
                <Image
                  src="/assets/team-member-headshots/default.svg"
                  alt=""
                  width={1024}
                  height={1024}
                  unoptimized
                  className="size-full rounded-full object-cover"
                  aria-hidden="true"
                />
              )}
        </div>

        {member.institution && (
          <a
            href={member.institution.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -right-1 -top-1 flex size-8 items-center justify-center rounded-full border border-primary/20 bg-background p-1 shadow-md transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:size-11 sm:p-1.5"
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
            className="absolute -bottom-1 -right-1 flex min-w-8 items-center justify-center rounded-full border border-primary/20 bg-background px-1.5 py-1 text-[10px] font-bold text-primary shadow-md sm:min-w-11 sm:px-2 sm:py-1.5 sm:text-xs"
            aria-label={`${member.yearStanding} year standing`}
          >
            {member.yearStanding}
          </div>
        )}
      </div>

      <div className="col-start-2 row-start-2 mt-1 flex flex-1 flex-col text-left sm:mt-4 sm:text-center">
        <h3 className="text-lg font-bold tracking-[-0.02em] text-foreground sm:text-xl">
          {member.name}
        </h3>
        <p className="mt-1 max-w-[28ch] text-xs leading-relaxed text-muted-foreground sm:mx-auto sm:mt-2 sm:text-sm">
          {member.programName}
        </p>
      </div>

      <div className="col-start-2 row-start-3 mt-3 flex flex-wrap justify-start gap-2.5 sm:mt-4 sm:justify-center">
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
