import { AppRoutes } from 'core/enums'
import { QuoteCoverageStatus } from 'modules/quoteHub/enums'
import { useLocation, useNavigate } from 'react-router-dom'

type ResultLocationState = {
  status?: QuoteCoverageStatus
}

export const useController = () => {
  const navigate = useNavigate()
  const location = <{ state?: ResultLocationState }>useLocation()
  const state = location.state

  const status = state?.status

  const handlePrimaryAction = () => {
    if (status === QuoteCoverageStatus.Success) navigate(AppRoutes.Quote)
    else navigate(AppRoutes.QuoteSummary)
  }

  const handleSecondaryAction = () => navigate(AppRoutes.Quote)

  return { status, handlePrimaryAction, handleSecondaryAction }
}
