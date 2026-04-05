import { Button, Grid } from '@mui/material'
import { SwitchInput } from 'core/components'
import { QuoteForm } from 'modules/quoteHub/types'
import { useTranslation } from 'react-i18next'
import { ConditionsMultiSelect } from '../conditionsMultiSelect'
import { CoverageRadioGroup } from '../coverageRadioGroup'
import { SectionHeader } from '../sectionHeader'
import { useController } from './useController'

export const CoverageForm: React.FC = () => {
  const { formMethods, options, isSenior, handleBack, handleNext } = useController()
  const { t } = useTranslation()

  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12 }}>
        <CoverageRadioGroup<QuoteForm>
          control={formMethods.control}
          name="coverageType"
          options={options}
        />
      </Grid>

      {isSenior && (
        <>
          <Grid size={{ xs: 12 }}>
            <SectionHeader
              title={t('quoteHub.stepTwo.secondTitle')}
              description={t('quoteHub.stepTwo.secondDescription')}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <SwitchInput<QuoteForm>
              control={formMethods.control}
              name="hasPreexistingConditions"
              label={t('quoteHub.inputs.labels.hasPreexistingConditions')}
            />
          </Grid>

          <ConditionsMultiSelect />

          <Grid size={{ xs: 12 }}>
            <SwitchInput<QuoteForm>
              control={formMethods.control}
              name="hasPrescriptions"
              label={t('quoteHub.inputs.labels.prescriptions')}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <SwitchInput<QuoteForm>
              control={formMethods.control}
              name="isSmoker"
              label={t('quoteHub.inputs.labels.smoker')}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <SwitchInput<QuoteForm>
              control={formMethods.control}
              name="hasSpouse"
              label={t('quoteHub.inputs.labels.spouse')}
            />
          </Grid>
        </>
      )}

      <Grid size={{ xs: 12 }} display="flex" justifyContent="space-between">
        <Button variant="contained" color="primary" onClick={handleBack}>
          {t('quoteHub.common.back')}
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          {t('quoteHub.common.next')}
        </Button>
      </Grid>
    </Grid>
  )
}
