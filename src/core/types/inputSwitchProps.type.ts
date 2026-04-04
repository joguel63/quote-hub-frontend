import { Control, FieldValues, Path } from 'react-hook-form'

export type InputSwitchProps<T extends FieldValues> = {
  name: Path<T>
  label: string
  control: Control<T>
}
