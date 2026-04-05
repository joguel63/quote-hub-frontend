import { Button } from '@mui/material'
import { AppRoutes } from 'core/enums'
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
    <>
      {t('quoteHub.stepThree.title')}
      <Button variant="contained" color="primary" onClick={handleBack}>
        {t('quoteHub.common.back')}
      </Button>
      <Button variant="contained" color="primary" onClick={handleNext}>
        {t('quoteHub.common.next')}
      </Button>
    </>
  )
}

export default SummaryPage
