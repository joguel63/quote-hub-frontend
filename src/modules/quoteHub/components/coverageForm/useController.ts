import { AppRoutes } from 'core/enums'
import { coverageOptions } from 'modules/quoteHub/enums'
import { useQuoteHubContext } from 'modules/quoteHub/hooks'
import { calculateQuoteCost, getIsSenior } from 'modules/quoteHub/utils'
import { useEffect } from 'react'
import { useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const useController = () => {
  const { formMethods } = useQuoteHubContext()
  const navigate = useNavigate()
  const age = useWatch({ control: formMethods.control, name: 'age' })
  const isSenior = getIsSenior(age)

  const handleBack = () => navigate(AppRoutes.QuotePersonalInformation)

  const handleNext = () => {
    formMethods.trigger().then((isValid) => {
      if (isValid) {
        const formData = formMethods.getValues()
        const quoteCost = calculateQuoteCost(formData)
        formMethods.setValue('quoteCost', quoteCost, { shouldDirty: true })
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
  }, [isSenior, formMethods])

  return { options: coverageOptions, formMethods, isSenior, handleBack, handleNext }
}
