import { CoverageValues } from '../enums'
import { quoteFormSchemas } from './quoteForm.schema'

const personalInfoSchema = quoteFormSchemas[0]
const coverageSchema = quoteFormSchemas[1]
const fullSchema = quoteFormSchemas[2]

describe('quoteFormSchemas', () => {
  it('rejects invalid personal information', async () => {
    await expect(
      personalInfoSchema.validate(
        {
          fullName: 'J',
          email: 'invalid-email',
          age: 17,
          zipCode: '1234',
        },
        { abortEarly: false },
      ),
    ).rejects.toThrow()
  })

  it('requires coverage type in coverage step', async () => {
    await expect(
      coverageSchema.validate(
        {
          hasPreexistingConditions: false,
          preexistingConditions: [],
          hasPrescriptions: false,
          isSmoker: false,
          hasSpouse: false,
        },
        { abortEarly: false, context: { age: 30 } },
      ),
    ).rejects.toThrow()
  })

  it('requires senior follow-up fields when applicant is 66', async () => {
    await expect(
      coverageSchema.validate(
        {
          coverageType: CoverageValues.Basic,
        },
        { abortEarly: false, context: { age: 66 } },
      ),
    ).rejects.toThrow()
  })

  it('requires at least one preexisting condition when toggled on', async () => {
    await expect(
      coverageSchema.validate(
        {
          coverageType: CoverageValues.Basic,
          hasPreexistingConditions: true,
          preexistingConditions: [],
          hasPrescriptions: true,
          isSmoker: false,
          hasSpouse: false,
        },
        { abortEarly: false, context: { age: 66 } },
      ),
    ).rejects.toThrow()
  })

  it('requires quoteCost in the full schema', async () => {
    await expect(
      fullSchema.validate(
        {
          fullName: 'Jane Doe',
          email: 'jane@example.com',
          age: 66,
          zipCode: '90210',
          coverageType: CoverageValues.Standard,
          hasPreexistingConditions: false,
          preexistingConditions: [],
          hasPrescriptions: false,
          isSmoker: false,
          hasSpouse: false,
        },
        { abortEarly: false, context: { age: 66 } },
      ),
    ).rejects.toThrow()
  })
})
