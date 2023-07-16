////
///
// components › base › MDXComponents

import * as React from 'react'

// import NextLink from 'next/link'

import { Box, Text } from '@components/base'
import { SectionHeading } from '@components/styled/SectionHeading'
// import { Frontmatter } from 'types/frontmatter'

export const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text
      {...props}
      as="h1"
      color="inherit"
      font="lato"
      weight={900}
      css={{
        color: '$textDark',
        fontSize: '32px',
        marginTop: '24px',
        paddingBottom: '12px',
        '@largeMobile': { fontSize: '42px' },
        '@desktop': {
          fontSize: '34px',
          marginTop: '0px',
        },
        '@mid': { fontSize: '42px' },
      }}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text
      {...props}
      as="h2"
      color="inherit"
      font="lato"
      spacing="text"
      weight={300}
      css={{
        color: '$textDark',
        fontSize: '24px',
        lineHeight: '1.7',
        paddingBottom: '64px',
        '@largeMobile': { fontSize: '28px' },
        '@desktop': { fontSize: '26px' },
        '@mid': { fontSize: '30px' },
      }}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text
      {...props}
      as="h3"
      size={32}
      color="inherit"
      css={{
        fontWeight: 500,
        lineHeight: '40px',
        marginBottom: '10px',
        scrollMarginTop: '80px',
      }}
    />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Text
      {...props}
      as="h4"
      color="inherit"
      font="lato"
      spacing="wide"
      weight={500}
      css={{
        color: '$textDark',
        fontSize: '15px',
      }}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Text
      {...props}
      as="p"
      color="inherit"
      font="lato"
      spacing="text"
      weight={300}
      css={{
        color: '$textDark',
        fontSize: '20px',
        lineHeight: '1.7',
        marginBottom: '24px',
        '@largeMobile': { fontSize: '22px' },
        '@mid': { maxWidth: '70%' },
      }}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <Box
      {...props}
      as="ul"
      css={{
        color: '$textPrimary',
        paddingLeft: '1.15em',
        marginBottom: '15px',
        listStyleType: 'circle',
      }}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <Box {...props} as="ol" css={{ color: '$textDark', marginBottom: '15px' }} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props}>
      <Text
        as="p"
        color="inherit"
        font="lato"
        spacing="text"
        weight={300}
        css={{
          color: '$textDark',
          fontSize: '20px',
          lineHeight: '1.7',
          marginBottom: '24px',
          '@largeMobile': { fontSize: '22px' },
          '@mid': { maxWidth: '70%' },
        }}
      />
    </li>
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <Box
      css={{
        mt: '$6',
        mb: '$5',
        pl: '$4',
        borderLeft: `1px solid $gray4`,
        color: 'orange',
        '& p': {
          fontSize: '$3',
          color: '$gray11',
          lineHeight: '25px',
        },
      }}
      {...props}
    />
  ),
  SectionHeading,
  Text,
  // a: ({ href = '', ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  //   if (href.startsWith('http')) {
  //     return (
  //       <DS.Link
  //         {...props}
  //         variant="blue"
  //         href={href}
  //         css={{ fontSize: 'inherit' }}
  //         target="_blank"
  //         rel="noopener"
  //       />
  //     )
  //   }
  //   return (
  //     <NextLink href={href} passHref>
  //       <DS.Link {...props} css={{ color: 'inherit', fontSize: 'inherit' }} />
  //     </NextLink>
  //   )
  // },
  // hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
  //   <DS.Separator size="2" {...props} css={{ my: '$6', mx: 'auto' }} />
  // ),
  // strong: (props: React.HTMLAttributes<HTMLElement>) => (
  //   <Text {...props} css={{ display: 'inline', fontSize: 'inherit', fontWeight: 500 }} />
  // ),
  // img: ({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
  //   <Box css={{ my: '$6' }}>
  //     <Box
  //       as="img"
  //       {...props}
  //       css={{ maxWidth: '100%', verticalAlign: 'middle', ...props.css }}
  //     />
  //   </Box>
  // ),
  // pre: PreWithCopyButton,
  // code: ({ className, line, ...props }) => {
  //   // if it's a codeblock (``` block in markdown), it'll have a className from prism
  //   const isInlineCode = !className
  //   return isInlineCode ? (
  //     <DS.Code className={className} {...props} css={{ whiteSpace: 'break-spaces' }} />
  //   ) : (
  //     <code className={className} {...props} data-invert-line-highlight={line !== undefined} />
  //   )
  // },
}

// export const FrontmatterContext = React.createContext<Frontmatter>({} as any)

// Custom provider for next-mdx-remote
// https://github.com/hashicorp/next-mdx-remote#using-providers
// export function MDXProvider(props) {
//   const { frontmatter, children } = props
//   return <FrontmatterContext.Provider value={frontmatter}>{children}</FrontmatterContext.Provider>
// }
