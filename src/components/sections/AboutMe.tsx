/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
////
///
// AboutMe.tsx

import { Box, BoxPageContent, Text } from '@components/base'
import { SectionHeading } from '@components/styled/SectionHeading'

export default function AboutMe() {
  return (
    <BoxPageContent css={{ position: 'relative' }}>
      <Box
        css={{
          paddingBottom: '36px',
          paddingTop: '20px',
          '@desktop': {
            paddingBottom: '24px',
            paddingTop: '44px',
          },
          '@mid': {
            paddingBottom: '36px',
          },
        }}
      >
        <SectionHeading>
          ABOUT ME
        </SectionHeading>
      </Box>
      <Box
        css={{
        }}
      >
        <Text
          as="h3"
          font="playfair"
          weight={900}
          css={{
            color: '$textDark',
            fontSize: '32px',
            paddingBottom: '36px',
            '@largeMobile': { fontSize: '36px' },
            '@desktop': { fontSize: '40px' },
            '@mid': {
              fontSize: '44px',
              maxWidth: '80%',
            },
          }}
        >
          Designer and developer from Waterloo, Canada.
          Currently based in Seattle, WA.
        </Text>
        <Text
          font="lato"
          spacing="text"
          weight={300}
          css={{
            color: '$textDark',
            fontSize: '20px',
            lineHeight: '1.7',
            '@largeMobile': { fontSize: '22px' },
            '@mid': { maxWidth: '75%' },
            '& p:not(:first-child)': { marginTop: '36px' },
          }}
        >
          <p>
            I'm currently exploring how generative AI can better help in areas of education, self-actualization, and personal productivity.
            With a genuine fascination for human capacity and a love for design, I strive to create products that empower individuals to flourish and lead fulfilling lives.
          </p>
          <p>
            I've been a senior program manager and Apple-obsessed designer at Microsoft, an entrepreneur, and a jazz pianist.
          </p>
          <p>
            Let's get in touch!
          </p>
        </Text>
      </Box>
    </BoxPageContent>
  )
}
