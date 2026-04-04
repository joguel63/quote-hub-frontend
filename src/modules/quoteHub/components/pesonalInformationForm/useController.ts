import { useQuoteHubContext } from 'modules/quoteHub/hooks'

export const useController = () => {
  const { formMethods } = useQuoteHubContext()

  return { formMethods }
}
