import { Paper, Stack } from '@mui/material'
import { QuoteStepper } from 'modules/quoteHub/components'
import { QuoteHubContextProvider } from 'modules/quoteHub/providers'
import { Outlet } from 'react-router-dom'

export const StepsLayout: React.FC = () => {
  return (
    <Paper
      sx={{
        padding: 4,
        borderRadius: 2,
        maxWidth: 'md',
        margin: 'auto',
      }}
      elevation={2}
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
