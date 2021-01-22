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
  colors: {
    ...chakraTheme.colors,
    orange: {
      50: '#ffe9cc',
      100: '#ffc880',
      200: '#ffa633',
      300: '#ff9b1a',
      400: '#ff9000',
      500: '#ff9000',
      600: '#cc7300',
      700: '#995600',
      800: '#804800',
      900: '#663a00'
    }
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
      }
    }
  }
})

export default theme
