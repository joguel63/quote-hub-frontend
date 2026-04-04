import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0052FF',
    },
    secondary: {
      main: '#0F172A',
    },
    background: {
      default: '#f7f9fb',
    },
  },
  typography: {
    h2: {
      color: '#191c1e',
    },
    h3: {
      color: '#191c1e',
    },
    h4: {
      color: '#191c1e',
    },
    h5: {
      color: '#434656',
    },

    body1: {
      color: '#434656',
    },
    body2: {
      color: '#434656',
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarGutter: 'auto',
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& input[type=number]': { MozAppearance: 'textfield' },
          '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button':
            {
              WebkitAppearance: 'none',
              margin: 0,
            },
        },
      },
    },
  },
})

export default theme
