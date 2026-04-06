import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation()
  const nextLanguage = i18n.language.startsWith('en') ? 'es' : 'en'
  const languageLabel = nextLanguage.toUpperCase()

  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={styles.toolbar}>
          <Box sx={styles.brand}>
            <Box aria-hidden sx={styles.brandDot} />
            <Typography variant="h6" sx={styles.title}>
              {t('quoteHub.header.title')}
            </Typography>
          </Box>

          <Button
            variant="outlined"
            color="primary"
            onClick={() => i18n.changeLanguage(nextLanguage)}
          >
            {languageLabel}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
