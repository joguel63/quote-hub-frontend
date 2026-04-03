import { MuiTelInputProps } from 'mui-tel-input'
import { Control, FieldValues } from 'react-hook-form'

export type InputPhoneProps = MuiTelInputProps & {
  control: Control<FieldValues>
}
