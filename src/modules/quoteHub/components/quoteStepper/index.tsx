import { Stepper } from 'core/components'
import { useController } from './useController'

export const QuoteStepper: React.FC = () => {
  const { steps, activeStep } = useController()
  return <Stepper steps={steps} activeStep={activeStep} />
}
