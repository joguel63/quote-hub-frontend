import { CoverageValues } from 'modules/quoteHub/enums'

export type QuoteHubContextType = {
  activeStep: number
  updateFormState: () => void
  coverageOptions: {
    value: CoverageValues
    title: string
    description: string
    recommended: boolean
  }[]
}
