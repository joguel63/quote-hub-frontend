import { alpha, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0052FF',
      light: '#4F8BFF',
      dark: '#0037B3',
    },
    secondary: {
      main: '#10233F',
    },
    text: {
      primary: '#132238',
      secondary: '#506076',
    },
    background: {
      default: '#F3F7FC',
      paper: '#FFFFFF',
    },
    divider: '#D9E3F0',
    success: {
      main: '#2E8B57',
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: 'Inter, "Segoe UI", sans-serif',
    h1: {
      color: '#132238',
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    h2: {
      color: '#132238',
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    h3: {
      color: '#132238',
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h4: {
      color: '#132238',
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h5: {
      color: '#1C2E49',
      fontWeight: 700,
    },
    h6: {
      color: '#1C2E49',
      fontWeight: 600,
    },
    body1: {
      color: '#506076',
      lineHeight: 1.7,
    },
    body2: {
      color: '#506076',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 700,
      letterSpacing: 0,
      textTransform: 'none',
    },
    overline: {
      color: '#66788F',
      fontWeight: 700,
      letterSpacing: '0.12em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarGutter: 'auto',
          minHeight: '100vh',
          background:
            'radial-gradient(circle at top left, rgba(79, 139, 255, 0.12), transparent 28%), radial-gradient(circle at 85% 15%, rgba(0, 82, 255, 0.08), transparent 22%), linear-gradient(180deg, #F7FAFE 0%, #F1F5FB 100%)',
        },
        '#root': {
          minHeight: '100vh',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { boxShadow: '0 24px 60px rgba(16, 35, 63, 0.12)' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 48,
          borderRadius: 7,
          paddingInline: 20,
        },
        containedPrimary: {
          boxShadow: '0 18px 35px rgba(0, 82, 255, 0.22)',
          '&:hover': {
            boxShadow: '0 18px 35px rgba(0, 82, 255, 0.28)',
          },
        },
        outlinedPrimary: {
          borderColor: alpha('#0052FF', 0.22),
          backgroundColor: alpha('#FFFFFF', 0.72),
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 72,
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
          '& .MuiOutlinedInput-root': {
            borderRadius: 16,
            backgroundColor: alpha('#FFFFFF', 0.92),
            '& fieldset': {
              borderColor: alpha('#D9E3F0', 0.9),
            },
            '&:hover fieldset': {
              borderColor: alpha('#0052FF', 0.35),
            },
            '&.Mui-focused fieldset': {
              borderWidth: 2,
            },
          },
          '& .MuiInputLabel-root': {
            color: '#66788F',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          alignItems: 'flex-start',
          gap: 8,
          marginLeft: 0,
          marginRight: 0,
        },
        label: {
          color: '#394B64',
          lineHeight: 1.6,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          backgroundColor: alpha('#10233F', 0.2),
        },
      },
    },
  },
})

export default theme
