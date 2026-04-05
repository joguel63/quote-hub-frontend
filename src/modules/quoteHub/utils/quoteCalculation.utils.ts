import { CoverageBaseCosts, CoverageValues, QuoteFormulaMultipliers } from '../enums'
import { QuoteForm } from '../types'
import { getIsSenior } from './age.utils'

const baseCosts: Record<CoverageValues, CoverageBaseCosts> = {
  [CoverageValues.Basic]: CoverageBaseCosts.Basic,
  [CoverageValues.Standard]: CoverageBaseCosts.Standard,
  [CoverageValues.Premium]: CoverageBaseCosts.Premium,
}

/**
 * Applies the necessary multipliers to the base cost if the user is a senior, based on their form data.
 * @param cost The initial cost based on the selected coverage type.
 * @param formData The complete form data, used to determine which multipliers to apply based on the user's profile.
 * @returns The final calculated cost after applying all relevant multipliers for a senior user.
 */
const applySeniorMultipliers = (cost: number, formData: QuoteForm): number => {
  const { hasPreexistingConditions, isSmoker, hasSpouse } = formData
  let finalCost = cost * QuoteFormulaMultipliers.IsSenior

  if (hasPreexistingConditions) finalCost *= QuoteFormulaMultipliers.HasPreexistingConditions
  if (isSmoker) finalCost *= QuoteFormulaMultipliers.IsSmoker
  if (hasSpouse) finalCost *= QuoteFormulaMultipliers.HasSpouse

  return finalCost
}

/**
 * Calculates the total quote cost based on the user's form data, including their age and selected coverage type. If the user is a senior, it applies additional multipliers to the base cost.
 * @param formData The complete form data from which to calculate the quote cost, including age, coverage type, and other relevant factors for seniors.
 * @returns The final calculated quote cost based on the user's profile and selected coverage.
 */
export const calculateQuoteCost = (formData: QuoteForm): number => {
  const { age, coverageType } = formData
  const baseCost = baseCosts[coverageType]
  const isSenior = getIsSenior(age)

  if (isSenior) return applySeniorMultipliers(baseCost, formData)
  return baseCost
}
