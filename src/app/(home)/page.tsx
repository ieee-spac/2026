import { Header } from '@/components/layout/header/header'
import { Hero } from '@/components/sections/home/hero/hero'
import { About } from '@/components/sections/home/about/about'
import { Program } from '@/components/sections/home/program/program'
import { Speakers } from '@/components/sections/home/speakers/speakers'
import { Patrons } from '@/components/sections/home/patrons/patrons'
import { Team } from '@/components/sections/home/team/team'
import { Contact } from '@/components/sections/home/contact/contact'
import { Footer } from '@/components/layout/footer/footer'

import { HEADER } from '@/content/constants'

export default function HomePage() {
  return (
    <>
      <Header
        logo={HEADER.IMAGE_URL}
        links={HEADER.NAV_LINKS}
      />
      <Hero />
      <About />
      <Patrons />
      <Program />
      <Speakers />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}
