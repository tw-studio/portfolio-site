////
///
// components › styled › LinkStyle.tsx

import type * as Stitches from '@stitches/react'

import { styled } from '@/stitches.config'

export type LinkStyleProps = {
  css?: Stitches.CSS
  emphasis?: 'contrast' | 'subtle'
  isScrolled?: boolean
  transparent?: boolean
  underlined?: boolean
}

export const LinkStyle = styled('span', {
  alignItems: 'center',
  cursor: 'pointer',
  display: 'inline-block',
  flexShrink: 0,
  lineHeight: 'inherit',
  outline: 'none',
  position: 'relative',
  textDecoration: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::after': {
    bottom: '-4px',
    content: "''",
    display: 'inline-block',
    height: '3px',
    left: '0',
    position: 'absolute',
    transform: 'scaleY(0)',
    transformOrigin: 'bottom',
    transition: 'all 0.3s ease-in-out',
    width: '100%',
  },
  '@hover': {
    '&:hover::after': {
      transform: 'scaleY(1)',
    },
  },
  '&:focus': {
    outlineColor: '$textSecondary',
    outlineOffset: '6px',
    outlineStyle: 'solid',
    outlineWidth: '2px',
  },
  defaultVariants: {
    emphasis: 'contrast',
    isScrolled: false,
    transparent: false,
    underlined: false,
  },
  variants: {
    emphasis: {
      contrast: {},
      subtle: {},
    },
    isScrolled: {
      false: {},
      true: {},
    },
    transparent: {
      false: {},
      true: {},
    },
    underlined: {
      false: {},
      true: {
        '&::after': {
          bottom: '-18px',
          height: '3px',
          transform: 'scaleY(1)',
        },
        '@hover': {
          '&:hover::after': {
            height: '11px',
            transformOrigin: 'top',
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      emphasis: 'contrast',
      transparent: false,
      css: {
        color: '$textPrimary',
        '&::after': { backgroundColor: '$textPrimary' },
      },
    },
    {
      emphasis: 'subtle',
      transparent: false,
      css: {
        color: '$textSecondary',
        '&::after': { backgroundColor: '$textPrimary' },
      },
    },
    {
      emphasis: 'contrast',
      isScrolled: true,
      transparent: true,
      css: {
        color: '$textPrimary',
        '&::after': { backgroundColor: '$textPrimary' },
      },
    },
    {
      emphasis: 'subtle',
      isScrolled: true,
      transparent: true,
      css: {
        color: '$textSecondary',
        '&::after': { backgroundColor: '$textPrimary' },
      },
    },
    {
      isScrolled: false,
      transparent: true,
      css: {
        color: '$slateBrightF4',
        '&::after': { backgroundColor: '$slateBrightF4' },
        '&:focus': { outlineColor: '$slateBrightD9' },
      },
    },
  ],
})
