import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from 'core/theme'
import { BrowserRouter } from 'react-router-dom'
import { RoutesProvider } from 'core/router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/">
        <RoutesProvider />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
