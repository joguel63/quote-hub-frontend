import { FormControl, FormHelperText, RadioGroup } from '@mui/material'
import { CoverageRadioGroupOptions } from 'modules/quoteHub/types'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { RadioCard } from './radioCard'

type ControlledPlanRadioGroupProps<T extends FieldValues> = {
  name: Path<T>
  control: Control<T>
  options: CoverageRadioGroupOptions[]
}

export const CoverageRadioGroup = <T extends FieldValues>({
  name,
  control,
  options,
}: ControlledPlanRadioGroupProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl error={!!fieldState.error} fullWidth>
          <RadioGroup
            row
            value={field.value}
            onChange={(event) => field.onChange(event.target.value)}
            name={field.name}
          >
            <RadioCard field={field} options={options} />
          </RadioGroup>
          {fieldState.error && <FormHelperText>{fieldState.error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  )
}
