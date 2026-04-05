import { AppRoutes } from 'core/enums'
import { useQuoteHubContext } from 'modules/quoteHub/hooks'
import { useNavigate } from 'react-router-dom'

export const useController = () => {
  const navigate = useNavigate()
  const { formMethods } = useQuoteHubContext()

  const handleNext = () => {
    formMethods.trigger().then((isValid) => {
      if (isValid) navigate(AppRoutes.QuoteCoverage)
    })
  }
  return { formMethods, handleNext }
}
