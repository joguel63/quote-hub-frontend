import { Paper, Stack, useMediaQuery, useTheme } from '@mui/material'
import { QuoteStepper } from 'modules/quoteHub/components'
import { QuoteHubContextProvider } from 'modules/quoteHub/providers'
import { Outlet } from 'react-router-dom'
import { styles } from './styles'

export const StepsLayout: React.FC = () => {
  const theme = useTheme()
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'))
  const paperClassName = isSmUp ? 'stepsLayoutPaperDesktop' : 'stepsLayoutPaperMobile'

  return (
    <Paper className={paperClassName} sx={styles.paper} elevation={isSmUp ? 2 : 0}>
      <QuoteHubContextProvider>
        <Stack spacing={{ xs: 3, md: 4 }} sx={styles.content}>
          <QuoteStepper />
          <Outlet />
        </Stack>
      </QuoteHubContextProvider>
    </Paper>
  )
}
