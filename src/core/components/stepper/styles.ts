import { SxStyles } from 'core/types'

export const styles: SxStyles<'customStepper'> = {
  customStepper: (theme) => ({
    backgroundColor: theme.palette.grey[400],
    borderRadius: '50%',
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '.active': {
      backgroundColor: theme.palette.primary.main,
    },
  }),
}
