import { QuoteForm } from '../types'
import { mockApiResponse } from 'core/utils'

type CreateQuoteRequest = QuoteForm & { quoteCost: number }
const createQuote = async (quoteData: CreateQuoteRequest) => {
  return await mockApiResponse(quoteData, { delay: 1000 })
}

export const quoteServices = { createQuote }
