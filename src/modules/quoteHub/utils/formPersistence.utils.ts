import { QuoteForm } from '../types'

const LOCAL_STORAGE_KEY = 'quoteHubFormState'

/**
 * Saves the current form state to localStorage. This allows the form state to persist across page reloads.
 * @param formState The current state of the quote form to be saved.
 */
const saveFormStateToLocalStorage = (formState: QuoteForm): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formState))
}

/**
 * Retrieves the saved form state from localStorage.
 * @returns The saved form state if it exists and is valid, otherwise null.
 */
const getFormStateFromLocalStorage = (): QuoteForm | null => {
  const storedState = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (storedState) {
    try {
      return JSON.parse(storedState) as QuoteForm
    } catch (error) {
      console.error('Error parsing form state from localStorage:', error)
      return null
    }
  }
  return null
}

/**
 * Clears the saved form state from localStorage. This can be used when the user completes the form or wants to reset it.
 */
const clearFormStateFromLocalStorage = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_KEY)
}

export const formPersistenceUtils = {
  saveFormStateToLocalStorage,
  getFormStateFromLocalStorage,
  clearFormStateFromLocalStorage,
}
