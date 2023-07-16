////
///
// components › styled › TallPipe

import { Text, TextProps } from '@components/base/Text'

export const TallPipe: React.FC<TextProps> = ({ css, ...props }) => (
  <Text
    display="inline"
    css={{
      fontSize: '48px',
      fontWeight: 300,
      marginBottom: '2px',
      paddingRight: '12px',
      verticalAlign: 'middle',
      ...css,
    }}
    {...props}
  >
    |
  </Text>
)
