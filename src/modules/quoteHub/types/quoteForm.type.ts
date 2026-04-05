import { MultiselectOptions } from 'core/types'
import { CoverageValues } from '../enums'

export type QuoteForm = {
  fullName: string
  age: number
  email: string
  zipCode: string
  coverageType: CoverageValues
  hasPreexistingConditions: boolean
  preexistingConditions?: MultiselectOptions[]
  hasPrescriptions: boolean
  isSmoker: boolean
  hasSpouse: boolean
  quoteCost: number
}
