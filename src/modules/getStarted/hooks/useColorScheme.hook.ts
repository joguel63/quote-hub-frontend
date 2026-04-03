import { useState, useEffect } from 'react'
import { Theme } from '../types'

export const useColorScheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Obtener tema guardado en localStorage o usar 'light' por defecto
    const savedTheme = localStorage.getItem('color-scheme')
    return (savedTheme as Theme) || 'dark'
  })

  useEffect(() => {
    // Actualizar data-theme en el body
    document.body.setAttribute('data-theme', theme)

    // Persistir en localStorage
    localStorage.setItem('color-scheme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return {
    theme,
    toggleTheme,
  }
}
