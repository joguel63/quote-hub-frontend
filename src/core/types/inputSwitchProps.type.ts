import { Control, FieldValues } from 'react-hook-form'

export type InputSwitchProps = {
  name: string
  label: string
  control: Control<FieldValues>
}
