import { CoverageForm, SectionHeader } from 'modules/quoteHub/components'
import { useTranslation } from 'react-i18next'

const CoveragePage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <SectionHeader
        title={t('quoteHub.stepTwo.title')}
        description={t('quoteHub.stepTwo.description')}
      />
      <CoverageForm />
    </>
  )
}

export default CoveragePage
