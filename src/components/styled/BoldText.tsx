////
///
// components › styled › BoldText.tsx

import { CSS } from '@stitches/react'

import { Text } from '@components/base'

type BoldTextProps = React.PropsWithChildren<{
  css?: CSS
}>

export const BoldText: React.FC<BoldTextProps> = ({ children, css }) => (
  <Text
    display="inline"
    weight={700}
    css={{
      ...css,
    }}
  >
    {children}
  </Text>
)
