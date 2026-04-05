import { Button, Stack } from '@mui/material'
import { AnimatedContainer } from 'core/components'
import { AppRoutes } from 'core/enums'
import { SectionHeader } from 'modules/quoteHub/components'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const SummaryPage: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleBack = () => {
    navigate(AppRoutes.QuoteCoverage)
  }

  const handleNext = () => {
    // navigate to the next page or perform any action needed
  }
  return (
    <AnimatedContainer>
      <Stack spacing={4}>
        <SectionHeader
          title={t('quoteHub.stepThree.title')}
          description={t('quoteHub.stepThree.description')}
        />
        <Button variant="contained" color="primary" onClick={handleBack}>
          {t('quoteHub.common.back')}
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          {t('quoteHub.common.next')}
        </Button>
      </Stack>
    </AnimatedContainer>
  )
}

export default SummaryPage
