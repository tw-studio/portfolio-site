////
///
// HeroBackground.tsx

import React from 'react'

import NextImage from 'next/image'

import backgroundImage from '@/public/images/crane.webp'
import { styled } from '@/stitches.config'
import { Box } from '@components/base'

const HeroBackground: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Box
    id="hero-background" // used by SiteHeader
    css={{ display: 'block', position: 'relative', zIndex: 0 }}
  >
    <DarkOverlay css={{ zIndex: -1 }} />
    <NextImage
      src={backgroundImage}
      alt="White crane flying over snow covered ground"
      style={{
        objectFit: 'cover',
        objectPosition: '80% 50%',
        zIndex: -2,
      }}
      fill
      priority
      unoptimized
    />
    {children}
  </Box>
)

const DarkOverlay = styled(Box, {
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.25) 100%)',
  height: '100%',
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: 1,
})

export default HeroBackground
