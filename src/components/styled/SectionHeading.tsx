////
///
// components › styled › SectionHeading.tsx

import { CSS } from '@stitches/react'

import { Text } from '@components/base'

type SectionHeadingProps = React.PropsWithChildren<{
  css?: CSS
}>

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, css }) => (
  <Text
    as="h1"
    font="lato"
    spacing="wide"
    weight={500}
    css={{
      color: '$textDark',
      fontSize: '15px',
      ...css,
    }}
  >
    {children}
  </Text>
)
