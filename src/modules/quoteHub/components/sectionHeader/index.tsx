import { Box, Typography } from '@mui/material'
import { styles } from './styles'

export const SectionHeader: React.FC<{ title: string; description: string }> = (props) => {
  return (
    <Box>
      <Typography variant="h4" sx={styles.title}>
        {props.title}
      </Typography>
      <Typography variant="h6" sx={styles.description}>
        {props.description}
      </Typography>
    </Box>
  )
}
