import { Box, Paper, Typography } from '@mui/material'
import { formatters } from 'core/utils'
import { useQuoteHubContext } from 'modules/quoteHub/hooks'
import { useWatch } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'

export const QuoteHighlightCard: React.FC = () => {
  const { formMethods } = useQuoteHubContext()
  const quoteCost = useWatch({ control: formMethods.control, name: 'quoteCost' })
  const { t } = useTranslation()

  return (
    <Paper sx={styles.rootPaper}>
      <Box sx={styles.container}>
        <Box>
          <Typography variant="subtitle2" sx={styles.label}>
            {t('quoteHub.stepThree.finalMonthlyQuote')}
          </Typography>

          <Box sx={styles.valueContainer}>
            <Typography variant="h1" sx={styles.amount}>
              {formatters.formatCurrency(quoteCost)}
            </Typography>

            <Typography variant="h4" sx={styles.suffix}>
              {t('quoteHub.stepThree.monthly')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}
