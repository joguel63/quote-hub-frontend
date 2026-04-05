import { renderHook } from '@testing-library/react'
import { AppRoutes } from 'core/enums'
import { useController } from './useController'

const navigateMock = vi.fn()
const updateFormStateMock = vi.fn()
const triggerMock = vi.fn()

vi.mock('react-router-dom', () => ({
  useNavigate: () => navigateMock,
}))

vi.mock('modules/quoteHub/hooks', () => ({
  useQuoteHubContext: () => ({ updateFormState: updateFormStateMock }),
}))

vi.mock('react-hook-form', () => ({
  useFormContext: () => ({ trigger: triggerMock }),
}))

describe('pesonalInformationForm/useController', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('does not persist or navigate when validation fails', async () => {
    triggerMock.mockResolvedValue(false)

    const { result } = renderHook(() => useController())

    result.current.handleNext()
    await Promise.resolve()

    expect(updateFormStateMock).not.toHaveBeenCalled()
    expect(navigateMock).not.toHaveBeenCalled()
  })

  it('persists form state and navigates to coverage when validation passes', async () => {
    triggerMock.mockResolvedValue(true)

    const { result } = renderHook(() => useController())

    result.current.handleNext()
    await Promise.resolve()

    expect(updateFormStateMock).toHaveBeenCalledTimes(1)
    expect(navigateMock).toHaveBeenCalledWith(AppRoutes.QuoteCoverage)
  })
})
