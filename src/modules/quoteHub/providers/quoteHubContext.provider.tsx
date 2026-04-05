import { yupResolver } from '@hookform/resolvers/yup'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import * as yup from 'yup'

import { AppRoutes } from 'core/enums'
import { quoteHubContext } from '../contexts'
import { quoteFormSchemas } from '../schemas/quoteForm.schema'
import { QuoteForm } from '../types'

const stepsIndex = {
  [AppRoutes.QuotePersonalInformation]: 0,
  [AppRoutes.QuoteCoverage]: 1,
  [AppRoutes.QuoteSummary]: 2,
}

export const QuoteHubContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { pathname } = useLocation()
  const activeStep = stepsIndex[pathname as keyof typeof stepsIndex] ?? 0
  const schema = quoteFormSchemas[activeStep] as yup.AnyObjectSchema

  const formMethods = useForm<QuoteForm>({
    resolver: yupResolver(schema),
    defaultValues: {
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
    },
  })

  const contextValue = useMemo(() => ({ activeStep, formMethods }), [activeStep, formMethods])

  return <quoteHubContext.Provider value={contextValue}>{children}</quoteHubContext.Provider>
}
