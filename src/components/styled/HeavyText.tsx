////
///
// components › styled › HeavyText

import { CSS } from '@stitches/react'

import { Text } from '@components/base'

type HeavyTextProps = React.PropsWithChildren<{
  css?: CSS
}>

export const HeavyText: React.FC<HeavyTextProps> = ({ children, css }) => (
  <Text
    display="inline"
    weight={900}
    css={{
      ...css,
    }}
  >
    {children}
  </Text>
)
