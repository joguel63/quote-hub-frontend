import { Box, Button, Stack, Typography } from '@mui/material'
import { AppRoutes } from 'core/enums'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { styles } from './styles'

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Box sx={styles.root}>
      <Stack spacing={{ xs: 4, md: 5 }} sx={styles.stack}>
        <Stack spacing={2.5} alignItems="center">
          <Typography component="h1" variant="h2" sx={styles.title}>
            {t('quoteHub.home.title')}
          </Typography>

          <Typography sx={styles.description}>{t('quoteHub.home.description')}</Typography>

          <Button
            variant="contained"
            component={Link}
            to={AppRoutes.QuotePersonalInformation}
            size="large"
            fullWidth
            sx={styles.button}
          >
            {t('quoteHub.home.cta')}
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Home
