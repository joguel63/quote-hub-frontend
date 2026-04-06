import { SxStyles } from 'core/types'

export const styles: SxStyles<'paper' | 'content'> = {
  paper: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: { xs: 0, sm: 1 },
    borderColor: 'transparent',
    maxWidth: (theme) => theme.breakpoints.values.md,
    margin: 'auto',
    '&.stepsLayoutPaperDesktop': {
      backgroundColor: 'rgba(255, 255, 255, 0.88)',
      backdropFilter: 'blur(16px)',
      padding: 4,
      borderColor: 'transparent',
      boxShadow: '0 28px 64px rgba(16, 35, 63, 0.12)',
    },
    '&.stepsLayoutPaperDesktop::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(79, 139, 255, 0.12) 0%, rgba(255,255,255,0) 35%)',
      pointerEvents: 'none',
    },
    '&.stepsLayoutPaperMobile': {
      backgroundColor: 'transparent',
      backdropFilter: 'none',
      padding: 1,
      border: 0,
      boxShadow: 'none',
    },
  },
  content: {
    position: 'relative',
  },
}
