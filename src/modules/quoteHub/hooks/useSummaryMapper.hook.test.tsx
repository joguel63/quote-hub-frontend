import { renderHook } from '@testing-library/react'
import { CoverageValues } from '../enums'
import { useSummaryMapper } from './useSummaryMapper.hook'

const { getValuesMock, translationMock, coverageOptionsRef, formContextRef } = vi.hoisted(() => ({
  getValuesMock: vi.fn(),
  translationMock: vi.fn((key: string) => key),
  formContextRef: {
    current: {
      getValues: vi.fn(),
    },
  },
  coverageOptionsRef: {
    current: [
      {
        value: 2,
        title: 'quoteHub.coverage.plans.standard.title',
        description: 'quoteHub.coverage.plans.standard.description',
        recommended: true,
      },
    ],
  },
}))

vi.mock('react-hook-form', () => ({
  useFormContext: () => formContextRef.current,
}))

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: translationMock,
  }),
}))

vi.mock('./contexts', () => ({
  useQuoteHubContext: () => ({
    coverageOptions: coverageOptionsRef.current,
  }),
}))

vi.mock('i18next', () => ({
  t: (key: string) => key,
}))

describe('useSummaryMapper', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    formContextRef.current = { getValues: getValuesMock }
    coverageOptionsRef.current = [
      {
        value: 2,
        title: 'quoteHub.coverage.plans.standard.title',
        description: 'quoteHub.coverage.plans.standard.description',
        recommended: true,
      },
    ]
  })

  it('maps personal and coverage summary values from the current form state', () => {
    getValuesMock.mockReturnValue({
      fullName: 'Jane Doe',
      email: 'jane@example.com',
      age: 65,
      zipCode: '90210',
      coverageType: CoverageValues.Standard,
      hasPreexistingConditions: true,
      preexistingConditions: [{ label: 'Diabetes', value: 'diabetes' }],
      hasPrescriptions: true,
      isSmoker: false,
      hasSpouse: true,
    })

    const { result } = renderHook(() => useSummaryMapper())

    expect(result.current.quoteSummary.personalInformationSummary).toEqual([
      { label: 'quoteHub.summary.fullName', value: 'Jane Doe' },
      { label: 'quoteHub.summary.email', value: 'jane@example.com' },
      { label: 'quoteHub.summary.age', value: 65 },
      { label: 'quoteHub.summary.zipCode', value: '90210' },
    ])

    expect(result.current.quoteSummary.coverageSummary).toEqual([
      {
        label: 'quoteHub.summary.coverageType',
        value: 'quoteHub.coverage.plans.standard.title',
      },
      { label: 'quoteHub.summary.hasPreexistingConditions', value: 'quoteHub.common.yes' },
      { label: 'quoteHub.summary.existingConditions', value: ['Diabetes'] },
      { label: 'quoteHub.summary.hasPrescriptions', value: 'quoteHub.common.yes' },
      { label: 'quoteHub.summary.isSmoker', value: 'quoteHub.common.no' },
      { label: 'quoteHub.summary.hasSpouse', value: 'quoteHub.common.yes' },
    ])
  })

  it('falls back to empty values when coverage and conditions are missing', () => {
    getValuesMock.mockReturnValue({
      fullName: 'Jane Doe',
      email: 'jane@example.com',
      age: 30,
      zipCode: '90210',
      coverageType: 999,
      hasPreexistingConditions: false,
      preexistingConditions: undefined,
      hasPrescriptions: false,
      isSmoker: false,
      hasSpouse: false,
    })

    const { result } = renderHook(() => useSummaryMapper())

    expect(result.current.quoteSummary.coverageSummary[0]).toEqual({
      label: 'quoteHub.summary.coverageType',
      value: '',
    })

    expect(result.current.quoteSummary.coverageSummary[2]).toEqual({
      label: 'quoteHub.summary.existingConditions',
      value: [],
    })
  })

  it('updates coverage title when coverage options change after rerender', () => {
    getValuesMock.mockReturnValue({
      fullName: 'Jane Doe',
      email: 'jane@example.com',
      age: 65,
      zipCode: '90210',
      coverageType: CoverageValues.Standard,
      hasPreexistingConditions: false,
      preexistingConditions: [],
      hasPrescriptions: false,
      isSmoker: false,
      hasSpouse: false,
    })

    const { result, rerender } = renderHook(() => useSummaryMapper())

    expect(result.current.quoteSummary.coverageSummary[0]).toEqual({
      label: 'quoteHub.summary.coverageType',
      value: 'quoteHub.coverage.plans.standard.title',
    })

    coverageOptionsRef.current = [
      {
        value: CoverageValues.Standard,
        title: 'quoteHub.coverage.plans.standard.title.en',
        description: 'quoteHub.coverage.plans.standard.description.en',
        recommended: true,
      },
    ]

    rerender()

    expect(result.current.quoteSummary.coverageSummary[0]).toEqual({
      label: 'quoteHub.summary.coverageType',
      value: 'quoteHub.coverage.plans.standard.title.en',
    })
  })
})
