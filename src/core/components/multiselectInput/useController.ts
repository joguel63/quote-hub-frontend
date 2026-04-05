import { InputMultiselectProps, MultiselectOptions } from 'core/types'
import { FieldValues, Path, useController as useRhmController } from 'react-hook-form'

export const useController = <TFieldValues extends FieldValues>(
  props: InputMultiselectProps<TFieldValues>,
) => {
  const { name, control, defaultValue = [] as TFieldValues[Path<TFieldValues>] } = props

  const {
    field,
    fieldState: { error },
  } = useRhmController({ name, control, defaultValue })

  const selectedOptions = field.value

  const handleChange = (_: React.SyntheticEvent, newValue: MultiselectOptions[]) => {
    field.onChange(newValue)
  }

  return {
    selectedOptions,
    handleChange,
    field,
    error,
  }
}
