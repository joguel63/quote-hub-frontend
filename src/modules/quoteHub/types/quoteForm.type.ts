import { CoverageValues } from '../enums'

export type QuoteForm = {
  fullName: string
  age: number
  email: string
  zipCode: string
  coverageType: CoverageValues
  hasPreexistingConditions: boolean
  preexistingConditions?: string[]
  hasPrescriptions: boolean
  isSmoker: boolean
  hasSpouse: boolean
}
