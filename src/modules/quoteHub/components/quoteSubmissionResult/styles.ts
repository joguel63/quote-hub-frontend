import { alpha } from '@mui/material'
import { SxStyles } from 'core/types'

export const styles: SxStyles<
  'paper' | 'content' | 'iconWrapper' | 'copy' | 'title' | 'description' | 'actions' | 'icons'
> = {
  paper: {
    px: { xs: 3, sm: 5 },
    py: { xs: 4, sm: 6 },
    borderRadius: 1,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
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
      bgcolor: (theme) => alpha(theme.palette.success.main, 0.12),
      color: 'success.main',
      boxShadow: '0 16px 36px rgba(46, 139, 87, 0.16)',
    },
    '&.error': {
      bgcolor: (theme) => alpha(theme.palette.error.main, 0.12),
      color: 'error.main',
      boxShadow: '0 16px 36px rgba(211, 47, 47, 0.14)',
    },
  },
  copy: {
    maxWidth: 560,
  },
  title: {
    fontWeight: 700,
    letterSpacing: '-0.03em',
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
