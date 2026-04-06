import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { AppRoutes } from 'core/enums'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { styles } from './styles'

const Home: React.FC = () => {
  const { t } = useTranslation()
  const highlights = [
    {
      key: 'guided',
      icon: AutoAwesomeRoundedIcon,
    },
    {
      key: 'flexible',
      icon: TimelineRoundedIcon,
    },
    {
      key: 'transparent',
      icon: CheckCircleOutlineRoundedIcon,
    },
  ] as const

  const steps = ['stepOne', 'stepTwo', 'stepThree'] as const

  return (
    <Box sx={styles.root}>
      <Grid container spacing={{ xs: 3, md: 4 }} sx={styles.grid}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={styles.heroCard}>
            <Stack spacing={{ xs: 3, md: 4 }} sx={styles.heroStack}>
              <Box sx={styles.eyebrow}>{t('quoteHub.home.eyebrow')}</Box>

              <Stack spacing={2.5}>
                <Typography component="h1" variant="h2" sx={styles.title}>
                  {t('quoteHub.home.title')}
                </Typography>

                <Typography sx={styles.description}>{t('quoteHub.home.description')}</Typography>
                <Typography sx={styles.helper}>{t('quoteHub.home.helper')}</Typography>
              </Stack>

              <Stack spacing={1.5} alignItems={{ xs: 'stretch', sm: 'flex-start' }}>
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
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Stack spacing={2} sx={styles.highlightColumn}>
            {highlights.map(({ key, icon: Icon }) => (
              <Box key={key} sx={styles.highlightCard}>
                <Box sx={styles.highlightIcon}>
                  <Icon fontSize="small" />
                </Box>
                <Stack spacing={1}>
                  <Typography variant="h6">{t(`quoteHub.home.highlights.${key}.title`)}</Typography>
                  <Typography variant="body2">
                    {t(`quoteHub.home.highlights.${key}.description`)}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Box sx={styles.processCard}>
            <Stack spacing={1.5} sx={styles.processHeader}>
              <Typography variant="h4" sx={styles.processTitle}>
                {t('quoteHub.home.process.title')}
              </Typography>
            </Stack>

            <Grid container spacing={{ xs: 2, md: 3 }}>
              {steps.map((stepKey, index) => (
                <Grid key={stepKey} size={{ xs: 12, md: 4 }}>
                  <Box sx={styles.processStep}>
                    <Box sx={styles.processBadge}>{`0${index + 1}`}</Box>
                    <Stack spacing={1}>
                      <Typography variant="h6">
                        {t(`quoteHub.home.process.${stepKey}.title`)}
                      </Typography>
                      <Typography variant="body2">
                        {t(`quoteHub.home.process.${stepKey}.description`)}
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
