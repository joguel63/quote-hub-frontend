import { type QuoteForm } from '../types'
import { formPersistenceUtils } from './formPersistence.utils'

const formState: QuoteForm = {
  fullName: 'Jane Doe',
  email: 'jane@example.com',
  age: 65,
  zipCode: '90210',
  coverageType: 1 as QuoteForm['coverageType'],
  hasPreexistingConditions: true,
  preexistingConditions: [{ label: 'Diabetes', value: 'diabetes' }],
  hasPrescriptions: true,
  isSmoker: false,
  hasSpouse: true,
  quoteCost: 275,
}

describe('formPersistenceUtils', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('saves the form state to localStorage', () => {
    formPersistenceUtils.saveFormStateToLocalStorage(formState)

    expect(localStorage.getItem('quoteHubFormState')).toBe(JSON.stringify(formState))
  })

  it('reads the saved form state from localStorage', () => {
    localStorage.setItem('quoteHubFormState', JSON.stringify(formState))

    expect(formPersistenceUtils.getFormStateFromLocalStorage()).toEqual(formState)
  })

  it('returns null when there is no saved state', () => {
    expect(formPersistenceUtils.getFormStateFromLocalStorage()).toBeNull()
  })

  it('returns null when stored state is invalid JSON', () => {
    localStorage.setItem('quoteHubFormState', '{invalid-json')

    expect(formPersistenceUtils.getFormStateFromLocalStorage()).toBeNull()
  })

  it('clears the saved form state', () => {
    localStorage.setItem('quoteHubFormState', JSON.stringify(formState))

    formPersistenceUtils.clearFormStateFromLocalStorage()

    expect(localStorage.getItem('quoteHubFormState')).toBeNull()
  })
})
