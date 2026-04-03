import { InputPhoneProps } from 'core/types'
import { MuiTelInput } from 'mui-tel-input'
import { Controller } from 'react-hook-form'

export const PhoneInput: React.FC<InputPhoneProps> = (props) => {
  const { control, name, value } = props
  //A controller Input component
  return (
    <Controller
      control={control}
      name={name ?? ''}
      defaultValue={value}
      render={({ field, fieldState }) => (
        <MuiTelInput
          {...field}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          fullWidth
        />
      )}
    />
  )
}
