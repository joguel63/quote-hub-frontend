import { Box, BoxProps, Fade } from '@mui/material'

type AnimatedContainerProps = BoxProps &
  React.PropsWithChildren<{
    timeout?: number
    in?: boolean
  }>

export const AnimatedContainer: React.FC<AnimatedContainerProps> = (props) => {
  const { children, timeout, in: inProp = true, ...boxProps } = props
  return (
    <Fade in={inProp} timeout={timeout ?? 200} unmountOnExit>
      <Box {...boxProps}>{children}</Box>
    </Fade>
  )
}
