import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AppRoutes } from 'core/enums'
import { QuoteCoverageStatus } from 'modules/quoteHub/enums'
import { QuoteSubmissionResult } from './index'

const { handlePrimaryActionMock, handleSecondaryActionMock, statusRef } = vi.hoisted(() => ({
  handlePrimaryActionMock: vi.fn(),
  handleSecondaryActionMock: vi.fn(),
  statusRef: { current: undefined as QuoteCoverageStatus | undefined },
}))

vi.mock('./useController', () => ({
  useController: () => ({
    status: statusRef.current,
    handlePrimaryAction: handlePrimaryActionMock,
    handleSecondaryAction: handleSecondaryActionMock,
  }),
}))

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom')

  return {
    ...actual,
    Navigate: ({ to }: { to: string }) => <div>navigate:{to}</div>,
  }
})

describe('QuoteSubmissionResult', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    statusRef.current = undefined
  })

  it('redirects to quote home when status is missing', () => {
    render(<QuoteSubmissionResult />)

    expect(screen.getByText(`navigate:${AppRoutes.Quote}`)).toBeInTheDocument()
  })

  it('renders success content and triggers primary action', async () => {
    statusRef.current = QuoteCoverageStatus.Success
    const user = userEvent.setup()

    render(<QuoteSubmissionResult />)

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByText('quoteHub.result.success.title')).toBeInTheDocument()
    expect(screen.getByText('quoteHub.result.success.description')).toBeInTheDocument()

    const primaryButton = screen.getByRole('button', {
      name: 'quoteHub.result.actions.primarySuccess',
    })

    expect(
      screen.queryByRole('button', { name: 'quoteHub.result.actions.secondarySuccess' }),
    ).not.toBeInTheDocument()

    await user.click(primaryButton)

    expect(handlePrimaryActionMock).toHaveBeenCalledTimes(1)
  })

  it('renders error content and triggers both actions', async () => {
    statusRef.current = QuoteCoverageStatus.Error
    const user = userEvent.setup()

    render(<QuoteSubmissionResult />)

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByText('quoteHub.result.error.title')).toBeInTheDocument()
    expect(screen.getByText('quoteHub.result.error.description')).toBeInTheDocument()

    const primaryButton = screen.getByRole('button', {
      name: 'quoteHub.result.actions.primaryError',
    })
    const secondaryButton = screen.getByRole('button', {
      name: 'quoteHub.result.actions.secondaryError',
    })

    await user.click(primaryButton)
    await user.click(secondaryButton)

    expect(handlePrimaryActionMock).toHaveBeenCalledTimes(1)
    expect(handleSecondaryActionMock).toHaveBeenCalledTimes(1)
  })
})
