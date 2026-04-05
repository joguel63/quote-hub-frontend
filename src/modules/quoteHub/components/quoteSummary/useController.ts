import { AppRoutes } from 'core/enums'
import { useSummaryMapper } from 'modules/quoteHub/hooks'
import { QuoteForm } from 'modules/quoteHub/types'
import { getIsSenior } from 'modules/quoteHub/utils'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const useController = () => {
  const { quoteSummary } = useSummaryMapper()
  const formMethods = useFormContext<QuoteForm>()
  const navigate = useNavigate()
  const age = formMethods.getValues('age')
  const isSenior = getIsSenior(age)
  const isSubmitting = formMethods.formState.isSubmitting

  const handleBack = () => navigate(AppRoutes.QuoteCoverage)

  return { quoteSummary, isSenior, handleBack, isSubmitting }
}
