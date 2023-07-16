////
///
// Portfolio.tsx

import { Box, BoxPageContent, Text } from '@components/base'
import { SectionHeading } from '@components/styled/SectionHeading'
import { StyledNextLink } from '@components/styled/StyledNextLink'

export default function Portfolio() {
  
  const portfolioItems = [
    {
      title: 'OneNote for iPhone: UX Refresh for iOS 7',
      description: 'A redesign of the OneNote iPhone app which significantly improved App Store ratings, downloads, and overall user experience.',
      linkText: 'See the Case Study',
      linkUrl: '/portfolio/onenote-iphone-ios-7-redesign',
      imageAlt: 'OneNote for iPhone notebook view redesigned for iOS 7',
      imageSrc: '/images/onenote-ios-7-hero-landscape.webp',
    },
  ]

  return (
    <BoxPageContent
      id="portfolio"
      css={{
        position: 'relative',
        scrollMarginTop: '64px',
      }}
    >
      <Box
        css={{
          paddingBottom: '12px',
          paddingTop: '20px',
          '@desktop': {
            paddingBottom: '24px',
            paddingTop: '32px',
          },
          '@mid': {
            paddingBottom: '36px',
          },
        }}
      >
        <SectionHeading>
          PORTFOLIO
        </SectionHeading>
      </Box>
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: 'auto',
          gridTemplateRow: 'auto',
          paddingTop: '36px',
          '@desktop': {
            paddingTop: '52px',
            rowGap: '44px',
          },
        }}
      >
        {portfolioItems.map((item) => (
          <Box
            key={item.title}
            css={{
              alignItems: 'start',
              display: 'grid',
              gridTemplateRows: 'auto auto',
              marginBottom: '84px',
              rowGap: '64px',
              '@desktop': {
                columnGap: '104px',
                gridTemplateColumns: '3fr 4fr',
                gridTemplateRows: '1fr',
              },
            }}
          >
            <Box
              css={{
                gridRowStart: '2',
                marginBottom: '36px',
                '@desktop': {
                  gridColumnStart: '1',
                  gridRowStart: '1',
                },
              }}
            >
              <Text
                as="h3"
                font="lato"
                weight={900}
                css={{
                  color: '$textDark',
                  fontSize: '26px',
                  paddingBottom: '12px',
                  '@largeMobile': { fontSize: '30px' },
                  '@desktop': { fontSize: '26px' },
                  '@mid': { fontSize: '32px' },
                }}
              >
                {item.title}
              </Text>
              <Text
                as="p"
                font="lato"
                spacing="text"
                weight={300}
                css={{
                  color: '$textDark',
                  fontSize: '20px',
                  lineHeight: '1.7',
                  paddingBottom: '64px',
                  '@largeMobile': { fontSize: '22px' },
                  '@desktop': { fontSize: '20px' },
                  '@mid': { fontSize: '22px' },
                }}
              >
                {item.description}
              </Text>
              <StyledNextLink
                href={item.linkUrl}
                passHref
                underlined
                style={{ padding: '8px 0' }}
              >
                <Text font="lato" weight={700}>
                  {item.linkText}
                </Text>
              </StyledNextLink>
            </Box>
            <Box
              as="a"
              href={item.linkUrl}
              css={{
                animationDelay: '0.25s',
                borderRadius: '5px',
                cursor: 'pointer',
                gridRowStart: '1',
                position: 'relative',
                transition: 'transform .65s',
                '@hover': {
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                },
                '@desktop': {
                  gridColumnStart: '2',
                },
                '&:focus-visible': {
                  outlineColor: '$outlineColor',
                  outlineOffset: '0px',
                  outlineStyle: 'solid',
                  outlineWidth: '3px',
                },
              }}
            >
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                style={{
                  borderRadius: '5px',
                  boxShadow: '0 10px 60px 0 rgba(0, 0, 0, .16)',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '80% 50%',
                  width: '100%',
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </BoxPageContent>
  )
}
