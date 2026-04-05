import { Box, Typography } from '@mui/material'
import { PesonalInformationForm } from 'modules/quoteHub/components'
import { useTranslation } from 'react-i18next'

const PersonalInformationPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Box>
        <Typography variant="h3" fontWeight="bold">
          {t('quoteHub.stepOne.title')}
        </Typography>
        <Typography variant="h6">{t('quoteHub.stepOne.description')}</Typography>
      </Box>

      <PesonalInformationForm />
    </>
  )
}

export default PersonalInformationPage
