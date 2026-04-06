import { Box, Container } from '@mui/material'
import { Header } from 'core/components'
import { Outlet } from 'react-router-dom'
import { styles } from './styles'

export const AppLayout: React.FC = () => {
  return (
    <Box sx={styles.root}>
      <Box aria-hidden sx={styles.backgroundDecor} />
      <Header />
      <Container component="main" maxWidth="lg" sx={styles.main}>
        <Outlet />
      </Container>
    </Box>
  )
}
