////
///
// components › styled › ItalicText.tsx

import { CSS } from '@stitches/react'

import { Text } from '@components/base'

type ItalicTextProps = React.PropsWithChildren<{
  css?: CSS
}>

export const ItalicText: React.FC<ItalicTextProps> = ({ children, css }) => (
  <Text
    display="inline"
    css={{
      fontStyle: 'italic',
      ...css,
    }}
  >
    {children}
  </Text>
)
