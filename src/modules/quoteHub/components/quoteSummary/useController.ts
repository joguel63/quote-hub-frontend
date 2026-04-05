import { AppRoutes } from 'core/enums'
import { useSummaryMapper } from 'modules/quoteHub/hooks'
import { useNavigate } from 'react-router-dom'

export const useController = () => {
  const { quoteSummary } = useSummaryMapper()
  const navigate = useNavigate()

  const handleBack = () => navigate(AppRoutes.QuoteCoverage)

  const handleNext = () => {
    // navigate to the next page or perform any action needed
  }

  return { quoteSummary, handleBack, handleNext }
}
