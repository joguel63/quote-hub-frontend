import { TextFieldProps } from '@mui/material'
import { Control, FieldValues, Path } from 'react-hook-form'

export type InputProps<T extends FieldValues> = TextFieldProps & {
  control: Control<T>
  name: Path<T>
}
