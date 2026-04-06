export const quoteHub = {
  common: {
    loading: 'Cargando...',
    back: 'Volver',
    next: 'Siguiente',
    recommended: 'Recomendado',
    yes: 'Sí',
    no: 'No',
    sendQuote: 'Enviar cotización',
  },
  header: {
    title: 'Quote Hub',
  },
  home: {
    title: 'Obtén tu cotización en minutos',
    description: 'Comienza con unos pocos datos y te guiaremos paso a paso hasta tu cotización.',
    cta: 'Obtener cotización',
  },
  result: {
    success: {
      title: 'Todo está listo',
      description:
        'Tu solicitud de cotización se envió correctamente. En breve continuaremos con los siguientes pasos.',
    },
    error: {
      title: 'No pudimos completar la solicitud',
      description:
        'Ocurrió un problema al enviar tu información. Inténtalo nuevamente desde el resumen.',
    },
    actions: {
      primarySuccess: 'Crear otra cotización',
      primaryError: 'Intentar de nuevo',
      secondarySuccess: 'Ir al inicio',
      secondaryError: 'Ir al inicio',
    },
  },
  inputs: {
    labels: {
      fullName: 'Nombre completo',
      email: 'Correo electrónico',
      age: 'Edad',
      zipCode: 'Código postal',
      hasPreexistingConditions: '¿Tienes alguna condición médica? (No / Sí)',
      preexistingConditions: '¿Cuáles condiciones preexistentes tienes?',
      prescriptions: '¿Tomas medicamentos regularmente? (No / Sí)',
      smoker: '¿Fumas o usas productos de tabaco? (No / Sí)',
      spouse: '¿Tienes un cónyuge y/o pareja? (No / Sí)',
    },
    options: {
      diabetes: 'Diabetes',
      heartDisease: 'Enfermedad cardíaca',
      hypertension: 'Hipertensión',
      cancer: 'Cáncer (histórico o actual)',
      other: 'Otra',
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
    finalMonthlyQuote: 'Cotización mensual final',
    monthly: '/ mes',
    personalDetails: 'Detalles personales',
    coverageDetails: 'Detalles de cobertura',
  },

  summary: {
    fullName: 'Nombre completo',
    age: 'Edad',
    email: 'Correo electrónico',
    zipCode: 'Código postal',
    coverageType: 'Cobertura seleccionada',
    hasPreexistingConditions: 'Condiciones médicas',
    existingConditions: 'Condiciones seleccionadas',
    hasPrescriptions: 'Toma medicamentos regularmente',
    isSmoker: 'Uso de tabaco',
    hasSpouse: 'Incluye pareja',
  },
}
