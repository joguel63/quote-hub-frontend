import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import ResultPage from './index'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

vi.mock('modules/quoteHub/components', async () => {
  const actual = await vi.importActual<typeof import('modules/quoteHub/components')>(
    'modules/quoteHub/components',
  )

  return {
    ...actual,
    QuoteSubmissionResult: () => <div>quote-submission-result</div>,
  }
})

vi.mock('core/components', async () => {
  const actual = await vi.importActual<typeof import('core/components')>('core/components')

  return {
    ...actual,
    AnimatedContainer: ({ children }: React.PropsWithChildren) => <div>{children}</div>,
  }
})

const renderWithRouter = (state?: { status?: 'success' | 'error' }) =>
  render(
    <MemoryRouter initialEntries={[{ pathname: '/quote/result', state }]}>
      <Routes>
        <Route path="/quote" element={<div>quote-home</div>} />
        <Route path="/quote/result" element={<ResultPage />} />
      </Routes>
    </MemoryRouter>,
  )

describe('pages/result', () => {
  it('redirects to quote home when status is missing', () => {
    renderWithRouter()

    expect(screen.getByText('quote-home')).toBeInTheDocument()
  })

  it('renders success content when status is success', () => {
    renderWithRouter({ status: 'success' })

    expect(screen.getByText('quoteHub.result.success.title')).toBeInTheDocument()
    expect(screen.getByText('quoteHub.result.success.description')).toBeInTheDocument()
    expect(screen.getByText('quote-submission-result')).toBeInTheDocument()
  })

  it('renders error content when status is error', () => {
    renderWithRouter({ status: 'error' })

    expect(screen.getByText('quoteHub.result.error.title')).toBeInTheDocument()
    expect(screen.getByText('quoteHub.result.error.description')).toBeInTheDocument()
    expect(screen.getByText('quote-submission-result')).toBeInTheDocument()
  })
})
