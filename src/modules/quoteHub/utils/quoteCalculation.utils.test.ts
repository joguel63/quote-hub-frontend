import { CoverageBaseCosts, CoverageValues, QuoteFormulaMultipliers } from '../enums'
import { type QuoteForm } from '../types'
import { calculateQuoteCost } from './quoteCalculation.utils'

const createFormData = (overrides: Partial<QuoteForm> = {}): QuoteForm => ({
  fullName: 'John Doe',
  email: 'john@example.com',
  age: 30,
  zipCode: '12345',
  coverageType: CoverageValues.Basic,
  hasPreexistingConditions: false,
  preexistingConditions: [],
  hasPrescriptions: false,
  isSmoker: false,
  hasSpouse: false,
  quoteCost: 0,
  ...overrides,
})

describe('calculateQuoteCost', () => {
  it('returns the base cost for basic coverage when applicant is not senior', () => {
    expect(calculateQuoteCost(createFormData({ coverageType: CoverageValues.Basic }))).toBe(
      CoverageBaseCosts.Basic,
    )
  })

  it('returns the base cost for standard coverage when applicant is not senior', () => {
    expect(calculateQuoteCost(createFormData({ coverageType: CoverageValues.Standard }))).toBe(
      CoverageBaseCosts.Standard,
    )
  })

  it('returns the base cost for premium coverage when applicant is not senior', () => {
    expect(calculateQuoteCost(createFormData({ coverageType: CoverageValues.Premium }))).toBe(
      CoverageBaseCosts.Premium,
    )
  })

  it('applies the senior multiplier when applicant is 65', () => {
    expect(calculateQuoteCost(createFormData({ age: 65 }))).toBe(
      CoverageBaseCosts.Basic * QuoteFormulaMultipliers.IsSenior,
    )
  })

  it('applies all extra senior multipliers when conditions match', () => {
    expect(
      calculateQuoteCost(
        createFormData({
          age: 70,
          hasPreexistingConditions: true,
          isSmoker: true,
          hasSpouse: true,
        }),
      ),
    ).toBe(
      CoverageBaseCosts.Basic *
        QuoteFormulaMultipliers.IsSenior *
        QuoteFormulaMultipliers.HasPreexistingConditions *
        QuoteFormulaMultipliers.IsSmoker *
        QuoteFormulaMultipliers.HasSpouse,
    )
  })
})
