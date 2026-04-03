import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'src/core/declarations/*', 'yarn.lock', 'src/core/fonts/*'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: false, // Sigue exigiendo tipo en las expresiones de función normales
          allowTypedFunctionExpressions: true, // Ignora funciones tipadas explícitamente, como React.FC
          allowHigherOrderFunctions: true, // Permite funciones que retornan otras funciones
        },
      ],
      '@typescript-eslint/no-unused-vars': ['error'],
      'max-lines-per-function': ['error', 300],
    },
  },
)
