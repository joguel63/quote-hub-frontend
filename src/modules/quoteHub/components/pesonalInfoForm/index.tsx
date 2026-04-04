import { Button, Grid } from '@mui/material'
import { NumberInput, TextInput } from 'core/components'
import { useController } from './useController'

export const PesonalInfoForm: React.FC = () => {
  const { formMethods } = useController()
  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <TextInput control={formMethods.control} name="firstName" label="First Name" />
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
        <Button variant="contained">siguiente</Button>
      </Grid>
    </Grid>
  )
}
