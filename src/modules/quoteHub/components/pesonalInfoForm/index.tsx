import { Button, Grid } from '@mui/material'
import { NumberInput, TextInput } from 'core/components'
import { useController } from './useController'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from 'core/enums'

export const PesonalInfoForm: React.FC = () => {
  const { formMethods } = useController()
  const navigate = useNavigate()

  const handleNext = () => {
    navigate(AppRoutes.QuoteCoverage)
  }
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextInput control={formMethods.control} name="fullname" label="Full Name" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextInput control={formMethods.control} name="email" label="Email" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <NumberInput control={formMethods.control} name="age" label="Age" />
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <NumberInput control={formMethods.control} name="zipCode" label="Zip Code" />
      </Grid>

      <Grid size={{ xs: 12 }} display="flex" justifyContent="flex-end">
        <Button variant="contained" onClick={handleNext}>
          Siguiente
        </Button>
      </Grid>
    </Grid>
  )
}
