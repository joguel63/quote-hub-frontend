import { Button, Grid } from '@mui/material'
import { NumberInput, TextInput } from 'core/components'
import { AppRoutes } from 'core/enums'
import { QuoteForm } from 'modules/quoteHub/types'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useController } from './useController'

export const PesonalInformationForm: React.FC = () => {
  const { formMethods } = useController()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleNext = () => {
    navigate(AppRoutes.QuoteCoverage)
  }
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextInput<QuoteForm>
          control={formMethods.control}
          name="fullName"
          label={t('quoteHub.inputs.labels.fullName')}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextInput<QuoteForm>
          control={formMethods.control}
          name="email"
          label={t('quoteHub.inputs.labels.email')}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <NumberInput<QuoteForm>
          control={formMethods.control}
          name="age"
          label={t('quoteHub.inputs.labels.age')}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <NumberInput<QuoteForm>
          control={formMethods.control}
          name="zipCode"
          label={t('quoteHub.inputs.labels.zipCode')}
        />
      </Grid>

      <Grid size={{ xs: 12 }} display="flex" justifyContent="flex-end">
        <Button variant="contained" onClick={handleNext}>
          {t('quoteHub.common.next')}
        </Button>
      </Grid>
    </Grid>
  )
}
