import { SxStyles } from 'core/types'

export const styles: SxStyles<
  'rootPaper' | 'container' | 'label' | 'valueContainer' | 'amount' | 'suffix'
> = {
  rootPaper: { p: 4, backgroundColor: { xs: 'background.paper', sm: 'background.default' } },
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
    color: 'text.secondary',
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
  suffix: { fontWeight: 500, color: 'text.disabled' },
}
