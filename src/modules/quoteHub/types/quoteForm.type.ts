export type QuoteForm = {
  fullName: string
  age: number
  email: string
  zipCode: string
  coverageType: string
  hasPreexistingConditions: boolean
  preexistingConditions?: string[]
  hasPrescriptions: boolean
  isSmoker: boolean
  isSpouse: boolean
}
