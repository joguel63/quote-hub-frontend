export const quoteHub = {
  common: {
    loading: 'Cargando...',
    back: 'Atrás',
    next: 'Siguiente',
    recommended: 'Recomendado',
  },
  header: {
    title: 'Quote Hub',
  },
  home: {
    title: 'Inicio',
    cta: 'Obtener cotización',
  },
  inputs: {
    labels: {
      fullName: 'Nombre completo',
      email: 'Correo electrónico',
      age: 'Edad',
      zipCode: 'Código postal',
      preexistingConditions: '¿Tienes alguna condición médica?',
      prescriptions: '¿Tomas medicamentos regularmente?',
      smoker: '¿Fumas o usas productos de tabaco?',
      spouse: '¿Tienes un cónyuge y/o pareja?',
    },
    options: {
      diabetes: 'Diabetes',
      hypertension: 'Hipertensión',
    },
    errors: {
      fullNameRequired: 'El nombre completo es obligatorio',
      fullNameMin: 'El nombre completo debe tener al menos 2 caracteres',
      fullNameMax: 'El nombre completo no puede superar los 50 caracteres',
      emailInvalid: 'El formato del correo electrónico no es válido',
      emailRequired: 'El correo electrónico es obligatorio',
      emailMax: 'El correo electrónico no puede superar los 100 caracteres',
      ageType: 'La edad debe ser un número',
      ageRequired: 'La edad es obligatoria',
      ageMin: 'Debes tener al menos 18 años',
      ageMax: 'La edad debe ser menor a 120',
      zipCodeRequired: 'El código postal es obligatorio',
      zipCodeFormat: 'El código postal debe tener exactamente 5 dígitos',
      seniorRequired: 'Este campo es obligatorio para solicitantes de 65 años o más',
      coverageTypeRequired: 'El tipo de cobertura es obligatorio',
      preexistingConditionsRequired: 'Indica al menos una condición preexistente',
    },
  },
  coverage: {
    plans: {
      basic: {
        title: 'Básico',
        description: 'Cobertura esencial para responsabilidades estándar y gastos médicos menores.',
      },
      standard: {
        title: 'Estándar',
        description:
          'Protección mejorada con beneficios adicionales y límites de cobertura más amplios.',
      },
      premium: {
        title: 'Premium',
        description:
          'Protección integral de alto nivel con cobertura médica global y asistencia legal.',
      },
    },
    tierLabel: 'Nivel {{index}}',
    actions: {
      current: 'Seleccionado',
      select: 'Seleccionar {{title}}',
    },
  },
  stepOne: {
    title: 'Cuéntanos sobre ti',
    description: 'Solo necesitamos algunos datos para comenzar tu cotización',
    stepName: 'Información personal',
  },
  stepTwo: {
    title: 'Elige tu cobertura',
    description: 'Selecciona el nivel de protección y cuéntanos sobre tus necesidades actuales',
    stepName: 'Cobertura',
    secondTitle: 'Mejoremos tu cotización',
    secondDescription: 'Responde algunas preguntas rápidas para afinar tu estimación',
  },
  stepThree: {
    title: 'Revisa tu información',
    description: 'Confirma tus datos antes de preparar tu cotización',
    stepName: 'Resumen',
  },
}
