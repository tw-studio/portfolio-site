/* eslint-disable quote-props */
////
///
// components › base › TextBox

import { styled } from '@/stitches.config'

import { Text } from './Text'

export const TextBox = styled(Text, {
  defaultVariants: {
    as: 'div',
  },
})
