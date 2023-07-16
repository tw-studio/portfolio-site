////
///
// components › styled › ImageWithCaption.tsx

import { CSS } from '@stitches/react'

import { Box, Image } from '@components/base'
import { CaptionText as Caption } from '@components/styled/CaptionText'

export type ImageWithCaptionProps = React.PropsWithChildren<
  {
    alt: string
    caption?: string
    cssDiv?: CSS
    cssImg?: CSS
    ref?: React.Ref<HTMLImageElement>
    src: string
  } & React.HTMLProps<HTMLImageElement>
>

export const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({
  alt,
  caption,
  cssDiv,
  cssImg,
  src,
  ...props
}) => (
  <Box
    css={{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      ...cssDiv,
    }}
  >
    <Image
      alt={alt}
      src={src}
      css={{
        height: '100%',
        objectFit: 'cover',
        objectPosition: '50% 50%',
        width: '100%',
        ...cssImg,
      }}
      {...props}
    />
    {caption && <Caption>{caption}</Caption>}
  </Box>
)
