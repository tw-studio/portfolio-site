/* eslint-disable react/jsx-one-expression-per-line */
////
///
// components › sections › PortfolioPager

import { BoxPageContent, Text } from '@components/base'
import { HeavyText as Heavy } from '@components/styled/HeavyText'

export default function PortfolioPager() {
  return (
    <BoxPageContent
      css={{ marginTop: '84px', position: 'relative' }}
    >
      <Text
        font="lato"
        spacing="text"
        weight={300}
        css={{
          color: '$black',
          fontSize: '24px',
          textAlign: 'right',
        }}
      >
        <Heavy>NEXT:</Heavy> coming soon
      </Text>
    </BoxPageContent>
  )
}
