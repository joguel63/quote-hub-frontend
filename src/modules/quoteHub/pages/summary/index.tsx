import { useRef } from 'react'
import { Stack } from '@mui/material'
import { AnimatedContainer } from 'core/components'
import { usePageFocus } from 'modules/quoteHub/hooks'
import { QuoteSummary, SectionHeader } from 'modules/quoteHub/components'
import { useTranslation } from 'react-i18next'

const SummaryPage: React.FC = () => {
  const { t } = useTranslation()
  const titleRef = useRef<HTMLHeadingElement>(null)

  usePageFocus(titleRef)

  return (
    <AnimatedContainer>
      <Stack spacing={4}>
        <SectionHeader
          title={t('quoteHub.stepThree.title')}
          description={t('quoteHub.stepThree.description')}
          titleRef={titleRef}
        />
        <QuoteSummary />
      </Stack>
    </AnimatedContainer>
  )
}

export default SummaryPage
