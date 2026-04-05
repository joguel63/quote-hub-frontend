import { mockApiResponse } from 'core/utils'
import { QuoteForm } from '../types'

const createQuote = async (quoteData: QuoteForm) => {
  return await mockApiResponse<QuoteForm>(quoteData, { delay: 1000 })
}

export const quoteServices = { createQuote }
