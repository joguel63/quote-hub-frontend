import { AppRoutes } from 'core/enums'
import { useQuoteHubContext } from 'modules/quoteHub/hooks'
import { QuoteForm } from 'modules/quoteHub/types'
import { calculateQuoteCost, getIsSenior } from 'modules/quoteHub/utils'
import { useEffect } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const useController = () => {
  const navigate = useNavigate()
  const formMethods = useFormContext<QuoteForm>()
  const { updateFormState, coverageOptions } = useQuoteHubContext()
  const age = useWatch({ control: formMethods.control, name: 'age' })
  const isSenior = getIsSenior(age)

  const handleBack = () => navigate(AppRoutes.QuotePersonalInformation)

  const setQuoteCost = () => {
    const formData = formMethods.getValues()
    const quoteCost = calculateQuoteCost(formData)
    formMethods.setValue('quoteCost', quoteCost, { shouldDirty: true })
  }

  const handleNext = () => {
    formMethods.trigger().then((isValid) => {
      if (isValid) {
        setQuoteCost()
        updateFormState()
        navigate(AppRoutes.QuoteSummary)
      }
    })
  }

  const resetSeniorFields = () => {
    const { age, coverageType, email, fullName, zipCode, quoteCost } = formMethods.getValues()
    formMethods.reset({ age, coverageType, email, fullName, zipCode, quoteCost })
  }

  useEffect(() => {
    if (!isSenior) resetSeniorFields()
  }, [isSenior])

  return { options: coverageOptions, formMethods, isSenior, handleBack, handleNext }
}
