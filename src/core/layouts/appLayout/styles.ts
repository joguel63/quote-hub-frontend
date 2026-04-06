import { SxStyles } from 'core/types'

export const styles: SxStyles<'root' | 'backgroundDecor' | 'main'> = {
  root: {
    minHeight: '100vh',
    position: 'relative',
  },
  backgroundDecor: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(10px)',
    },
    '&::before': {
      width: 280,
      height: 280,
      top: 96,
      left: { xs: -160, md: -80 },
      backgroundColor: 'rgba(79, 139, 255, 0.12)',
    },
    '&::after': {
      width: 360,
      height: 360,
      top: 180,
      right: { xs: -220, md: -120 },
      backgroundColor: 'rgba(0, 82, 255, 0.08)',
    },
  },
  main: {
    position: 'relative',
    py: { xs: 4, md: 6 },
  },
}
