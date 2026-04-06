import { SxStyles } from 'core/types'

export const styles: SxStyles<
  'root' | 'title' | 'label' | 'valueTypography' | 'chipValueTypography'
> = {
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.82)',
    borderRadius: 1,
    border: '1px solid',
    borderColor: 'divider',
    p: { xs: 3, sm: 4 },
  },
  title: {
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'secondary.main',
  },
  label: {
    display: 'block',
    mb: 0.75,
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'text.secondary',
  },
  valueTypography: { fontWeight: 700, color: 'text.primary' },
  chipValueTypography: { display: 'flex', flexWrap: 'wrap', gap: 0.5 },
}
