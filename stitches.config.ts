////
///
// stitches.config.ts

import {
  blue,
  gray,
  indigo,
  slate,
  blueDark,
  grayDark,
  indigoDark,
  slateDark,
} from '@radix-ui/colors'
import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  reset,
  styled,
  theme,
} = createStitches({
  prefix: 'Ѧ',
  theme: {
    // https://stitches.dev/docs/tokens
    colors: {
      ...blue,
      ...gray,
      ...indigo,
      ...slate,
      black: '#000000',
      borderLight: '#eaeaea',
      dark: '#333333',
      hiContrast: '$slate12',
      imagePlaceholder: '#f4f6f9',
      none: '#00000000',
      oneNote: '#7f397b',
      oneNote2: '#713b79',
      oneNote3: '#833C7E',
      oneNote4: '#7F387A',
      oneNoteLight: '##a97b96',
      oneNoteLight1: '#BB8EB9',
      oneNoteLight2: '#a35c9d',
      oneNoteLight3: '##a97b96',
      oneNoteLight4: '#c99bc4',
      oneNoteLight5: '#f7f3f8',
      outlineColor: '#00a7bd',
      placeholder: '#dadde3',
      slateBrightD9: '#d9dbdf',
      slateBrightE9: '#e9ebef',
      slateBrightEC: '#eceef2',
      slateBrightF2: '#f2f4f8',
      slateBrightF4: '#f4f6f9',
      slateBrightF5: '#f5f5f7',
      slateBrightF6: '#f6f8fb',
      slateBrightF7: '#f7f7f9',
      slateBrightF9: '#f9f9fb',
      slateBrightFB: '#fbfbfd',
      slateMedium: '#6e7074',
      textDark: '#2a2a2a',
      textLight: '#ffffff',
      textPlaceholder: '#dadde3',
      textPrimary: '#2a2a2a',
      textSecondary: '#6e7074',
      theme0: '#0070f3',
      theme1: '#1aa854',
      transparent: '#00000000',
      white: '#ffffff',
    },
    fontSizes: {},
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    space: {
      contentPaddingDesktop: '40px',
      contentPaddingMid: '60px',
      contentPaddingFull: '80px',
      contentPaddingMobile: '21px',
      contentWidthDesktop: '704px',
      contentWidthMid: '840px',
      contentWidthFull: '1100px',
      maxTextWidth: '770px',
      // contentWidthFull: '980px',
    },
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    midMobile: '(min-width: 400px)',
    largeMobile: '(min-width: 550px)',
    desktop: '(min-width: 744px)',
    mid: '(min-width: 936px)',
    full: '(min-width: 1128px)',
    wide: '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    ////
    ///
    // Spacing, Layout

    // container
    container: () => ({
      '@sm': { maxWidth: '640px' },
      '@md': { maxWidth: '768px' },
      '@lg': { maxWidth: '1024px' },
      '@xl': { maxWidth: '1280px' },
      '@xxl': { maxWidth: '1536px' },
    }),

    // margins
    marginX: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // padding
    paddingX: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // width/height together
    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    ////
    ///
    // Typography

    // font size
    fontPx: (value: number) => ({
      fontSize: `${value / 16}rem`,
    }),

    // letter spacing
    tracking: (value: string | Stitches.PropertyValue<'letterSpacing'>) => {
      switch (value) {
        case 'tighter':
          return ({ letterSpacing: '-0.05em' })
        case 'tight':
          return ({ letterSpacing: '-0.025em' })
        case 'normal':
          return ({ letterSpacing: '0em' })
        case 'wide':
          return ({ letterSpacing: '0.025em' })
        case 'wider':
          return ({ letterSpacing: '0.05em' })
        case 'widest':
          return ({ letterSpacing: '0.1em' })
        default:
          return ({ letterSpacing: value })
      }
    },

    // truncate
    truncate: () => ({
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }),

    // word break
    wordBreak: (value: string | Stitches.PropertyValue<'wordBreak'>) => {
      switch (value) {
        case 'normal':
          return ({ overflowWrap: 'normal', wordBreak: 'normal' })
        case 'words':
          return ({ overflowWrap: 'break-word' })
        case 'all':
          return ({ wordBreak: 'break-all' })
        default:
          return ({ wordBreak: value })
      }
    },

    ////
    ///
    // Layout

    // flex
    flexing: (value: string) => {
      switch (value) {
        case 'full':
          return ({ flex: '1 1 0%' })
        case 'auto':
          return ({ flex: '1 1 auto' })
        case 'initial':
          return ({ flex: '0 1 auto' })
        case 'none':
          return ({ flex: 'none' })
        default:
          return ({})
      }
    },

    // grid template columns
    gridCols: (value: number) => ({
      gridTemplateColumns: `repeat(${value}, minmax(0, 1fr))`,
    }),

    // grid column
    colSpan: (value: string | number) => {
      if (value === 'auto') { return ({ gridColumn: 'auto' }) }
      if (value === 'full') { return ({ gridColumn: '1 / -1' }) }
      if (typeof value === 'number' && value >= 1 && value <= 12) {
        return ({ gridColumn: `span ${value} / span ${value}` })
      }
      return ({ gridColumn: 'auto' })
    },

    ////
    ///
    // Misc
    
    // linear gradient
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
})

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...blueDark,
    ...grayDark,
    ...indigoDark,
    ...slateDark,
    hiContrast: '$slate12',
  },
})
