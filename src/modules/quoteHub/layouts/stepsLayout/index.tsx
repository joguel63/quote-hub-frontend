import { Paper, Stack, useMediaQuery, useTheme } from '@mui/material'
import { QuoteStepper } from 'modules/quoteHub/components'
import { QuoteHubContextProvider } from 'modules/quoteHub/providers'
import { Outlet } from 'react-router-dom'

export const StepsLayout: React.FC = () => {
  const theme = useTheme()
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <Paper
      sx={{
        backgroundColor: isSmUp ? 'background.paper' : 'transparent',
        padding: isSmUp ? 4 : 1,
        borderRadius: 2,
        maxWidth: 'md',
        margin: 'auto',
      }}
      elevation={isSmUp ? 2 : 0}
    >
      <QuoteHubContextProvider>
        <Stack spacing={4}>
          <QuoteStepper />
          <Outlet />
        </Stack>
      </QuoteHubContextProvider>
    </Paper>
  )
}
