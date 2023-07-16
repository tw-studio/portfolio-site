////
///
// components › base › BoxPageContent

import { styled } from '@/stitches.config'

export const BoxPageContent = styled('div', {
  $$paddingX: '$space$contentPaddingMobile',
  boxSizing: 'border-box',
  flexShrink: 0,
  marginX: 'auto',
  paddingX: '$$paddingX',
  width: '100%',
  '@largeMobile': {
    $$paddingX: '$space$contentPaddingDesktop',
  },
  '@mid': {
    $$paddingX: '$space$contentPaddingMid',
    maxWidth: 'calc($space$contentWidthFull + ($$paddingX * 2))',
  },
})
