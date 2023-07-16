////
///
// SocialLink.tsx

import type * as Stitches from '@stitches/react'

import { Div, Image, Text } from '@components/base'
import { LinkStyle } from '@components/styled/LinkStyle'

type SocialLinkProps = {
  alt: string
  css?: Stitches.CSS
  href: string
  imageSrc: string
  username: string
}

export const SocialLink: React.FC<SocialLinkProps> = ({ alt, css, href, imageSrc, username }) => (
  <Div
    as="a"
    href={href}
    target="_blank"
    css={{
      borderRadius: '4px',
      display: 'inline-block',
      flexShrink: 0,
      '&:focus-visible': {
        outlineColor: '$outlineColor',
        outlineOffset: '7px',
        outlineStyle: 'solid',
        outlineWidth: '3px',
      },
      ...css,
    }}
  >
    <Image
      alt={alt}
      src={imageSrc}
      css={{ display: 'inline', marginRight: '14px', size: '36px' }}
    />
    <LinkStyle
      css={{
        verticalAlign: 'middle',
        '&::after': { bottom: '-2px' },
      }}
    >
      <Text
        as="p"
        font="lato"
        spacing="text"
        weight={700}
        css={{
          color: '$textDark',
          display: 'inline',
          fontSize: '19px',
          lineHeight: '1.7',
          '@largeMobile': { fontSize: '20px' },
        }}
      >
        {username}
      </Text>
    </LinkStyle>
  </Div>
)
