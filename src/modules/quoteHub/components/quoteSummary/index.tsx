import { Box, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { QuoteHighlightCard } from '../quoteHighlightCard'
import { SummaryCard } from '../summaryCard'
import { useController } from './useController'

export const QuoteSummary: React.FC = () => {
  const { quoteSummary, handleBack, handleNext } = useController()
  const { t } = useTranslation()
  return (
    <>
      <SummaryCard
        title={t('quoteHub.stepThree.personalDetails')}
        fields={quoteSummary.personalInformationSummary}
      />

      <SummaryCard
        title={t('quoteHub.stepThree.coverageDetails')}
        fields={quoteSummary.coverageSummary}
      />

      <QuoteHighlightCard />

      <Box display="flex" justifyContent="space-between">
        <Button variant="contained" color="primary" onClick={handleBack}>
          {t('quoteHub.common.back')}
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          {t('quoteHub.common.next')}
        </Button>
      </Box>
    </>
  )
}
