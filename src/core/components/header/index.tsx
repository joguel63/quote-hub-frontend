import { AppBar, Toolbar, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6">{t('quoteHub.header.title')}</Typography>
      </Toolbar>
    </AppBar>
  )
}
