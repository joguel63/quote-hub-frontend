import { SxStyles } from 'core/types'

export const styles: SxStyles<
  'root' | 'title' | 'label' | 'valueTypography' | 'chipValueTypography'
> = {
  root: {
    backgroundColor: { xs: 'background.paper', sm: 'background.default' },
    borderRadius: 2,
    p: 4,
  },
  title: {
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'text.secondary',
  },
  label: {
    display: 'block',
    mb: 0.75,
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'text.secondary',
  },
  valueTypography: { fontWeight: 600, color: 'text.primary' },
  chipValueTypography: { display: 'flex', flexWrap: 'wrap', gap: 0.5 },
}
