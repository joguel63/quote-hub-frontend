// This is a sample React component for the home page of QuoteHub module.

import { Button } from '@mui/material'
import { AppRoutes } from 'core/enums'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('quoteHub.home.title')}</h1>

      <Button variant="contained" component={Link} to={AppRoutes.QuotePersonalInformation}>
        {t('quoteHub.home.cta')}
      </Button>
    </div>
  )
}

export default Home
