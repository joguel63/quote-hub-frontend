import { Box, Typography } from '@mui/material'
import { PesonalInformationForm } from 'modules/quoteHub/components'

const PersonalInformationPage: React.FC = () => {
  return (
    <>
      <Box>
        <Typography variant="h3" fontWeight="bold">Tell us about yourself</Typography>
        <Typography variant="h6">Just a few details to get your quote started</Typography>
      </Box>

      <PesonalInformationForm />
    </>
  )
}

export default PersonalInformationPage
