import { Autocomplete, TextField } from '@mui/material'
import { InputMultiselectProps, MultiselectOptions } from 'core/types'
import { type FieldValues } from 'react-hook-form'
import { useController } from './useController'

export const MultiselectInput = <TFieldValues extends FieldValues>(
  props: InputMultiselectProps<TFieldValues>,
) => {
  const { selectedOptions, handleChange, field, error } = useController(props)

  return (
    <Autocomplete<MultiselectOptions, true, false, false>
      multiple
      options={props.options}
      value={selectedOptions}
      disableCloseOnSelect
      onChange={handleChange}
      onBlur={field.onBlur}
      disabled={props.disabled}
      isOptionEqualToValue={(option, value) => option.value === value.value}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          error={!!error}
          helperText={error?.message ?? props.helperText}
        />
      )}
    />
  )
}
