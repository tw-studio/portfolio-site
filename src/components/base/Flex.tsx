////
///
// components › base › Flex
// https://github.com/radix-ui/design-system/blob/master/components/Flex.tsx

import { styled } from '@/stitches.config'

export const Flex = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',

  variants: {
    align: {
      baseline: { alignItems: 'baseline' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      start: { alignItems: 'flex-start' },
      stretch: { alignItems: 'stretch' },
    },
    direction: {
      column: { flexDirection: 'column' },
      columnReverse: { flexDirection: 'column-reverse' },
      row: { flexDirection: 'row' },
      rowReverse: { flexDirection: 'row-reverse' },
    },
    justify: {
      between: { justifyContent: 'space-between' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      start: { justifyContent: 'flex-start' },
    },
    wrap: {
      noWrap: { flexWrap: 'nowrap' },
      wrap: { flexWrap: 'wrap' },
      wrapReverse: { flexWrap: 'wrap-reverse' },
    },
  },
  defaultVariants: {
    align: 'stretch',
    direction: 'row',
    justify: 'start',
    wrap: 'noWrap',
  },
})
