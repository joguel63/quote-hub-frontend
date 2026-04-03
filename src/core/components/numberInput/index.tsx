import { TextField } from '@mui/material'
import { InputProps } from 'core/types'
import { Controller } from 'react-hook-form'

export const NumberInput: React.FC<InputProps> = (props) => {
  const { control, name, defaultValue, ...rest } = props
  return (
    <Controller
      control={control}
      name={name ?? ''}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...rest}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          fullWidth
          type="number"
        />
      )}
    />
  )
}
