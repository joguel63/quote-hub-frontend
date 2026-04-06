import { useRef } from 'react'
import { Stack } from '@mui/material'
import { AnimatedContainer } from 'core/components'
import { usePageFocus } from 'modules/quoteHub/hooks'
import { CoverageForm, SectionHeader } from 'modules/quoteHub/components'
import { useTranslation } from 'react-i18next'

const CoveragePage: React.FC = () => {
  const { t } = useTranslation()
  const titleRef = useRef<HTMLHeadingElement>(null)

  usePageFocus(titleRef)

  return (
    <AnimatedContainer>
      <Stack spacing={4}>
        <SectionHeader
          title={t('quoteHub.stepTwo.title')}
          description={t('quoteHub.stepTwo.description')}
          titleRef={titleRef}
        />
        <CoverageForm />
      </Stack>
    </AnimatedContainer>
  )
}

export default CoveragePage
