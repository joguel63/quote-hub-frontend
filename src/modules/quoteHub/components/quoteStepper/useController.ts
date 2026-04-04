import { AppRoutes } from 'core/enums'
import { useLocation } from 'react-router-dom'

const stepsIndex = {
  [AppRoutes.QuotePersonalInformation]: 0,
  [AppRoutes.QuoteCoverage]: 1,
  [AppRoutes.QuoteSummary]: 2,
}

export const useController = () => {
  const { pathname } = useLocation()
  const steps = [
    {
      label: 'Personal Information',
      completed: false,
    },
    {
      label: 'Vehicle Information',
      completed: false,
    },
    {
      label: 'Summary',
      completed: false,
    },
  ]
  const activeStep = stepsIndex[pathname as keyof typeof stepsIndex] ?? 0
  return { steps, activeStep }
}
