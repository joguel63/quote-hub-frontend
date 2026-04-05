import { render, screen } from '@testing-library/react'
import { QuoteHighlightCard } from './index'

const { formatCurrencyMock, quoteCostRef } = vi.hoisted(() => ({
  formatCurrencyMock: vi.fn(() => '$275'),
  quoteCostRef: { current: 275 },
}))

vi.mock('react-hook-form', () => ({
  useFormContext: () => ({ control: {} }),
  useWatch: () => quoteCostRef.current,
}))

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

vi.mock('core/utils', async () => {
  const actual = await vi.importActual<typeof import('core/utils')>('core/utils')

  return {
    ...actual,
    formatters: {
      ...actual.formatters,
      formatCurrency: formatCurrencyMock,
    },
  }
})

describe('QuoteHighlightCard', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    quoteCostRef.current = 275
  })

  it('renders the quote label, formatted amount and suffix', () => {
    render(<QuoteHighlightCard />)

    expect(screen.getByText('quoteHub.stepThree.finalMonthlyQuote')).toBeInTheDocument()
    expect(screen.getByText('$275')).toBeInTheDocument()
    expect(screen.getByText('quoteHub.stepThree.monthly')).toBeInTheDocument()
    expect(formatCurrencyMock).toHaveBeenCalledWith(275)
  })
})
