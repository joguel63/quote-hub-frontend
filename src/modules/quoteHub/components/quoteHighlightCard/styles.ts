import { SxStyles } from 'core/types'

export const styles: SxStyles<
  'rootPaper' | 'container' | 'label' | 'valueContainer' | 'amount' | 'suffix'
> = {
  rootPaper: {
    p: { xs: 3, sm: 4 },
    background:
      'linear-gradient(135deg, rgba(0, 82, 255, 0.08) 0%, rgba(255,255,255,0.92) 52%, rgba(79, 139, 255, 0.08) 100%)',
    border: '1px solid',
    borderColor: 'divider',
    borderRadius: 1,
  },
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 3,
    flexWrap: 'wrap',
  },
  label: {
    mb: 1.5,
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'secondary.main',
  },
  valueContainer: { display: 'flex', alignItems: 'baseline', gap: 1, flexWrap: 'wrap' },
  amount: {
    fontWeight: 800,
    lineHeight: 1,
    fontSize: {
      xs: '2.5rem',
      sm: '3rem',
    },
  },
  suffix: { fontWeight: 600, color: 'text.secondary' },
}
