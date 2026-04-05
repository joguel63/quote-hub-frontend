import { MultiselectOptions } from 'core/types'
import { t } from 'i18next'

/**
 * formats a number as currency in USD format
 * @param value a number to be formatted as currency
 * @returns formatted currency string in USD format
 */
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value)
}

/**
 * formats a boolean value to a localized string representation (Yes/No)
 * @param value a boolean value to be formatted
 * @returns a localized string representation of the boolean value ('Yes' or 'No')
 */
const formatBoolean = (value: boolean) => {
  if (!value) return t('quoteHub.common.no')
  return t('quoteHub.common.yes')
}

/**
 * formats an array of MultiselectOptions to an array of their labels
 * @param values an array of MultiselectOptions to be formatted
 * @returns an array of strings containing the labels of the provided MultiselectOptions
 */
const formatMultiselectValues = (values: MultiselectOptions[] = []): string[] => {
  return values.map((option) => option.label)
}

export const formatters = { formatCurrency, formatBoolean, formatMultiselectValues }
