import { createContext } from 'react'
import { type QuoteHubContextType } from '../types'

export const quoteHubContext = createContext<QuoteHubContextType>({
  activeStep: 0,
  updateFormState: () => {},
  coverageOptions: [],
})
