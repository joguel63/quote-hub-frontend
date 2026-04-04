import { FormControlLabel, Switch } from '@mui/material'
import { InputSwitchProps } from 'core/types'

import { Controller } from 'react-hook-form'

export const SwitchInput: React.FC<InputSwitchProps> = ({ control, name, label }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControlLabel
          control={
            <Switch
              {...field}
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              color="primary"
            />
          }
          label={label}
        />
      )}
    />
  )
}
