import { AppRoutes } from 'core/enums'
import { useQuoteHubContext } from 'modules/quoteHub/hooks'
import { useNavigate } from 'react-router-dom'

const options = [
  {
    value: 'basic',
    title: 'Basic',
    description: 'Essential coverage for standard liabilities and minor medical expenses.',
    recommended: false,
  },
  {
    value: 'standard',
    title: 'Standard',
    description: 'Enhanced protection with added benefits and broader coverage limits.',
    recommended: true,
  },
  {
    value: 'premium',
    title: 'Premium',
    description:
      'Comprehensive vault-tier protection with global medical coverage and legal assistance.',
    recommended: false,
  },
]

export const useController = () => {
  const { formMethods } = useQuoteHubContext()

  const navigate = useNavigate()

  const handleBack = () => navigate(AppRoutes.QuotePersonalInformation)

  const handleNext = () => navigate(AppRoutes.QuoteSummary)

  return { formMethods, options, handleBack, handleNext }
}
