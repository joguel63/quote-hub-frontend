import { createContext } from 'react'
import { type QuoteHubContextType } from '../types'

// Create the context here
export const quoteHubContext = createContext<QuoteHubContextType>({
  activeStep: 0,
  formMethods: {} as QuoteHubContextType['formMethods'],
})
