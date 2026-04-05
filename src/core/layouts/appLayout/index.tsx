import { Container } from '@mui/material'
import { Header } from 'core/components'
import { Outlet } from 'react-router-dom'

export const AppLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Container sx={{ py: 4 }}>
        <Outlet />
      </Container>
    </>
  )
}
