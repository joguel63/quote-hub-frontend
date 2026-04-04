import { useContext } from 'react'
import { quoteHubContext } from '../../contexts'
import { QuoteHubContextType } from '../../types'

export const useQuoteHubContext = (): QuoteHubContextType => {
  const context = useContext(quoteHubContext)
  if (!context) {
    throw new Error('useQuoteHubContext must be used within a quoteHubContextProvider')
  }

  return context
}
