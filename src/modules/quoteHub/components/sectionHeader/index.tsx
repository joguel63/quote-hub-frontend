import { RefObject } from 'react'
import { Box, Typography } from '@mui/material'
import { styles } from './styles'

export const SectionHeader: React.FC<{
  title: string
  description: string
  titleRef?: RefObject<HTMLHeadingElement | null>
}> = (props) => {
  return (
    <Box>
      <Typography component="h1" variant="h4" sx={styles.title} ref={props.titleRef} tabIndex={-1}>
        {props.title}
      </Typography>
      <Typography variant="h6" sx={styles.description}>
        {props.description}
      </Typography>
    </Box>
  )
}
