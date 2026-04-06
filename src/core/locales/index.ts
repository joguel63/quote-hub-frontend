import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { en } from './en'
import { es } from './es'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
  })

const syncDocumentLanguage = (language: string) => {
  if (typeof document === 'undefined') return

  document.documentElement.lang = language.startsWith('en') ? 'en' : 'es'
}

syncDocumentLanguage(i18n.resolvedLanguage || i18n.language || 'es')
i18n.on('languageChanged', syncDocumentLanguage)

export default i18n
