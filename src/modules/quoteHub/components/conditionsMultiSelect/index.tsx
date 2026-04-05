import { Grid } from '@mui/material'
import { MultiselectInput } from 'core/components'
import { QuoteForm } from 'modules/quoteHub/types'
import { useTranslation } from 'react-i18next'
import { useController } from './useController'

export const ConditionsMultiSelect = () => {
  const { formMethods, hasConditions, options } = useController()
  const { t } = useTranslation()

  if (!hasConditions) return <></>

  return (
    <Grid size={{ xs: 12 }}>
      <MultiselectInput<QuoteForm>
        control={formMethods.control}
        name="preexistingConditions"
        label={t('quoteHub.inputs.labels.preexistingConditions')}
        options={options}
      />
    </Grid>
  )
}
