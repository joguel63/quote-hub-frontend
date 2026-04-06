import { SxStyles } from 'core/types'

export const styles: SxStyles<
  | 'root'
  | 'grid'
  | 'heroCard'
  | 'heroStack'
  | 'eyebrow'
  | 'title'
  | 'description'
  | 'helper'
  | 'button'
  | 'ctaHint'
  | 'highlightColumn'
  | 'highlightCard'
  | 'highlightIcon'
  | 'processCard'
  | 'processHeader'
  | 'processTitle'
  | 'processDescription'
  | 'processStep'
  | 'processBadge'
> = {
  root: {
    px: { xs: 0, sm: 1, md: 2 },
    py: { xs: 2, md: 4 },
  },
  grid: {
    alignItems: 'stretch',
  },
  heroCard: {
    height: '100%',
    borderRadius: 1,
    p: { xs: 3, sm: 4, md: 5 },
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'rgba(255, 255, 255, 0.86)',
    backdropFilter: 'blur(16px)',
    boxShadow: '0 28px 64px rgba(16, 35, 63, 0.12)',
  },
  heroStack: {
    height: '100%',
    justifyContent: 'space-between',
  },
  eyebrow: {
    display: 'inline-flex',
    width: 'fit-content',
    px: 1.5,
    py: 0.75,
    borderRadius: 999,
    bgcolor: 'rgba(0, 82, 255, 0.08)',
    color: 'primary.main',
    fontSize: '0.8rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  title: {
    maxWidth: 540,
    fontSize: { xs: '2.75rem', sm: '3.5rem', md: '4.25rem' },
    lineHeight: { xs: 0.98, md: 0.94 },
  },
  description: {
    maxWidth: 540,
    fontSize: { xs: '1.05rem', sm: '1.2rem' },
    color: 'text.primary',
  },
  helper: {
    maxWidth: 560,
    fontSize: { xs: '0.95rem', sm: '1rem' },
  },
  button: {
    maxWidth: { xs: '100%', sm: 280 },
    minHeight: 56,
  },
  ctaHint: {
    color: 'text.secondary',
  },
  highlightColumn: {
    height: '100%',
  },
  highlightCard: {
    display: 'flex',
    gap: 2,
    alignItems: 'flex-start',
    p: { xs: 2.5, md: 3 },
    borderRadius: 1,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'rgba(255, 255, 255, 0.74)',
    backdropFilter: 'blur(12px)',
    minHeight: { md: 132 },
  },
  highlightIcon: {
    width: 40,
    height: 40,
    flexShrink: 0,
    display: 'grid',
    placeItems: 'center',
    borderRadius: 3,
    color: 'primary.main',
    bgcolor: 'rgba(0, 82, 255, 0.08)',
  },
  processCard: {
    p: { xs: 3, sm: 4 },
    borderRadius: 1,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'rgba(255, 255, 255, 0.82)',
    backdropFilter: 'blur(12px)',
  },
  processHeader: {
    mb: 3,
    maxWidth: 620,
  },
  processTitle: {
    fontSize: { xs: '1.75rem', sm: '2.15rem' },
    lineHeight: 1,
  },
  processDescription: {
    color: 'text.secondary',
  },
  processStep: {
    height: '100%',
    display: 'flex',
    gap: 2,
    alignItems: 'flex-start',
    p: { xs: 2.5, md: 3 },
    borderRadius: 1,
    bgcolor: 'rgba(243, 247, 252, 0.9)',
    border: '1px solid',
    borderColor: 'divider',
  },
  processBadge: {
    width: 36,
    height: 36,
    borderRadius: '50%',
    display: 'grid',
    placeItems: 'center',
    flexShrink: 0,
    bgcolor: 'secondary.main',
    color: 'common.white',
    fontWeight: 700,
  },
}
