import { AppRoutes } from 'core/enums'
import { useQuoteHubContext } from 'modules/quoteHub/hooks'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const useController = () => {
  const { formMethods } = useQuoteHubContext()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const options = [
    {
      value: 'basic',
      title: t('quoteHub.coverage.plans.basic.title'),
      description: t('quoteHub.coverage.plans.basic.description'),
      recommended: false,
    },
    {
      value: 'standard',
      title: t('quoteHub.coverage.plans.standard.title'),
      description: t('quoteHub.coverage.plans.standard.description'),
      recommended: true,
    },
    {
      value: 'premium',
      title: t('quoteHub.coverage.plans.premium.title'),
      description: t('quoteHub.coverage.plans.premium.description'),
      recommended: false,
    },
  ]

  const handleBack = () => navigate(AppRoutes.QuotePersonalInformation)

  const handleNext = () => navigate(AppRoutes.QuoteSummary)

  return { formMethods, options, handleBack, handleNext }
}
