/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
////
///
// Footer.tsx

import { ReactNode } from 'react'

import { BoxPageContent, Text } from '@components/base'
import { StyledNextLink } from '@components/styled/StyledNextLink'

////
///
// MARK: Footer Component

export default function Footer() {
  return (
    <BoxPageContent
      css={{ marginTop: '64px', position: 'relative' }}
    >
      <Text
        as="p"
        font="lato"
        spacing="text"
        weight={300}
        css={{
          color: '$black',
          fontSize: '14px',
          lineHeight: '1.5',
        }}
      >
        This site is hand-crafted, with care.
        <br />
        <br />
        <br />
        Copyright © Tom Wionzek.
        <br />
        Photo by <FooterLink href="https://unsplash.com/photos/13EMxMYjHIE">Birger Strahl</FooterLink>
        {' '}
        on <FooterLink href="https://unsplash.com">Unsplash</FooterLink>.
        Illustrations courtesy of <FooterLink href="https://undraw.co">unDraw</FooterLink>.
      </Text>
    </BoxPageContent>
  )
}

////
///
// MARK: Styles

type FooterLinkProps = {
  href: string
  children?: ReactNode
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <StyledNextLink
    href={href}
    passHref
    target="_blank"
    css={{
      '@hover': {
        '&:hover': {
          textDecoration: 'underline',
          textDecorationColor: '$textPrimary',
        },
      },
      '&::after': {
        height: '0px',
      },
    }}
  >
    <Text display="inline">
      {children}
    </Text>
  </StyledNextLink>
)
