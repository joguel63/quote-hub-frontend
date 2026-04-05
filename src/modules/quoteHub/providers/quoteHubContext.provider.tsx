import { yupResolver } from '@hookform/resolvers/yup'
import { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { AppRoutes } from 'core/enums'
import { quoteHubContext } from '../contexts'
import { CoverageValues, QuoteCoverageStatus } from '../enums'
import { quoteFormSchemas } from '../schemas/quoteForm.schema'
import { quoteServices } from '../services'
import { QuoteForm } from '../types'
import { formPersistenceUtils } from '../utils'
import { useTranslation } from 'react-i18next'

const stepsIndex = {
  [AppRoutes.QuotePersonalInformation]: 0,
  [AppRoutes.QuoteCoverage]: 1,
  [AppRoutes.QuoteSummary]: 2,
}

const defaultValues = {
  fullName: '',
  email: '',
  age: undefined,
  zipCode: '',
  coverageType: undefined,
  hasPreexistingConditions: false,
  preexistingConditions: [],
  hasPrescriptions: false,
  isSmoker: false,
  hasSpouse: false,
  quoteCost: 0,
}

export const QuoteHubContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { t } = useTranslation()
  const localStageValues = formPersistenceUtils.getFormStateFromLocalStorage()
  const { pathname } = useLocation()
  const { createQuote } = quoteServices
  const navigate = useNavigate()
  const activeStep = stepsIndex[pathname as keyof typeof stepsIndex] ?? 0
  const schema = quoteFormSchemas[activeStep] as yup.AnyObjectSchema

  const coverageOptions = [
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

  const formMethods = useForm<QuoteForm>({
    resolver: yupResolver(schema),
    defaultValues: localStageValues || defaultValues,
  })

  const updateFormState = () => {
    const currentValues = formMethods.getValues()
    formPersistenceUtils.saveFormStateToLocalStorage(currentValues)
  }
  const contextValue = useMemo(() => ({ activeStep, updateFormState, coverageOptions }), [activeStep])

  const onSubmit = async (data: QuoteForm) => {
    try {
      await createQuote(data)
      navigate(AppRoutes.QuoteResult, { state: { status: QuoteCoverageStatus.Success } })
    } catch (error) {
      console.error('Error creating quote:', error)
      navigate(AppRoutes.QuoteResult, { state: { status: QuoteCoverageStatus.Error } })
    }
  }

  return (
    <quoteHubContext.Provider value={contextValue}>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </quoteHubContext.Provider>
  )
}
