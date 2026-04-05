import i18n from 'core/locales'
import * as yup from 'yup'

const personalInfoSchema = yup.object({
  fullName: yup
    .string()
    .required(i18n.t('quoteHub.inputs.errors.fullNameRequired'))
    .min(2, i18n.t('quoteHub.inputs.errors.fullNameMin'))
    .max(50, i18n.t('quoteHub.inputs.errors.fullNameMax')),

  email: yup
    .string()
    .email(i18n.t('quoteHub.inputs.errors.emailInvalid'))
    .required(i18n.t('quoteHub.inputs.errors.emailRequired'))
    .max(100, i18n.t('quoteHub.inputs.errors.emailMax')),

  age: yup
    .number()
    .typeError(i18n.t('quoteHub.inputs.errors.ageType'))
    .required(i18n.t('quoteHub.inputs.errors.ageRequired'))
    .min(18, i18n.t('quoteHub.inputs.errors.ageMin'))
    .max(120, i18n.t('quoteHub.inputs.errors.ageMax')),

  zipCode: yup
    .string()
    .required(i18n.t('quoteHub.inputs.errors.zipCodeRequired'))
    .matches(/^\d{5}$/, i18n.t('quoteHub.inputs.errors.zipCodeFormat')),
})

/**
 * Helper function to conditionally require fields based on age. If the applicant is 65 or older, certain fields become required.
 * @param age age of the applicant to determine if the fields should be required or not
 * @param schema  the yup schema to conditionally apply the required validation to
 * @returns  a yup schema with the appropriate required validation based on the age condition
 */
const requiredIfSenior = (age: number, schema: yup.Schema) => {
  return age >= 65
    ? schema.required(i18n.t('quoteHub.inputs.errors.seniorRequired'))
    : schema.notRequired()
}

const coverageFormSchema = yup.object({
  coverageType: yup.string().required(i18n.t('quoteHub.inputs.errors.coverageTypeRequired')),
  hasPreexistingConditions: yup
    .boolean()
    .when('$age', ([age], schema) => requiredIfSenior(age, schema)),
  preexistingConditions: yup
    .array()
    .of(yup.string().required())
    .when('hasPreexistingConditions', {
      is: true,
      then: (schema) =>
        schema.min(1, i18n.t('quoteHub.inputs.errors.preexistingConditionsRequired')),
      otherwise: (schema) => schema.notRequired(),
    }),
  hasPrescriptions: yup.boolean().when('$age', ([age], schema) => requiredIfSenior(age, schema)),
  isSmoker: yup.boolean().when('$age', ([age], schema) => requiredIfSenior(age, schema)),
  hasSpouse: yup.boolean().when('$age', ([age], schema) => requiredIfSenior(age, schema)),
})

const fullFormSchema = yup.object({
  ...personalInfoSchema.fields,
  ...coverageFormSchema.fields,
})

export const quoteFormSchemas = [personalInfoSchema, coverageFormSchema, fullFormSchema]
