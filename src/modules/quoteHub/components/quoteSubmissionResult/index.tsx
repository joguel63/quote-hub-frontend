import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'
import { useController } from './useController'
import { Navigate } from 'react-router-dom'
import { AppRoutes } from 'core/enums'
import { QuoteCoverageStatus } from 'modules/quoteHub/enums'

const statusConfig = {
  success: {
    icon: CheckCircleRoundedIcon,
    titleKey: 'quoteHub.result.success.title',
    descriptionKey: 'quoteHub.result.success.description',
    primaryActionKey: 'quoteHub.result.actions.primarySuccess',
    secondaryActionKey: 'quoteHub.result.actions.secondarySuccess',
  },
  error: {
    icon: ErrorOutlineRoundedIcon,
    titleKey: 'quoteHub.result.error.title',
    descriptionKey: 'quoteHub.result.error.description',
    primaryActionKey: 'quoteHub.result.actions.primaryError',
    secondaryActionKey: 'quoteHub.result.actions.secondaryError',
  },
} as const

export const QuoteSubmissionResult: React.FC = () => {
  const { status, handlePrimaryAction, handleSecondaryAction } = useController()
  const { t } = useTranslation()

  if (!status) return <Navigate to={AppRoutes.Quote} />

  const config = statusConfig[status]
  const StatusIcon = config.icon

  return (
    <Paper elevation={0} sx={styles.paper}>
      <Stack spacing={4} sx={styles.content} role="status" aria-live="polite">
        <Box className={status} sx={styles.iconWrapper}>
          <StatusIcon sx={styles.icons} />
        </Box>

        <Stack spacing={1.5} sx={styles.copy}>
          <Typography variant="h4" sx={styles.title}>
            {t(config.titleKey)}
          </Typography>
          <Typography variant="body1" sx={styles.description}>
            {t(config.descriptionKey)}
          </Typography>
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={styles.actions}>
          <Button variant="contained" type="button" onClick={handlePrimaryAction} size="large">
            {t(config.primaryActionKey)}
          </Button>

          {config.secondaryActionKey && status === QuoteCoverageStatus.Error && (
            <Button variant="outlined" type="button" onClick={handleSecondaryAction} size="large">
              {t(config.secondaryActionKey)}
            </Button>
          )}
        </Stack>
      </Stack>
    </Paper>
  )
}
