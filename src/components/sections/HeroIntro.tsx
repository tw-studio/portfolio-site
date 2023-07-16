/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
////
///
// HeroIntro.tsx

import React from 'react'

import { Box, BoxPageContent, Text } from '@components/base'

export default function HeroIntro() {
  return (
    <BoxPageContent css={{ zIndex: 100 }}>
      <Box css={{ marginBottom: '30px' }}>
        <Text
          as="h1"
          font="playfair"
          weight={800}
          css={{
            color: '$white',
            fontSize: '48px',
            paddingBottom: '28px',
            paddingTop: '200px',
            zIndex: 100,
            '@midMobile': { fontSize: '54px' },
            '@largeMobile': { fontSize: '60px' },
          }}
        >
          Hi, I'm Tom.
        </Text>
        <Box css={{ maxWidth: 500, paddingBottom: '100px' }}>
          <Text
            as="p"
            css={{ color: '$white' }}
            font="lato"
            lineHeight="18"
            size="21"
            weight="300"
          >
            Product manager, UX designer, and developer passionate about amplifying human productivity.
            Currently, I'm based in Seattle, WA.
          </Text>
        </Box>
      </Box>
    </BoxPageContent>
  )
}
