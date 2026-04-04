import { CssBaseline, ThemeProvider } from '@mui/material'
import { RoutesProvider } from 'core/router'
import theme from 'core/theme'
import { BrowserRouter } from 'react-router-dom'

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
