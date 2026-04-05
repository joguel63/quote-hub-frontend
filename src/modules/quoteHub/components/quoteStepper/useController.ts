import { AppRoutes } from 'core/enums'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

const stepsIndex = {
  [AppRoutes.QuotePersonalInformation]: 0,
  [AppRoutes.QuoteCoverage]: 1,
  [AppRoutes.QuoteSummary]: 2,
}

export const useController = () => {
  const { pathname } = useLocation()
  const { t } = useTranslation()

  const steps = [
    {
      label: t('quoteHub.stepOne.stepName'),
      completed: false,
    },
    {
      label: t('quoteHub.stepTwo.stepName'),
      completed: false,
    },
    {
      label: t('quoteHub.stepThree.stepName'),
      completed: false,
    },
  ]
  const activeStep = stepsIndex[pathname as keyof typeof stepsIndex] ?? 0
  return { steps, activeStep }
}
