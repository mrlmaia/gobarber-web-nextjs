import { extendTheme, theme as chakraTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    ...chakraTheme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700
  },
  fontSizes: {
    ...chakraTheme.fontSizes,
    '3xl': '32px',
    '4xl': '40px',
    lg: '20px'
  },
  styles: {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        outline: 0
      },
      body: {
        background: '#312e38',
        color: '#fff'
      },
      'html, body': {
        minHeight: '100%'
      },
      'body, input, button': {
        fontFamily: "'Roboto Slab', serif",
        fontSize: 'md'
      },
      'h1, h2, h3, h4, h5, h6, strong': {
        fontWeight: 500
      },
      'p, label': {
        // fontSize: 'sm',
        color: 'gray.700'
        // lineHeight: 'tall'
      }
    }
  }
})

export default theme
