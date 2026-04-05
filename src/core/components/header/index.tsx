import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation()
  const nextLanguage = i18n.language.startsWith('en') ? 'es' : 'en'
  const languageLabel = nextLanguage.toUpperCase()

  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ justifyContent: 'space-between', gap: 2 }}>
        <Typography variant="h6">{t('quoteHub.header.title')}</Typography>

        <Button color="inherit" onClick={() => i18n.changeLanguage(nextLanguage)}>
          {languageLabel}
        </Button>
      </Toolbar>
    </AppBar>
  )
}
