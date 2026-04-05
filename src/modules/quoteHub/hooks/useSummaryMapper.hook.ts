import { formatters } from 'core/utils'
import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { QuoteForm, type UseSummaryMapperReturn } from '../types'
import { useQuoteHubContext } from './contexts'

export const useSummaryMapper = (): UseSummaryMapperReturn => {
  const formMethods = useFormContext<QuoteForm>()
  const { coverageOptions } = useQuoteHubContext()
  const { t } = useTranslation()

  const quoteSummary = useMemo(() => {
    const {
      age,
      email,
      fullName,
      zipCode,
      coverageType,
      hasPreexistingConditions,
      hasPrescriptions,
      isSmoker,
      hasSpouse,
      preexistingConditions,
    } = formMethods.getValues()

    const personalInformationSummary = [
      { label: t('quoteHub.summary.fullName'), value: fullName },
      { label: t('quoteHub.summary.email'), value: email },
      { label: t('quoteHub.summary.age'), value: age },
      { label: t('quoteHub.summary.zipCode'), value: zipCode },
    ]
    const selectedCoverage = coverageOptions.find((option) => option.value == coverageType)
    const coverageSummary = [
      { label: t('quoteHub.summary.coverageType'), value: selectedCoverage?.title ?? '' },
      {
        label: t('quoteHub.summary.hasPreexistingConditions'),
        value: formatters.formatBoolean(hasPreexistingConditions),
      },
      {
        label: t('quoteHub.summary.existingConditions'),
        value: formatters.formatMultiselectValues(preexistingConditions),
      },
      {
        label: t('quoteHub.summary.hasPrescriptions'),
        value: formatters.formatBoolean(hasPrescriptions),
      },
      { label: t('quoteHub.summary.isSmoker'), value: formatters.formatBoolean(isSmoker) },
      { label: t('quoteHub.summary.hasSpouse'), value: formatters.formatBoolean(hasSpouse) },
    ]

    return { personalInformationSummary, coverageSummary }
  }, [coverageOptions, formMethods, t])

  return { quoteSummary }
}
