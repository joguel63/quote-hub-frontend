import { BrowserRouter } from 'react-router-dom'
import { RoutesProvider } from './core/router'

function App() {
  return (
    <BrowserRouter basename="/">
      <RoutesProvider />
    </BrowserRouter>
  )
}

export default App
