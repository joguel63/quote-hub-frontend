import { SxStyles } from 'core/types'

export const styles: SxStyles<'root' | 'stack' | 'title' | 'description' | 'button'> = {
  root: {
    minHeight: { xs: 'calc(100vh - 140px)', md: 'calc(100vh - 180px)' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: { xs: 2, sm: 3, md: 4 },
    py: { xs: 5, md: 8 },
  },
  stack: { width: '100%', maxWidth: 720, textAlign: 'center' },
  title: { fontSize: { xs: '2.25rem', sm: '3rem' } },
  description: { maxWidth: 560, fontSize: { xs: '1rem', sm: '1.125rem' } },
  button: {
    mt: 1,
    maxWidth: { xs: '100%', sm: 280 },
    minHeight: 52,
  },
}
