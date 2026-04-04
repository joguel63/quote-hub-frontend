import { Control, FieldValues, Path, UseControllerProps } from 'react-hook-form'

export type MultiselectOptions = { label: string; value: string | number }

export type InputMultiselectProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>
  control: Control<TFieldValues>
  options: MultiselectOptions[]
  label?: string
  helperText?: string
  disabled?: boolean
} & Omit<UseControllerProps<TFieldValues>, 'control'>
