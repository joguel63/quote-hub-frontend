import { useQuoteFormContext } from 'modules/quoteHub/hooks'

export const useController = () => {
  const formMethods = useQuoteFormContext()
  return { formMethods }
}
