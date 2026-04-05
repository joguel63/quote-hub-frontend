import { Stack } from '@mui/material'
import { AnimatedContainer } from 'core/components'
import { QuoteSummary, SectionHeader } from 'modules/quoteHub/components'
import { useTranslation } from 'react-i18next'

const SummaryPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <AnimatedContainer>
      <Stack spacing={4}>
        <SectionHeader
          title={t('quoteHub.stepThree.title')}
          description={t('quoteHub.stepThree.description')}
        />
        <QuoteSummary />
      </Stack>
    </AnimatedContainer>
  )
}

export default SummaryPage
