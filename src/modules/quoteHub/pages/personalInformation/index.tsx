import { useRef } from 'react'
import { Stack } from '@mui/material'
import { AnimatedContainer } from 'core/components'
import { usePageFocus } from 'modules/quoteHub/hooks'
import { PesonalInformationForm, SectionHeader } from 'modules/quoteHub/components'
import { useTranslation } from 'react-i18next'

const PersonalInformationPage: React.FC = () => {
  const { t } = useTranslation()
  const titleRef = useRef<HTMLHeadingElement>(null)

  usePageFocus(titleRef)

  return (
    <AnimatedContainer>
      <Stack spacing={4}>
        <SectionHeader
          eyebrow={t('quoteHub.stepOne.stepName')}
          title={t('quoteHub.stepOne.title')}
          description={t('quoteHub.stepOne.description')}
          titleRef={titleRef}
        />

        <PesonalInformationForm />
      </Stack>
    </AnimatedContainer>
  )
}

export default PersonalInformationPage
