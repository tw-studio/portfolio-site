////
///
// _app.page.tsx

import React from 'react'

import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@fontsource-variable/playfair-display'
import '@fontsource/lato/300.css'
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import '@fontsource/lato/900.css'

import { globalCss } from '@/stitches.config'
import { mdxComponents } from '@components/base/MDXComponents'
import { normalize } from '@src/styles/normalize-stitches'

const customGlobalStyles = {
  html: {
    scrollBehavior: 'smooth',
  },
  'body, input, textarea, button': {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,'
                + 'Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  body: {
    fontSize: '100%',
    overflow: 'scroll',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
    'font-smoothing': 'antialiased',
  },
  '::selection': {
    color: '$slateBrightFB',
    background: '#333',
  },
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore 
const globalStyles = globalCss(...normalize, customGlobalStyles)

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MDXProvider components={mdxComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  )
}
