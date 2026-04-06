import { SxStyles } from 'core/types'

export const styles: SxStyles<
  'root' | 'recommendedChip' | 'radioContainer' | 'title' | 'description' | 'button' | 'hiddenRadio'
> = {
  root: { position: 'relative', flex: 1 },
  recommendedChip: {
    position: 'absolute',
    top: -12,
    left: '50%',
    transform: 'translateX(-50%)',
    bgcolor: 'primary.main',
    color: 'common.white',
    px: 2,
    py: 0.5,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
    zIndex: 1,
  },
  radioContainer: {
    display: 'block',
    borderRadius: 1,
    border: '2px solid',
    cursor: 'pointer',
    borderColor: 'grey.300',
    p: 3,
    boxShadow: 0,
    '&.selected': {
      borderColor: 'primary.main',
      boxShadow: 3,
    },
  },
  title: { mt: 1, fontWeight: 700 },
  description: { mt: 1.5 },
  button: { mt: 3 },
  hiddenRadio: {
    position: 'absolute',
    width: 1,
    height: 1,
    p: 0,
    m: -1,
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    whiteSpace: 'nowrap',
    border: 0,
  },
}
