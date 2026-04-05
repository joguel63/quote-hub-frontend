import { t } from 'i18next'
import { CoverageValues } from './coverageValues.enum'

export const coverageOptions = [
  {
    value: CoverageValues.Basic,
    title: t('quoteHub.coverage.plans.basic.title'),
    description: t('quoteHub.coverage.plans.basic.description'),
    recommended: false,
  },
  {
    value: CoverageValues.Standard,
    title: t('quoteHub.coverage.plans.standard.title'),
    description: t('quoteHub.coverage.plans.standard.description'),
    recommended: true,
  },
  {
    value: CoverageValues.Premium,
    title: t('quoteHub.coverage.plans.premium.title'),
    description: t('quoteHub.coverage.plans.premium.description'),
    recommended: false,
  },
]
