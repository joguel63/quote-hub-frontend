import { Button, Grid } from '@mui/material'
import { NumberInput, TextInput } from 'core/components'
import { AppRoutes } from 'core/enums'
import { QuoteForm } from 'modules/quoteHub/types'
import { useNavigate } from 'react-router-dom'
import { useController } from './useController'

export const PesonalInformationForm: React.FC = () => {
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

      <Grid size={{ xs: 12 }} display="flex" justifyContent="flex-end">
        <Button variant="contained" onClick={handleNext}>
          Siguiente
        </Button>
      </Grid>
    </Grid>
  )
}
