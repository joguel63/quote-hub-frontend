import { Stepper as MuiStepper, Step, StepLabel } from '@mui/material'

export type StepperProps = {
  steps: { label: string; completed: boolean }[]
  activeStep: number
}

export const Stepper: React.FC<StepperProps> = ({ steps, activeStep }) => {
  return (
    <MuiStepper activeStep={activeStep} alternativeLabel>
      {steps.map((step) => (
        <Step key={step.label} completed={step.completed}>
          <StepLabel>{step.label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  )
}
