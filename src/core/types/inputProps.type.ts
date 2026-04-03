import { TextFieldProps } from '@mui/material'
import { Control, FieldValues } from 'react-hook-form'

export type InputProps = TextFieldProps & {
  control: Control<FieldValues>
}
