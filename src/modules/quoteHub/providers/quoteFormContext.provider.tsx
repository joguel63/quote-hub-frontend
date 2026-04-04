import { FormProvider, useForm } from 'react-hook-form'

export const QuoteFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const formMethods = useForm({})

  return <FormProvider {...formMethods}>{children}</FormProvider>
}
