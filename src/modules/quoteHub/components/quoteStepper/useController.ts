export const useController = () => {
  const steps = [
    {
      label: 'Personal Information',
      completed: true,
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
  const activeStep = 0
  return { steps, activeStep }
}
