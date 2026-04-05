import { CoverageBaseCosts, CoverageValues, QuoteFormulaMultipliers } from 'modules/quoteHub/enums'
import { useQuoteHubContext } from 'modules/quoteHub/hooks'
import { QuoteForm } from 'modules/quoteHub/types'
import { getIsSenior } from 'modules/quoteHub/utils'
import { useMemo } from 'react'
import { type UseQuoteCalculationReturn } from '../types'

const baseCosts: Record<CoverageValues, CoverageBaseCosts> = {
  [CoverageValues.Basic]: CoverageBaseCosts.Basic,
  [CoverageValues.Standard]: CoverageBaseCosts.Standard,
  [CoverageValues.Premium]: CoverageBaseCosts.Premium,
}

const applySeniorMultipliers = (cost: number, formData: QuoteForm): number => {
  const { hasPreexistingConditions, isSmoker, hasSpouse } = formData
  let finalCost = cost * QuoteFormulaMultipliers.IsSenior

  if (hasPreexistingConditions) finalCost *= QuoteFormulaMultipliers.HasPreexistingConditions
  if (isSmoker) finalCost *= QuoteFormulaMultipliers.IsSmoker
  if (hasSpouse) finalCost *= QuoteFormulaMultipliers.HasSpouse

  return finalCost
}

const calculateQuoteCost = (formData: QuoteForm): number => {
  const { age, coverageType } = formData
  const baseCost = baseCosts[coverageType]
  const isSenior = getIsSenior(age)

  if (isSenior) return applySeniorMultipliers(baseCost, formData)
  return baseCost
}

export const useQuoteCalculation = (): UseQuoteCalculationReturn => {
  const { formMethods } = useQuoteHubContext()

  const quoteCost = useMemo(() => {
    const formData = formMethods.getValues()
    const amount = calculateQuoteCost(formData)
    return amount
  }, [formMethods])

  return { quoteCost }
}
