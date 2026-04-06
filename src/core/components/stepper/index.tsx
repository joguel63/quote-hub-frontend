import { Box, Step, StepLabel, Stepper as MuiStepper } from '@mui/material'
import { styles } from './styles'

export type StepperProps = {
  steps: { label: string; completed: boolean }[]
  activeStep: number
}

export const Stepper: React.FC<StepperProps> = ({ steps, activeStep }) => {
  return (
    <Box sx={styles.root}>
      <MuiStepper activeStep={activeStep} alternativeLabel sx={styles.stepper}>
        {steps.map((step) => (
          <Step key={step.label} completed={step.completed}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </MuiStepper>
    </Box>
  )
}
