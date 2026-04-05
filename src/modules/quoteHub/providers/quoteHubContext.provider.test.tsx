import React from 'react'
import { Button } from '@mui/material'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AppRoutes } from 'core/enums'
import { QuoteCoverageStatus, CoverageValues } from 'modules/quoteHub/enums'
import { useFormContext } from 'react-hook-form'
import { quoteHubContext } from '../contexts'
import { QuoteHubContextProvider } from './quoteHubContext.provider'

const { navigateMock, getPersistedStateMock, saveFormStateMock, createQuoteMock, pathnameState } =
  vi.hoisted(() => ({
    navigateMock: vi.fn(),
    getPersistedStateMock: vi.fn(),
    saveFormStateMock: vi.fn(),
    createQuoteMock: vi.fn(),
    pathnameState: { current: '/quote/personal-information' },
  }))

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom')

  return {
    ...actual,
    useNavigate: () => navigateMock,
    useLocation: () => ({ pathname: pathnameState.current }),
  }
})

vi.mock('../services', () => ({
  quoteServices: {
    createQuote: createQuoteMock,
  },
}))

vi.mock('../utils', async () => {
  const actual = await vi.importActual<typeof import('../utils')>('../utils')

  return {
    ...actual,
    formPersistenceUtils: {
      ...actual.formPersistenceUtils,
      getFormStateFromLocalStorage: getPersistedStateMock,
      saveFormStateToLocalStorage: saveFormStateMock,
    },
  }
})

const Probe = () => {
  const context = React.useContext(quoteHubContext)
  const formMethods = useFormContext()

  return (
    <>
      <div data-testid="active-step">{context.activeStep}</div>
      <div data-testid="full-name">{String(formMethods.getValues('fullName'))}</div>
      <div data-testid="email">{String(formMethods.getValues('email'))}</div>
      <div data-testid="zip-code">{String(formMethods.getValues('zipCode'))}</div>
      <Button
        type="button"
        onClick={() => {
          formMethods.setValue('fullName', 'Saved Name')
          formMethods.setValue('email', 'saved@example.com')
          formMethods.setValue('zipCode', '90210')
          formMethods.setValue('age', 65)
          formMethods.setValue('coverageType', CoverageValues.Standard)
          formMethods.setValue('hasPreexistingConditions', false)
          formMethods.setValue('hasPrescriptions', false)
          formMethods.setValue('isSmoker', false)
          formMethods.setValue('hasSpouse', false)
          formMethods.setValue('quoteCost', 150)
        }}
      >
        fill
      </Button>
      <Button type="button" onClick={() => context.updateFormState()}>
        persist
      </Button>
      <Button type="submit">submit</Button>
    </>
  )
}

const renderProvider = () =>
  render(
    <QuoteHubContextProvider>
      <Probe />
    </QuoteHubContextProvider>,
  )

describe('quoteHubContext.provider', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    pathnameState.current = AppRoutes.QuotePersonalInformation
    getPersistedStateMock.mockReturnValue(null)
  })

  it('uses provider defaults and exposes the active step for the current route', () => {
    pathnameState.current = AppRoutes.QuoteCoverage

    renderProvider()

    expect(screen.getByTestId('active-step')).toHaveTextContent('1')
    expect(screen.getByTestId('full-name')).toHaveTextContent('')
    expect(screen.getByTestId('email')).toHaveTextContent('')
    expect(screen.getByTestId('zip-code')).toHaveTextContent('')
  })

  it('initializes the form from persisted local storage values', () => {
    getPersistedStateMock.mockReturnValue({
      fullName: 'Persisted User',
      email: 'persisted@example.com',
      age: 65,
      zipCode: '10001',
      coverageType: CoverageValues.Basic,
      hasPreexistingConditions: false,
      preexistingConditions: [],
      hasPrescriptions: false,
      isSmoker: false,
      hasSpouse: false,
      quoteCost: 50,
    })

    renderProvider()

    expect(screen.getByTestId('full-name')).toHaveTextContent('Persisted User')
    expect(screen.getByTestId('email')).toHaveTextContent('persisted@example.com')
    expect(screen.getByTestId('zip-code')).toHaveTextContent('10001')
  })

  it('persists current form values through updateFormState', async () => {
    const user = userEvent.setup()

    renderProvider()

    await user.click(screen.getByRole('button', { name: 'fill' }))
    await user.click(screen.getByRole('button', { name: 'persist' }))

    expect(saveFormStateMock).toHaveBeenCalledWith(
      expect.objectContaining({
        fullName: 'Saved Name',
        email: 'saved@example.com',
        zipCode: '90210',
        age: 65,
        coverageType: CoverageValues.Standard,
        quoteCost: 150,
      }),
    )
  })

  it('navigates to result success after a successful submit', async () => {
    pathnameState.current = AppRoutes.QuoteSummary
    createQuoteMock.mockResolvedValue({ ok: true })
    getPersistedStateMock.mockReturnValue({
      fullName: 'Persisted User',
      email: 'persisted@example.com',
      age: 65,
      zipCode: '10001',
      coverageType: CoverageValues.Basic,
      hasPreexistingConditions: false,
      preexistingConditions: [],
      hasPrescriptions: false,
      isSmoker: false,
      hasSpouse: false,
      quoteCost: 50,
    })

    const user = userEvent.setup()
    renderProvider()

    await user.click(screen.getByRole('button', { name: 'submit' }))

    await waitFor(() => {
      expect(createQuoteMock).toHaveBeenCalledWith(
        expect.objectContaining({
          fullName: 'Persisted User',
          email: 'persisted@example.com',
          quoteCost: 50,
        }),
      )
    })

    expect(navigateMock).toHaveBeenCalledWith(AppRoutes.QuoteResult, {
      state: { status: QuoteCoverageStatus.Success },
    })
  })

  it('navigates to result error after a failed submit', async () => {
    pathnameState.current = AppRoutes.QuoteSummary
    createQuoteMock.mockRejectedValue(new Error('submit failed'))
    getPersistedStateMock.mockReturnValue({
      fullName: 'Persisted User',
      email: 'persisted@example.com',
      age: 65,
      zipCode: '10001',
      coverageType: CoverageValues.Basic,
      hasPreexistingConditions: false,
      preexistingConditions: [],
      hasPrescriptions: false,
      isSmoker: false,
      hasSpouse: false,
      quoteCost: 50,
    })

    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const user = userEvent.setup()
    renderProvider()

    await user.click(screen.getByRole('button', { name: 'submit' }))

    await waitFor(() => {
      expect(navigateMock).toHaveBeenCalledWith(AppRoutes.QuoteResult, {
        state: { status: QuoteCoverageStatus.Error },
      })
    })

    errorSpy.mockRestore()
  })
})
