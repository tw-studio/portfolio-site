////
///
// components › styled › CaptionText.tsx

import { CSS } from '@stitches/react'

import { Text } from '@components/base'

type CaptionTextProps = React.PropsWithChildren<{
  css?: CSS
}>

export const CaptionText: React.FC<CaptionTextProps> = ({ children, css }) => (
  <Text
    weight={400}
    css={{
      color: '$textSecondary',
      fontSize: '15px',
      marginTop: '16px',
      textAlign: 'center',
      ...css,
    }}
  >
    {children}
  </Text>
)
