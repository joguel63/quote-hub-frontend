import { InputMultiselectProps, MultiselectOptions } from 'core/types'
import { FieldValues, Path, useController as useRhmController } from 'react-hook-form'

export const useController = <TFieldValues extends FieldValues>(
  props: InputMultiselectProps<TFieldValues>,
) => {
  const { name, control, options, defaultValue = [] as TFieldValues[Path<TFieldValues>] } = props

  const {
    field,
    fieldState: { error },
  } = useRhmController({ name, control, defaultValue })

  const selectedOptions = options.filter((option) => field.value?.includes(option.value))

  const handleChange = (_: React.SyntheticEvent, newValue: MultiselectOptions[]) => {
    const values = newValue.map((option) => option.value)
    field.onChange(values)
  }

  return {
    selectedOptions,
    handleChange,
    field,
    error,
  }
}
