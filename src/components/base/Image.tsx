////
///
// components › base › Image.tsx

import { styled } from '@/stitches.config'

export const Image = styled('img', {
  objectFit: 'cover',
  objectPosition: '50% 50%',
  maxWidth: '100%',
  verticalAlign: 'middle',
})
