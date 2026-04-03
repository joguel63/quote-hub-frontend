import { SxProps, Theme } from '@mui/material'

export type SxStyles<T extends string = ''> = Record<T, SxProps<Theme>>
