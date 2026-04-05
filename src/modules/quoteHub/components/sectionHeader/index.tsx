import { Box, Typography } from '@mui/material'

export const SectionHeader: React.FC<{ title: string; description: string }> = (props) => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold">
        {props.title}
      </Typography>
      <Typography variant="h6">{props.description}</Typography>
    </Box>
  )
}
