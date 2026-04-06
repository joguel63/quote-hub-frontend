import { TextField } from '@mui/material'
import { InputProps } from 'core/types'
import { Controller, FieldValues, Path } from 'react-hook-form'

export const TextInput = <T extends FieldValues>(props: InputProps<T>) => {
  const { control, name, defaultValue, ...rest } = props
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue as T[Path<T>] | undefined}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...rest}
          value={field.value ?? ''}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          fullWidth
        />
      )}
    />
  )
}
