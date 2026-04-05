import { Stack } from '@mui/material'
import { AnimatedContainer } from 'core/components'
import { AppRoutes } from 'core/enums'
import { QuoteSubmissionResult, SectionHeader } from 'modules/quoteHub/components'
import { Navigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ResultPage: React.FC = () => {
  const { state } = useLocation()
  const { t } = useTranslation()
  const status = (state as { status?: 'success' | 'error' } | null)?.status

  if (!status) {
    return <Navigate to={AppRoutes.Quote} replace />
  }

  const titleKey =
    status === 'success' ? 'quoteHub.result.success.title' : 'quoteHub.result.error.title'

  const descriptionKey =
    status === 'success'
      ? 'quoteHub.result.success.description'
      : 'quoteHub.result.error.description'

  return (
    <AnimatedContainer>
      <Stack spacing={4} maxWidth={720} mx="auto">
        <SectionHeader title={t(titleKey)} description={t(descriptionKey)} />
        <QuoteSubmissionResult />
      </Stack>
    </AnimatedContainer>
  )
}

export default ResultPage
