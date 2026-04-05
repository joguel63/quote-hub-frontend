import { Stack } from '@mui/material'
import { AnimatedContainer } from 'core/components'
import { PesonalInformationForm, SectionHeader } from 'modules/quoteHub/components'
import { useTranslation } from 'react-i18next'

const PersonalInformationPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <AnimatedContainer>
      <Stack spacing={4}>
        <SectionHeader
          title={t('quoteHub.stepOne.title')}
          description={t('quoteHub.stepOne.description')}
        />

        <PesonalInformationForm />
      </Stack>
    </AnimatedContainer>
  )
}

export default PersonalInformationPage
