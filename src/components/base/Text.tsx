/* eslint-disable quote-props */
////
///
// components › base › Text

import { CSS } from '@stitches/react'

import { styled } from '@/stitches.config'

export type FontVariants = 'inherit' | 'lato' | 'playfair' | 'system'
export type TextProps = {
  children?: React.ReactNode
  clip?: 'border' | 'content' | 'padding' | 'text'
  color?: 'inherit' | 'primary' | 'secondary' | 'theme'
  css?: CSS
  display?: 'block' | 'flex' | 'inline' | 'inlineBlock' | 'inlineFlex'
  font?: FontVariants
  lineHeight?: 13 | 14 | 15 | 16 | 18
  numbers?: 'normal' | 'tabular'
  pre?: 'line'
  size?: 14 | 16 | 18 | 21 | 24 | 28 | 32
  spacing?: 'inherit' | 'text' | 'wide'
  weight?: 100 | 'thin' | 200 | 'extralight' | 300 | 'light' | 400 | 'regular'
    | 500 | 'medium' | 600 | 'semibold' | 700 | 'bold' | 800 | 'extrabold' | 900 | 'heavy'
  whiteSpace?: 'normal' | 'nowrap' | 'pre'
}

export const Text = styled('span', {
  fontKerning: 'normal',
  fontVariantNumeric: 'normal',

  defaultVariants: {
    clip: 'border',
    color: 'inherit',
    display: 'block',
    font: 'inherit',
    lineHeight: '15',
    numbers: 'normal',
    pre: 'line',
    size: 'inherit',
    spacing: 'inherit',
    weight: 'inherit',
    whiteSpace: 'pre',
  },

  variants: {
    clip: {
      border: { backgroundClip: 'border-box' },
      content: { backgroundClip: 'content-box' },
      padding: { backgroundClip: 'padding-box' },
      text: { backgroundClip: 'text', color: 'transparent', WebkitBackgroundClip: 'text' },
    },
    color: {
      inherit: { color: 'inherit' },
      primary: { color: '$textPrimary' },
      secondary: { color: '$textSecondary' },
      theme: { color: '$theme0' },
    },
    display: {
      block: { display: 'block' },
      flex: { display: 'flex' },
      inline: { display: 'inline' },
      inlineBlock: { display: 'inline-block' },
      inlineFlex: { display: 'inline-flex' },
    },
    font: {
      inherit: {
        fontFamily: 'inherit',
      },
      lato: {
        fontFamily: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,'
        + 'Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      },
      playfair: {
        fontFamily: '"Playfair Display Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,'
        + 'Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      },
      system: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,'
        + 'Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      },
    },
    lineHeight: {
      13: { lineHeight: '1.3' },
      14: { lineHeight: '1.4' },
      15: { lineHeight: '1.5' },
      16: { lineHeight: '1.6' },
      18: { lineHeight: '1.8' },
    },
    numbers: {
      normal: { fontVariantNumeric: 'normal' },
      tabular: { fontVariantNumeric: 'tabular' },
    },
    pre: {
      line: { whiteSpace: 'pre-line' },
    },
    size: {
      inherit: { fontSize: 'inherit' },
      14: { fontSize: '14px' },
      16: { fontSize: '16px' },
      18: { fontSize: '18px' },
      21: { fontSize: '21px' },
      24: { fontSize: '24px' },
      28: { fontSize: '28px' },
      32: { fontSize: '32px' },
    },
    spacing: {
      inherit: { letterSpacing: 'inherit' },
      text: { letterSpacing: '0.01em' },
      wide: { letterSpacing: '1px' },
    },
    weight: {
      inherit: { fontWeight: 'inherit' },
      100: { fontWeight: '100' },
      thin: { fontWeight: '100' },
      200: { fontWeight: '200' },
      extralight: { fontWeight: '200' },
      300: { fontWeight: '300' },
      light: { fontWeight: '300' },
      400: { fontWeight: '400' },
      regular: { fontWeight: '400' },
      500: { fontWeight: '500' },
      medium: { fontWeight: '500' },
      600: { fontWeight: '600' },
      semibold: { fontWeight: '600' },
      700: { fontWeight: '700' },
      bold: { fontWeight: '700' },
      800: { fontWeight: '800' },
      extrabold: { fontWeight: '800' },
      900: { fontWeight: '900' },
      heavy: { fontWeight: '900' },
    },
    whiteSpace: {
      normal: { whiteSpace: 'normal' },
      nowrap: { whiteSpace: 'nowrap' },
      pre: { whiteSpace: 'pre-line' },
    },
  },
})
