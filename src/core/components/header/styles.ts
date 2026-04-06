import { SxStyles } from 'core/types'

export const styles: SxStyles<'toolbar' | 'brand' | 'brandDot' | 'title'> = {
  toolbar: {
    justifyContent: 'space-between',
    gap: 2,
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
  },
  brandDot: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4F8BFF 0%, #0052FF 100%)',
    boxShadow: '0 0 0 6px rgba(0, 82, 255, 0.08)',
  },
  title: {
    fontWeight: 800,
    letterSpacing: '-0.03em',
  },
}
