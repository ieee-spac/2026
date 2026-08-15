import { TEAM_MEMBERS } from '@/content/constants'

import { SectionHeading, SectionRail } from '@/components/sections/home/section-heading'
import { TeamCard } from '@/components/sections/home/team/team-card'

export function Team() {
  return (
    <section id="team" className="mt-28 scroll-mt-28">
      <SectionRail>
        <SectionHeading>Meet The Team</SectionHeading>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TEAM_MEMBERS.map(member => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </SectionRail>
    </section>
  )
}
