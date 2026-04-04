import * as yup from 'yup'

const personalInfoSchema = yup.object({
  fullName: yup
    .string()
    .required('Full name is required')
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name cannot exceed 50 characters'),

  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required')
    .max(100, 'Email cannot exceed 100 characters'),

  age: yup
    .number()
    .typeError('Age must be a number')
    .required('Age is required')
    .min(18, 'You must be at least 18 years old')
    .max(120, 'Age must be less than 120'),

  zipCode: yup
    .string()
    .required('Zip code is required')
    .matches(/^\d{5}$/, 'Zip code must be exactly 5 digits'),
})

/**
 * Helper function to conditionally require fields based on age. If the applicant is 65 or older, certain fields become required.
 * @param age age of the applicant to determine if the fields should be required or not
 * @param schema  the yup schema to conditionally apply the required validation to
 * @returns  a yup schema with the appropriate required validation based on the age condition
 */
const requiredIfSenior = (age: number, schema: yup.Schema) => {
  return age >= 65
    ? schema.required('This field is required for applicants 65 or older')
    : schema.notRequired()
}

const coverageFormSchema = yup.object({
  coverageType: yup.string().required('Coverage type is required'),
  hasPreexistingConditions: yup
    .boolean()
    .when('$age', ([age], schema) => requiredIfSenior(age, schema)),
  preexistingConditions: yup
    .array()
    .of(yup.string().required())
    .when('hasPreexistingConditions', {
      is: true,
      then: (schema) => schema.min(1, 'Please specify at least one preexisting condition'),
      otherwise: (schema) => schema.notRequired(),
    }),
  hasPrescriptions: yup.boolean().when('$age', ([age], schema) => requiredIfSenior(age, schema)),
  isSmoker: yup.boolean().when('$age', ([age], schema) => requiredIfSenior(age, schema)),
  isSpouse: yup.boolean().when('$age', ([age], schema) => requiredIfSenior(age, schema)),
})

const fullFormSchema = yup.object({
  ...personalInfoSchema.fields,
  ...coverageFormSchema.fields,
})

export const quoteFormSchemas = [personalInfoSchema, coverageFormSchema, fullFormSchema]
