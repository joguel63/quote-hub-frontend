import { Box, Chip, Grid, Paper, Typography } from '@mui/material'
import { styles } from './styles'

type SummaryCardProps = {
  title: string
  fields: {
    label: string
    value: React.ReactNode
  }[]
}

const ValueTypography: React.FC<{ value: React.ReactNode }> = ({ value }) => {
  if (typeof value === 'string' || typeof value === 'number') {
    return (
      <Typography variant="body1" sx={styles.valueTypography}>
        {value}
      </Typography>
    )
  }

  if (Array.isArray(value)) {
    return (
      <Box sx={styles.chipValueTypography}>
        {value.map((item) => (
          <Chip key={item} label={item} size="small" sx={styles.valueTypography} />
        ))}
      </Box>
    )
  }

  return <>{value}</>
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ title, fields }) => {
  return (
    <Paper sx={styles.root}>
      <Box mb={4}>
        <Typography variant="subtitle2" sx={styles.title}>
          {title}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {fields.map((field) => (
          <Grid key={field.label} size={{ xs: 12, sm: 6 }}>
            <Typography variant="caption" sx={styles.label}>
              {field.label}
            </Typography>

            <ValueTypography value={field.value} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}
