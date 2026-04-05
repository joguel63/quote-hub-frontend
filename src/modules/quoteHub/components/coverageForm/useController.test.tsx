import { renderHook } from '@testing-library/react'
import { AppRoutes } from 'core/enums'
import { CoverageValues } from 'modules/quoteHub/enums'
import { useController } from './useController'

const {
  navigateMock,
  updateFormStateMock,
  triggerMock,
  setValueMock,
  getValuesMock,
  resetMock,
  ageValue,
} = vi.hoisted(() => ({
  navigateMock: vi.fn(),
  updateFormStateMock: vi.fn(),
  triggerMock: vi.fn(),
  setValueMock: vi.fn(),
  getValuesMock: vi.fn(),
  resetMock: vi.fn(),
  ageValue: { current: 65 },
}))

vi.mock('react-router-dom', () => ({
  useNavigate: () => navigateMock,
}))

vi.mock('modules/quoteHub/hooks', () => ({
  useQuoteHubContext: () => ({ updateFormState: updateFormStateMock }),
}))

vi.mock('react-hook-form', () => ({
  useFormContext: () => ({
    control: {},
    trigger: triggerMock,
    setValue: setValueMock,
    getValues: getValuesMock,
    reset: resetMock,
  }),
  useWatch: () => ageValue.current,
}))

vi.mock('modules/quoteHub/utils', async () => {
  const actual =
    await vi.importActual<typeof import('modules/quoteHub/utils')>('modules/quoteHub/utils')

  return {
    ...actual,
    calculateQuoteCost: vi.fn(() => 275),
  }
})

describe('coverageForm/useController', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    ageValue.current = 65
    getValuesMock.mockReturnValue({
      fullName: 'John Doe',
      email: 'john@example.com',
      age: 65,
      zipCode: '12345',
      coverageType: CoverageValues.Basic,
      hasPreexistingConditions: true,
      preexistingConditions: [],
      hasPrescriptions: true,
      isSmoker: false,
      hasSpouse: true,
      quoteCost: 0,
    })
  })

  it('navigates back to personal information', () => {
    const { result } = renderHook(() => useController())

    result.current.handleBack()

    expect(navigateMock).toHaveBeenCalledWith(AppRoutes.QuotePersonalInformation)
  })

  it('does not update quote or navigate when validation fails', async () => {
    triggerMock.mockResolvedValue(false)

    const { result } = renderHook(() => useController())

    result.current.handleNext()
    await Promise.resolve()

    expect(setValueMock).not.toHaveBeenCalled()
    expect(updateFormStateMock).not.toHaveBeenCalled()
    expect(navigateMock).not.toHaveBeenCalledWith(AppRoutes.QuoteSummary)
  })

  it('calculates quote, persists state and navigates to summary when validation passes', async () => {
    triggerMock.mockResolvedValue(true)

    const { result } = renderHook(() => useController())

    result.current.handleNext()
    await Promise.resolve()

    expect(setValueMock).toHaveBeenCalledWith('quoteCost', 275, { shouldDirty: true })
    expect(updateFormStateMock).toHaveBeenCalledTimes(1)
    expect(navigateMock).toHaveBeenCalledWith(AppRoutes.QuoteSummary)
  })

  it('resets senior-only fields when applicant is no longer senior', () => {
    ageValue.current = 64

    renderHook(() => useController())

    expect(resetMock).toHaveBeenCalledWith({
      age: 65,
      coverageType: CoverageValues.Basic,
      email: 'john@example.com',
      fullName: 'John Doe',
      zipCode: '12345',
      quoteCost: 0,
    })
  })
})
