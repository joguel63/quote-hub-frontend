import { alpha } from '@mui/material'
import { SxStyles } from 'core/types'

export const styles: SxStyles<'root' | 'eyebrow' | 'title' | 'description'> = {
  root: {
    maxWidth: 640,
  },
  eyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    mb: 1.5,
    px: 1.5,
    py: 0.75,
    borderRadius: 1,
    backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
    color: 'primary.main',
  },
  title: {
    fontSize: { xs: '2.35rem', sm: '3.15rem' },
    lineHeight: 1,
    letterSpacing: '-0.04em',
    mb: 1.25,
  },
  description: {
    maxWidth: 600,
    fontSize: { xs: '1rem', sm: '1.125rem' },
    color: 'text.secondary',
  },
}
