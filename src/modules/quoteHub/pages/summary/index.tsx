import { Button, Stack } from '@mui/material'
import { AnimatedContainer } from 'core/components'
import { AppRoutes } from 'core/enums'
import { SectionHeader } from 'modules/quoteHub/components'
import { CoverageBaseCosts, CoverageValues, QuoteFormulaMultipliers } from 'modules/quoteHub/enums'
import { useQuoteHubContext } from 'modules/quoteHub/hooks'
import { QuoteForm } from 'modules/quoteHub/types'
import { getIsSenior } from 'modules/quoteHub/utils'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const baseCosts: Record<CoverageValues, CoverageBaseCosts> = {
  [CoverageValues.Basic]: CoverageBaseCosts.Basic,
  [CoverageValues.Standard]: CoverageBaseCosts.Standard,
  [CoverageValues.Premium]: CoverageBaseCosts.Premium,
}
const applyMultipliers = (cost: number, formData: QuoteForm): number => {
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

  if (isSenior) return applyMultipliers(baseCost, formData)
  return baseCost
}
const SummaryPage: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { formMethods } = useQuoteHubContext()

  console.log(calculateQuoteCost(formMethods.getValues()))

  const handleBack = () => {
    navigate(AppRoutes.QuoteCoverage)
  }

  const handleNext = () => {
    // navigate to the next page or perform any action needed
  }
  return (
    <AnimatedContainer>
      <Stack spacing={4}>
        <SectionHeader
          title={t('quoteHub.stepThree.title')}
          description={t('quoteHub.stepThree.description')}
        />
        <Button variant="contained" color="primary" onClick={handleBack}>
          {t('quoteHub.common.back')}
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          {t('quoteHub.common.next')}
        </Button>
      </Stack>
    </AnimatedContainer>
  )
}

export default SummaryPage
