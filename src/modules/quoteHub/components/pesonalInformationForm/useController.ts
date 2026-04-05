import { AppRoutes } from 'core/enums'
import { QuoteForm } from 'modules/quoteHub/types'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const useController = () => {
  const navigate = useNavigate()
  const formMethods = useFormContext<QuoteForm>()

  const handleNext = () => {
    formMethods.trigger().then((isValid) => {
      if (isValid) navigate(AppRoutes.QuoteCoverage)
    })
  }
  return { formMethods, handleNext }
}
