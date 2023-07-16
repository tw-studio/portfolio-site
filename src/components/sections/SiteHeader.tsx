////
///
// SiteHeader.tsx

import React, { useEffect, useState } from 'react'

import { RemoveScroll } from 'react-remove-scroll'

import { Box, BoxPageContent, Flex, Text } from '@components/base'
import { StyledNextLink } from '@components/styled/StyledNextLink'

type SiteHeaderProps = {
  transparent?: boolean,
}

export default function SiteHeader({ transparent = false }: SiteHeaderProps) {

  const [isScrolled, setIsScrolled] = useState(false)
  const headerHeight = 64
  const resumeLink = '/files/tom-wionzek-resume.pdf'

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const firstComponentHeight = document.getElementById('hero-background')?.offsetHeight || 0
      setIsScrolled(scrollTop > (firstComponentHeight - (headerHeight - 10)))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box
      as="header"
      className={`${RemoveScroll.classNames.fullWidth} ${(transparent && !isScrolled) ? 'transparentBackground' : 'solidBackground'}`}
      css={{
        backgroundColor: '$transparent',
        left: 0,
        position: 'fixed',
        top: 0,
        transition: 'background-color 0.3s ease',
        width: '100%',
        zIndex: 200,
        '&.transparentBackground': { backgroundColor: '$transparent' },
        '&.solidBackground': { backgroundColor: 'white' },
      }}
    >
      <BoxPageContent>
        <Flex align="center" justify="between" css={{ height: `${headerHeight}px` }}>
          
          {/* Left links */}
          <StyledNextLink
            emphasis="contrast"
            href="/"
            isScrolled={isScrolled}
            transparent={transparent}
            css={{ '&::after': { bottom: '-3px' } }}
          >
            <Text font="playfair" size="28" weight="900">
              tw.
            </Text>
          </StyledNextLink>

          {/* Right links */}
          <Flex align="center" css={{ gap: '36px', '@largeMobile': { gap: '48px' } }}>
            <Box css={{ display: 'contents' }}>
              <StyledNextLink
                emphasis="subtle"
                href="/#portfolio"
                isScrolled={isScrolled}
                scroll={false}
                transparent={transparent}
              >
                <Text font="lato">
                  Portfolio
                </Text>
              </StyledNextLink>
              <StyledNextLink
                emphasis="subtle"
                href={resumeLink}
                isScrolled={isScrolled}
                scroll={false}
                transparent={transparent}
              >
                <Text font="lato">
                  Resume
                </Text>
              </StyledNextLink>
              <Box css={{ display: 'none', '@largeMobile': { display: 'contents' } }}>
                <StyledNextLink
                  emphasis="subtle"
                  href="/#contact"
                  isScrolled={isScrolled}
                  scroll={false}
                  transparent={transparent}
                >
                  <Text font="lato">
                    Contact
                  </Text>
                </StyledNextLink>
              </Box>
            </Box>
          </Flex>

        </Flex>
      </BoxPageContent>
    </Box>
  )
}
