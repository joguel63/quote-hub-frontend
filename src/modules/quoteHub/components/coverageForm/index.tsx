import { Button, Grid } from '@mui/material'
import { QuoteForm } from 'modules/quoteHub/types'
import { CoverageRadioGroup } from '../coverageRadioGroup'
import { useController } from './useController'
import { MultiselectInput, SwitchInput } from 'core/components'

export const CoverageForm: React.FC = () => {
  const { formMethods, options, handleBack, handleNext } = useController()
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12 }}>
        <CoverageRadioGroup<QuoteForm>
          control={formMethods.control}
          name="coverageType"
          options={options}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <SwitchInput<QuoteForm>
          control={formMethods.control}
          name="hasPreexistingConditions"
          label="Preexisting Conditions"
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <MultiselectInput<QuoteForm>
          control={formMethods.control}
          name="preexistingConditions"
          label="Preexisting Conditions"
          options={[
            { label: 'Diabetes', value: 'diabetes' },
            { label: 'Hypertension', value: 'hypertension' },
          ]}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <SwitchInput<QuoteForm>
          control={formMethods.control}
          name="hasPrescriptions"
          label="Prescriptions"
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <SwitchInput<QuoteForm> control={formMethods.control} name="isSmoker" label="Smoker" />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <SwitchInput<QuoteForm> control={formMethods.control} name="isSpouse" label="Spouse" />
      </Grid>

      <Grid size={{ xs: 12 }} display="flex" justifyContent="space-between">
        <Button variant="contained" color="primary" onClick={handleBack}>
          Atras
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Siguiente
        </Button>
      </Grid>
    </Grid>
  )
}
