////
///
// StyledNextLink.tsx

import NextLink, { LinkProps as NextLinkProps } from 'next/link'

import { theme } from '@/stitches.config'
import { LinkStyle, LinkStyleProps } from '@components/styled/LinkStyle'

type StyledNextLinkProps = NextLinkProps & LinkStyleProps & {
  children?: React.ReactNode
  style?: React.CSSProperties
  target?: string
}

export const StyledNextLink: React.FC<StyledNextLinkProps> = ({
  css,
  emphasis = 'contrast',
  href,
  isScrolled = false,
  passHref,
  style,
  target,
  transparent = false,
  underlined = false,
  children,
  ...props
}) => (
  <NextLink
    href={href}
    passHref={passHref}
    onBlur={(event) => {
      const eventTarget = event.currentTarget
      eventTarget.style.outline = 'none'
    }}
    onFocus={(event) => {
      const eventTarget = event.currentTarget
      if (eventTarget.matches(':focus-visible')) {
        eventTarget.style.outlineColor = theme.colors.outlineColor.value
        eventTarget.style.outlineOffset = '3px'
        eventTarget.style.outlineStyle = 'solid'
        eventTarget.style.outlineWidth = '3px'
      }
    }}
    style={{ borderRadius: '4px', outline: 'none', textDecoration: 'none', ...style }}
    target={target}
    {...props}
  >
    <LinkStyle
      emphasis={emphasis}
      isScrolled={isScrolled}
      transparent={transparent}
      underlined={underlined}
      css={css}
    >
      {children}
    </LinkStyle>
  </NextLink>
)
