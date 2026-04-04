import { UseFormReturn } from 'react-hook-form'
import { QuoteForm } from '../quoteForm.type'

export type QuoteHubContextType = {
  activeStep: number
  formMethods: UseFormReturn<QuoteForm, any, QuoteForm>
}
