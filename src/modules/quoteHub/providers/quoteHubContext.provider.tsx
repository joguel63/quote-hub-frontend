import { yupResolver } from '@hookform/resolvers/yup'
import { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { AppRoutes } from 'core/enums'
import { quoteHubContext } from '../contexts'
import { QuoteCoverageStatus } from '../enums'
import { quoteFormSchemas } from '../schemas/quoteForm.schema'
import { quoteServices } from '../services'
import { QuoteForm } from '../types'
import { formPersistenceUtils } from '../utils'

const stepsIndex = {
  [AppRoutes.QuotePersonalInformation]: 0,
  [AppRoutes.QuoteCoverage]: 1,
  [AppRoutes.QuoteSummary]: 2,
  [AppRoutes.QuoteResult]: 2,
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
  const localStageValues = formPersistenceUtils.getFormStateFromLocalStorage()
  const { pathname } = useLocation()
  const { createQuote } = quoteServices
  const navigate = useNavigate()
  const activeStep = stepsIndex[pathname as keyof typeof stepsIndex] ?? 0
  const schema = quoteFormSchemas[activeStep] as yup.AnyObjectSchema

  const formMethods = useForm<QuoteForm>({
    resolver: yupResolver(schema),
    defaultValues: localStageValues || defaultValues,
  })

  const updateFormState = () => {
    const currentValues = formMethods.getValues()
    formPersistenceUtils.saveFormStateToLocalStorage(currentValues)
  }
  const contextValue = useMemo(() => ({ activeStep, updateFormState }), [activeStep])

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
