/* eslint-disable react/no-array-index-key */
////
///
// components › debug › LoremIpsum

import React from 'react'

import { BoxPageContent, Text } from '@components/base'

type LoremIpsumProps = {
  paragraphs?: number,
}

const LoremIpsum: React.FC<LoremIpsumProps> = ({ paragraphs = 6 }) => {
  const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lobortis neque, vel aliquam metus. Nullam consequat luctus magna, vel commodo arcu. Proin vehicula justo non lacus bibendum lacinia. Suspendisse gravida felis a tortor rutrum, at suscipit justo placerat. Aliquam erat volutpat. Nulla quis neque turpis. Sed tincidunt tellus vel purus fringilla, id consequat urna consequat. Sed in nisi id erat semper varius. Nulla facilisi. Fusce vitae libero a nulla efficitur scelerisque id non sem. Integer ut sollicitudin lorem.

  Maecenas tristique lobortis lectus vitae gravida. Nunc vitae ligula interdum, gravida nulla nec, ultrices nunc. Nulla pharetra tincidunt urna, eu iaculis urna consectetur eu. Integer gravida, ex at tristique efficitur, lorem velit pulvinar nulla, eu dignissim urna justo eu lectus. Duis auctor metus sit amet nulla eleifend, et pharetra orci consequat. In ultrices est a dolor lacinia, nec volutpat dolor rhoncus. Quisque a eros non mi consequat rhoncus nec eget felis. Vestibulum dignissim posuere leo eget finibus. Suspendisse cursus tristique lobortis. Curabitur non enim sit amet tortor fermentum egestas sed eu dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eleifend ligula elit, non tincidunt leo lacinia at. Quisque ultrices urna id sem fermentum semper. Duis tristique quam ligula, non interdum tellus eleifend a. Quisque porttitor metus nec ex egestas, eget aliquam ipsum rutrum.

  Morbi scelerisque, ex nec fringilla malesuada, nulla tellus eleifend mauris, sit amet varius neque ipsum et ex. Curabitur ac ipsum tellus. Praesent non facilisis dolor. Mauris pulvinar ultrices ligula, ut eleifend ipsum aliquet id. Nulla ullamcorper semper justo, sit amet varius ex fringilla eget. Cras vitae urna vitae purus sodales viverra eget ut orci. Integer vulputate, nisi et porttitor gravida, dui massa lacinia justo, id euismod urna arcu eget nibh. Vestibulum rhoncus ante nec mauris aliquam semper. Suspendisse fringilla luctus tincidunt. Donec sed justo lectus.

  Donec vel elit arcu. In id tellus quis ligula interdum interdum. In ut fermentum nunc. Morbi scelerisque ipsum sed metus vestibulum, non gravida quam facilisis. Pellentesque rhoncus, dui vitae bibendum rutrum, dui nulla facilisis lacus, vitae pretium diam lectus eu lectus. Aliquam pulvinar sem et odio finibus, id convallis lectus vestibulum. Maecenas ultricies nulla eu ligula facilisis scelerisque. Proin a scelerisque tellus. Nulla pharetra tellus lectus, in aliquet tortor interdum at. Mauris id tincidunt lacus. In vel ante sed leo gravida facilisis. Duis facilisis augue sit amet velit posuere efficitur. Nunc faucibus lobortis lacinia. Fusce viverra felis ut risus vestibulum, ut aliquam leo vulputate.`

  const paragraphsArray = loremIpsumText.split('\n\n')
  const sourceParagraphCount = paragraphsArray.length

  return (
    <BoxPageContent>
      {Array.from({ length: paragraphs }).map((_, index) => {
        const paragraphIndex = index % sourceParagraphCount
        return (
          <React.Fragment key={index}>
            <Text
              key={index} // eslint-disable-line react/no-array-index-key
              size={24}
            >
              {paragraphsArray[paragraphIndex]}
            </Text>
            <br />
          </React.Fragment>
        )
      })}
    </BoxPageContent>
  )
}

export default LoremIpsum
