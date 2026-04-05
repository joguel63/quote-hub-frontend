import { SxStyles } from 'core/types'

export const styles: SxStyles<
  'paper' | 'content' | 'iconWrapper' | 'copy' | 'title' | 'description' | 'actions' | 'icons'
> = {
  paper: {
    px: { xs: 3, sm: 5 },
    py: { xs: 4, sm: 6 },
    borderRadius: 4,
    border: '1px solid',
    borderColor: 'divider',
  },
  content: {
    alignItems: 'center',
    textAlign: 'center',
  },
  iconWrapper: {
    width: { xs: 88, sm: 104 },
    height: { xs: 88, sm: 104 },
    borderRadius: '50%',
    display: 'grid',
    placeItems: 'center',
    '&.success': {
      bgcolor: 'success.50',
      color: 'success.main',
    },
    '&.error': {
      bgcolor: 'error.50',
      color: 'error.main',
    },
  },
  copy: {
    maxWidth: 560,
  },
  title: {
    fontWeight: 700,
  },
  description: {
    color: 'text.secondary',
  },
  actions: {
    width: '100%',
    justifyContent: 'center',
  },
  icons: {
    fontSize: { xs: 48, sm: 56 },
  },
}
