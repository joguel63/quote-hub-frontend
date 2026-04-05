import 'i18next'
import { en } from 'core/locales/en'
import { es } from 'core/locales/es'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'es'
    resources: {
      en: typeof en
      es: typeof es
    }
  }
}
