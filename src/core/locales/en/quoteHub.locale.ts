export const quoteHub = {
  common: {
    loading: 'Loading...',
    back: 'Back',
    next: 'Next',
    recommended: 'Recommended',
  },
  header: {
    title: 'Quote Hub',
  },
  home: {
    title: 'Home Page',
    cta: 'Get a Quote',
  },
  inputs: {
    labels: {
      fullName: 'Full Name',
      email: 'Email',
      age: 'Age',
      zipCode: 'Zip Code',
      preexistingConditions: 'Preexisting Conditions',
      prescriptions: 'Prescriptions',
      smoker: 'Smoker',
      spouse: 'Spouse',
    },
    options: {
      diabetes: 'Diabetes',
      hypertension: 'Hypertension',
    },
    errors: {
      fullNameRequired: 'Full name is required',
      fullNameMin: 'Full name must be at least 2 characters',
      fullNameMax: 'Full name cannot exceed 50 characters',
      emailInvalid: 'Invalid email format',
      emailRequired: 'Email is required',
      emailMax: 'Email cannot exceed 100 characters',
      ageType: 'Age must be a number',
      ageRequired: 'Age is required',
      ageMin: 'You must be at least 18 years old',
      ageMax: 'Age must be less than 120',
      zipCodeRequired: 'Zip code is required',
      zipCodeFormat: 'Zip code must be exactly 5 digits',
      seniorRequired: 'This field is required for applicants 65 or older',
      coverageTypeRequired: 'Coverage type is required',
      preexistingConditionsRequired: 'Please specify at least one preexisting condition',
    },
  },
  coverage: {
    plans: {
      basic: {
        title: 'Basic',
        description: 'Essential coverage for standard liabilities and minor medical expenses.',
      },
      standard: {
        title: 'Standard',
        description: 'Enhanced protection with added benefits and broader coverage limits.',
      },
      premium: {
        title: 'Premium',
        description:
          'Comprehensive vault-tier protection with global medical coverage and legal assistance.',
      },
    },
    tierLabel: 'Tier {{index}}',
    actions: {
      current: 'Currently Selected',
      select: 'Select {{title}}',
    },
  },
  stepOne: {
    title: 'Tell us about yourself',
    description: 'Just a few details to get your quote started',
    stepName: 'Personal Information',
  },
  stepTwo: {
    title: 'Choose your coverage',
    description: 'Select the protection level and tell us about your current health needs',
    stepName: 'Coverage',
  },
  stepThree: {
    title: 'Review your information',
    description: 'Confirm your details before we prepare your quote',
    stepName: 'Summary',
  },
}
