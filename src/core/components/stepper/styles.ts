import { SxStyles } from 'core/types'

export const styles: SxStyles<'root' | 'stepper'> = {
  root: {
    overflowX: 'auto',
    px: { xs: 1, sm: 0 },
  },
  stepper: {
    minWidth: 320,
    '& .MuiStepConnector-root': {
      top: 16,
    },
    '& .MuiStepConnector-line': {
      borderColor: 'divider',
      borderTopWidth: 2,
    },
    '& .MuiStepLabel-label': {
      mt: 1.5,
      fontSize: { xs: '0.82rem', sm: '0.92rem' },
      fontWeight: 600,
      color: 'text.secondary',
    },
    '& .Mui-active .MuiStepLabel-label, & .Mui-completed .MuiStepLabel-label': {
      color: 'text.primary',
    },
    '& .MuiStepIcon-root': {
      color: 'rgba(16, 35, 63, 0.28)',
    },
    '& .MuiStepIcon-root.Mui-active, & .MuiStepIcon-root.Mui-completed': {
      color: 'primary.main',
    },
  },
}
