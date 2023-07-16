////
///
// Card.tsx

import React, { ReactNode } from 'react'

import { CSS } from '@stitches/react'

import { Box } from '@components/base'

type CardProps = {
  align?: 'center' | 'left' | 'right'
  bgColor?: string
  children: ReactNode
  css?: CSS
  flex?: string
}

interface CardBoxProps {
  children: ReactNode
  css?: CSS
  justify?: string
}

const Card: React.FC<CardProps> = ({
  align = 'center',
  bgColor = '#ffffff',
  children,
  css,
  flex = '1',
}) => (
  <Box
    css={{
      backgroundColor: bgColor,
      borderRadius: '20px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      flex,
      padding: '40px',
      textAlign: align,
      ...css,
    }}
  >
    {children}
  </Box>
)

const CardBox: React.FC<CardBoxProps> = ({
  children,
  css,
  justify = 'space-between',
}) => (
  <Box
    css={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: justify,
      gap: '32px',
      width: '100%',
      '@mid': { flexDirection: 'row' },
      ...css,
    }}
  >
    {children}
  </Box>
)

export { Card, CardBox }
