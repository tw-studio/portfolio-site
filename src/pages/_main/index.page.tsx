////
///
// main › index.page.tsx

import { Box } from '@components/base'
import AboutMe from '@components/sections/AboutMe'
import Contact from '@components/sections/Contact'
import Footer from '@components/sections/Footer'
import HeroBackground from '@components/sections/HeroBackground'
import HeroIntro from '@components/sections/HeroIntro'
import Portfolio from '@components/sections/Portfolio'
import SiteHeader from '@components/sections/SiteHeader'
import TitleAndMetaTags from '@components/sections/TitleAndMetaTags'

export default function Index() {
  return (
    <>
      <TitleAndMetaTags />
      <Box css={{ paddingBottom: '80px' }}>
        <SiteHeader transparent />
        <HeroBackground>
          <HeroIntro />
        </HeroBackground>
        <Portfolio />
        <AboutMe />
        <Contact />
        <Footer />
      </Box>
    </>
  )
}
