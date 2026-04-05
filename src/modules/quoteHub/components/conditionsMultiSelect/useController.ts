import { QuoteForm } from 'modules/quoteHub/types'
import { useEffect } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export const useController = () => {
  const formMethods = useFormContext<QuoteForm>()
  const { t } = useTranslation()
  const hasConditions = useWatch({ control: formMethods.control, name: 'hasPreexistingConditions' })

  const options = [
    { label: t('quoteHub.inputs.options.diabetes'), value: 'diabetes' },
    { label: t('quoteHub.inputs.options.heartDisease'), value: 'heartDisease' },
    { label: t('quoteHub.inputs.options.hypertension'), value: 'hypertension' },
    { label: t('quoteHub.inputs.options.cancer'), value: 'cancer' },
    { label: t('quoteHub.inputs.options.other'), value: 'other' },
  ]

  useEffect(() => {
    if (!hasConditions) formMethods.setValue('preexistingConditions', [])
  }, [hasConditions, formMethods])

  return { formMethods, hasConditions, options }
}
