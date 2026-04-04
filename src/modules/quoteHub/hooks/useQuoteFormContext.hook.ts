import { useFormContext } from 'react-hook-form'
import { type UseQuoteFormContextReturn } from '../types'

export const useQuoteFormContext = () => {
  const methods = useFormContext()

  return methods
}
