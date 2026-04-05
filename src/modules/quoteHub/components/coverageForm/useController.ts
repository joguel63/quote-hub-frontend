import { AppRoutes } from 'core/enums'
import { CoverageValues } from 'modules/quoteHub/enums'
import { useQuoteHubContext } from 'modules/quoteHub/hooks'
import { useEffect } from 'react'
import { useWatch } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const SENIOR_AGE_THRESHOLD = 65

export const useController = () => {
  const { formMethods } = useQuoteHubContext()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const age = useWatch({ control: formMethods.control, name: 'age' })
  const isSenior = age >= SENIOR_AGE_THRESHOLD

  const options = [
    {
      value: CoverageValues.Basic,
      title: t('quoteHub.coverage.plans.basic.title'),
      description: t('quoteHub.coverage.plans.basic.description'),
      recommended: false,
    },
    {
      value: CoverageValues.Standard,
      title: t('quoteHub.coverage.plans.standard.title'),
      description: t('quoteHub.coverage.plans.standard.description'),
      recommended: true,
    },
    {
      value: CoverageValues.Premium,
      title: t('quoteHub.coverage.plans.premium.title'),
      description: t('quoteHub.coverage.plans.premium.description'),
      recommended: false,
    },
  ]

  const handleBack = () => navigate(AppRoutes.QuotePersonalInformation)

  const handleNext = () => {
    formMethods.trigger().then((isValid) => {
      if (isValid) navigate(AppRoutes.QuoteSummary)
    })
  }

  const resetSeniorFields = () => {
    const { age, coverageType, email, fullName, zipCode } = formMethods.getValues()
    formMethods.reset({ age, coverageType, email, fullName, zipCode })
  }

  useEffect(() => {
    if (!isSenior) resetSeniorFields()
  }, [isSenior, formMethods])

  return { formMethods, options, isSenior, handleBack, handleNext }
}
