import { renderHook } from '@testing-library/react'
import { AppRoutes } from 'core/enums'
import { QuoteCoverageStatus } from 'modules/quoteHub/enums'
import { useController } from './useController'

const { navigateMock, clearFormStateMock, useLocationMock } = vi.hoisted(() => ({
  navigateMock: vi.fn(),
  clearFormStateMock: vi.fn(),
  useLocationMock: vi.fn(),
}))

vi.mock('react-router-dom', () => ({
  useNavigate: () => navigateMock,
  useLocation: () => useLocationMock(),
}))

vi.mock('modules/quoteHub/utils', async () => {
  const actual =
    await vi.importActual<typeof import('modules/quoteHub/utils')>('modules/quoteHub/utils')

  return {
    ...actual,
    formPersistenceUtils: {
      ...actual.formPersistenceUtils,
      clearFormStateFromLocalStorage: clearFormStateMock,
    },
  }
})

describe('quoteSubmissionResult/useController', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('clears persistence and navigates home on success primary action', () => {
    useLocationMock.mockReturnValue({
      state: { status: QuoteCoverageStatus.Success },
    })

    const { result } = renderHook(() => useController())

    result.current.handlePrimaryAction()

    expect(clearFormStateMock).toHaveBeenCalledTimes(1)
    expect(navigateMock).toHaveBeenCalledWith(AppRoutes.Quote)
  })

  it('navigates to summary without clearing persistence on error primary action', () => {
    useLocationMock.mockReturnValue({
      state: { status: QuoteCoverageStatus.Error },
    })

    const { result } = renderHook(() => useController())

    result.current.handlePrimaryAction()

    expect(clearFormStateMock).not.toHaveBeenCalled()
    expect(navigateMock).toHaveBeenCalledWith(AppRoutes.QuoteSummary)
  })

  it('always clears persistence and navigates home on secondary action', () => {
    useLocationMock.mockReturnValue({
      state: { status: QuoteCoverageStatus.Error },
    })

    const { result } = renderHook(() => useController())

    result.current.handleSecondaryAction()

    expect(clearFormStateMock).toHaveBeenCalledTimes(1)
    expect(navigateMock).toHaveBeenCalledWith(AppRoutes.Quote)
  })
})
