import { PesonalInformationForm, SectionHeader } from 'modules/quoteHub/components'
import { useTranslation } from 'react-i18next'

const PersonalInformationPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <SectionHeader
        title={t('quoteHub.stepOne.title')}
        description={t('quoteHub.stepOne.description')}
      />

      <PesonalInformationForm />
    </>
  )
}

export default PersonalInformationPage
