import { Button, Grid } from '@mui/material'
import { NumberInput, TextInput } from 'core/components'
import { AppRoutes } from 'core/enums'
import { QuoteForm } from 'modules/quoteHub/types'
import { useNavigate } from 'react-router-dom'
import { CoverageRadioGroup } from '../coverageRadioGroup'
import { useController } from './useController'

export const PesonalInfoForm: React.FC = () => {
  const { formMethods } = useController()
  const navigate = useNavigate()

  const handleNext = () => {
    navigate(AppRoutes.QuoteCoverage)
  }
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextInput<QuoteForm> control={formMethods.control} name="fullName" label="Full Name" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextInput<QuoteForm> control={formMethods.control} name="email" label="Email" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <NumberInput<QuoteForm> control={formMethods.control} name="age" label="Age" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <NumberInput<QuoteForm> control={formMethods.control} name="zipCode" label="Zip Code" />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <CoverageRadioGroup<QuoteForm>
          control={formMethods.control}
          name="coverageType"
          options={[
            {
              value: 'basic',
              title: 'Basic',
              description:
                'Essential coverage for standard liabilities and minor medical expenses.',
              recommended: false,
            },
            {
              value: 'standard',
              title: 'Standard',
              description: 'Enhanced protection with added benefits and broader coverage limits.',
              recommended: true,
            },
            {
              value: 'premium',
              title: 'Premium',
              description:
                'Comprehensive vault-tier protection with global medical coverage and legal assistance.',
              recommended: false,
            },
          ]}
        />
      </Grid>

      <Grid size={{ xs: 12 }} display="flex" justifyContent="flex-end">
        <Button variant="contained" onClick={handleNext}>
          Siguiente
        </Button>
      </Grid>
    </Grid>
  )
}
