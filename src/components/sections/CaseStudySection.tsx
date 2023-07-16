////
///
// CaseStudySection.tsx

import React from 'react'

import { CSS } from '@stitches/react'
import slugify from 'slugify'

import { theme } from '@/stitches.config'
import { Box, BoxPageContent, Image, Text } from '@components/base'
import { FontVariants } from '@components/base/Text'
import { SectionHeading } from '@components/styled/SectionHeading'

type CaseStudySectionProps = {
  bgColor?: string
  children: React.ReactNode
  columns?: string
  css?: CSS
  dark?: boolean
  h1?: string
  h2?: string
  h2Font?: FontVariants
  h3?: string
  id?: string
  imageAlt?: string
  imageCss?: CSS
  imageUrl?: string
  topBar?: boolean
  topBarColor?: string
} & ({ h1?: string; h2?: string; h3?: string } | { id: string })

export default function CaseStudySection({
  bgColor = theme.colors.slateBrightF4.value,
  children,
  columns,
  css,
  dark = false,
  h1,
  h2,
  h2Font,
  h3,
  id,
  imageAlt,
  imageCss,
  imageUrl,
  topBar = false,
  topBarColor = theme.colors.slateBrightF4.value,
}: CaseStudySectionProps) {

  const idBase = (id ?? (h3 && h2) ? h2 : h1 ?? '') as string
  const idSlug = slugify(idBase, { lower: true, strict: true })
  const showImage = Boolean(imageUrl && imageAlt)

  return (
    <Box
      id={idSlug}
      css={{ backgroundColor: bgColor, width: '100%', ...css }}
    >
      {topBar && (
        <Box
          css={{
            backgroundColor: topBarColor,
            height: '24px',
            width: '100%',
          }}
        />
      )}
      <BoxPageContent
        css={{
          paddingBottom: '84px',
          paddingTop: '84px',
          scrollMarginTop: '64px',
        }}
      >
        {/* Use grid to layout image above & text below on mobile
            then layout text left & image right when wide enough */}
        <Box
          css={{
            alignItems: 'center',
            display: 'grid',
            gridTemplateRows: 'auto auto',
            rowGap: showImage ? '68px' : '0',
            '@desktop': {
              columnGap: showImage ? '96px' : '0',
              gridTemplateColumns: showImage ? (columns ?? '5fr 3fr') : '1fr',
              gridTemplateRows: '1fr',
            },
          }}
        >
          <Box
            css={{
              gridRowStart: '2',
              '@desktop': {
                gridColumnStart: '1',
                gridRowStart: '1',
              },
            }}
          >
            {h1 && (
              <SectionHeading
                css={{
                  color: dark ? '$textLight' : '$textDark',
                  maxWidth: '$space$maxTextWidth',
                }}
              >
                {h1}
              </SectionHeading>
            )}
            {h2 && (
              <Text
                as="h2"
                font={h2Font ?? 'playfair'}
                weight={800}
                css={{
                  color: dark ? '$textLight' : '$textDark',
                  fontSize: '32px',
                  maxWidth: '$space$maxTextWidth',
                  paddingTop: h1 ? '36px' : '0',
                  '@largeMobile': { fontSize: h3 ? '42px' : '36px' },
                  '@desktop': {
                    fontSize: showImage ? '34px' : '36px',
                    paddingTop: h1 ? '28px' : '0',
                  },
                  '@mid': {
                    fontSize: '42px',
                    paddingTop: h1 ? '36px' : '0',
                  },
                }}
              >
                {h2}
              </Text>
            )}
            {h3 && (
              <Text
                as="h3"
                font="lato"
                spacing="text"
                weight={300}
                css={{
                  color: '$textDark',
                  fontSize: '24px',
                  lineHeight: '1.7',
                  maxWidth: '$space$maxTextWidth',
                  paddingTop: (h1 || h2) ? '12px' : '0',
                  '@largeMobile': { fontSize: '28px' },
                  '@desktop': { fontSize: '26px' },
                  '@mid': { fontSize: '30px' },
                }}
              >
                {h3}
              </Text>
            )}
            <Text
              as="div"
              font="lato"
              spacing="text"
              weight={300}
              css={{
                color: dark ? '$textLight' : '$textDark',
                fontSize: '20px',
                lineHeight: '1.7',
                marginTop: (h1 || h2 || h3) ? '54px' : '0',
                '@largeMobile': { fontSize: '22px' },
                '@desktop': { fontSize: showImage ? '21px' : '22px' },
                '@mid': { fontSize: '24px' },
                '& h3': { maxWidth: '$space$maxTextWidth' },
                '& li': { maxWidth: '$space$maxTextWidth' },
                '& p': { maxWidth: '$space$maxTextWidth' },
                '& p:not(:first-child)': { marginTop: '36px' },
              }}
            >
              {children}
            </Text>
          </Box>
          {showImage && (
            <Box
              css={{
                alignSelf: 'self-start',
                borderRadius: '5px',
                gridRowStart: '1',
                position: 'relative',
                '@desktop': { gridColumnStart: '2' },
              }}
            >
              <Image
                alt={imageAlt}
                src={imageUrl}
                css={{
                  borderRadius: '5px',
                  height: '100%',
                  margin: 'auto',
                  objectFit: 'cover',
                  objectPosition: '50% 50%',
                  width: '100%',
                  ...imageCss,
                }}
              />
            </Box>
          )}
        </Box>
      </BoxPageContent>
    </Box>
  )
}
