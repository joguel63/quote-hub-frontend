import { AppRoutes } from 'core/enums'
import { useQuoteHubContext, useSummaryMapper } from 'modules/quoteHub/hooks'
import { getIsSenior } from 'modules/quoteHub/utils'
import { useNavigate } from 'react-router-dom'

export const useController = () => {
  const { quoteSummary } = useSummaryMapper()
  const { formMethods } = useQuoteHubContext()
  const navigate = useNavigate()
  const age = formMethods.getValues('age')
  const isSenior = getIsSenior(age)

  const handleBack = () => navigate(AppRoutes.QuoteCoverage)

  return { quoteSummary, isSenior, handleBack }
}
