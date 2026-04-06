export const quoteHub = {
  common: {
    loading: 'Loading...',
    back: 'Back',
    next: 'Next',
    recommended: 'Recommended',
    yes: 'Yes',
    no: 'No',
    sendQuote: 'Send Quote',
  },
  header: {
    title: 'Quote Hub',
  },
  home: {
    eyebrow: 'Policy quote system',
    title: 'Get your quote in minutes',
    description: 'Start with a few details and we will guide you step by step to your quote.',
    cta: 'Get a Quote',
    helper: 'Clear pricing, guided steps and coverage options that adapt to your needs.',
    highlights: {
      guided: {
        title: 'Guided flow',
        description:
          'Move through each step with a cleaner layout and more context where it matters.',
      },
      flexible: {
        title: 'Flexible coverage',
        description:
          'Compare tiers quickly and fine-tune your quote with only the questions that apply.',
      },
      transparent: {
        title: 'Transparent estimate',
        description:
          'Review your information and monthly quote in a summary designed for quick scanning.',
      },
    },
    process: {
      title: 'A simpler path to your quote',
      description: 'Everything is organized to feel lightweight on mobile and polished on desktop.',
      stepOne: {
        title: 'Share the essentials',
        description:
          'Start with your core details so we can tailor the experience from the first screen.',
      },
      stepTwo: {
        title: 'Pick a coverage level',
        description:
          'Explore the protection tier that fits you best and answer only the relevant questions.',
      },
      stepThree: {
        title: 'Review with confidence',
        description: 'Confirm the full picture in a clear summary before sending your request.',
      },
    },
  },
  result: {
    success: {
      title: 'Everything is ready',
      description:
        'Your quote request was sent successfully. We will continue with the next steps shortly.',
    },
    error: {
      title: "We couldn't complete the request",
      description:
        'Something went wrong while submitting your information. Please try again from the summary.',
    },
    actions: {
      primarySuccess: 'Start a new quote',
      primaryError: 'Try again',
      secondarySuccess: 'Go to home',
      secondaryError: 'Back to summary',
    },
  },
  inputs: {
    labels: {
      fullName: 'Full Name',
      email: 'Email',
      age: 'Age',
      zipCode: 'Zip Code',
      hasPreexistingConditions: 'Do you have any pre-existing medical conditions? (No / Yes)',
      preexistingConditions: 'Which preexisting conditions do you have?',
      prescriptions: 'Do you currently take prescription medication on a regular basis? (No / Yes)',
      smoker: 'Do you smoke or use tobacco products? (No / Yes)',
      spouse: 'Do you require coverage for a spouse or domestic partner? (No / Yes)',
    },
    options: {
      diabetes: 'Diabetes',
      heartDisease: 'Heart Disease',
      hypertension: 'Hypertension',
      cancer: 'Cancer (history or current)',
      other: 'Other',
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
    secondTitle: 'Let’s refine your quote',
    secondDescription: 'Answer a few quick questions to fine-tune your estimate',
  },
  stepThree: {
    title: 'Review your information',
    description: 'Confirm your details before we prepare your quote',
    stepName: 'Summary',
    finalMonthlyQuote: 'Final Monthly Quote',
    monthly: '/ month',
    personalDetails: 'Personal Details',
    coverageDetails: 'Coverage Details',
  },
  summary: {
    fullName: 'Full Name',
    age: 'Age',
    email: 'Email address',
    zipCode: 'Zip Code',
    coverageType: 'Selected coverage',
    hasPreexistingConditions: 'Has Medical conditions',
    existingConditions: 'Conditions selected',
    hasPrescriptions: 'Takes medication regularly',
    isSmoker: 'Uses tobacco',
    hasSpouse: 'Partner included',
  },
}
