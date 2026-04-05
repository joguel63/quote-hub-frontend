import { Stack } from '@mui/material'
import { AnimatedContainer } from 'core/components'
import { CoverageForm, SectionHeader } from 'modules/quoteHub/components'
import { useTranslation } from 'react-i18next'

const CoveragePage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <AnimatedContainer>
      <Stack spacing={4}>
        <SectionHeader
          title={t('quoteHub.stepTwo.title')}
          description={t('quoteHub.stepTwo.description')}
        />
        <CoverageForm />
      </Stack>
    </AnimatedContainer>
  )
}

export default CoveragePage
