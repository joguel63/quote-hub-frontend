import { createTheme } from '@mui/material'

const theme = createTheme({
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
