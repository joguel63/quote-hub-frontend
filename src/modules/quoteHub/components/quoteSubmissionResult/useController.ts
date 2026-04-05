import { AppRoutes } from 'core/enums'
import { QuoteCoverageStatus } from 'modules/quoteHub/enums'
import { formPersistenceUtils } from 'modules/quoteHub/utils'
import { useLocation, useNavigate } from 'react-router-dom'

type ResultLocationState = {
  status?: QuoteCoverageStatus
}

export const useController = () => {
  const navigate = useNavigate()
  const location = <{ state?: ResultLocationState }>useLocation()
  const state = location.state

  const status = state?.status

  const cleanAndNavigateToQuote = () => {
    formPersistenceUtils.clearFormStateFromLocalStorage()
    navigate(AppRoutes.Quote)
  }

  const handlePrimaryAction = () => {
    if (status === QuoteCoverageStatus.Success) cleanAndNavigateToQuote()
    else navigate(AppRoutes.QuoteSummary)
  }

  const handleSecondaryAction = () => cleanAndNavigateToQuote()

  return { status, handlePrimaryAction, handleSecondaryAction }
}
