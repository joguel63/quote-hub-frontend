import { Box, Button, Radio, Stack, Typography } from '@mui/material'
import { CoverageRadioGroupOptions } from 'modules/quoteHub/types'
import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'

export const RadioCard = <T extends FieldValues>({
  field,
  options,
}: {
  field: ControllerRenderProps<T, Path<T>>
  options: CoverageRadioGroupOptions[]
}) => {
  const { t } = useTranslation()

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} width="100%">
      {options.map((option, index) => {
        const selected = field.value == option.value

        return (
          <Box key={option.value} sx={styles.root}>
            {option.recommended && (
              <Box sx={styles.recommendedChip}>{t('quoteHub.common.recommended')}</Box>
            )}

            <Box
              component="label"
              htmlFor={`${field.name}-${option.value}`}
              className={selected ? 'selected' : ''}
              sx={styles.radioContainer}
            >
              <Radio
                id={`${field.name}-${option.value}`}
                value={option.value}
                checked={selected}
                slotProps={{ input: { 'aria-label': option.title } }}
                sx={styles.hiddenRadio}
              />

              <Typography variant="overline">
                {t('quoteHub.coverage.tierLabel', { index: `0${index + 1}` })}
              </Typography>
              <Typography variant="h5" sx={styles.title}>
                {option.title}
              </Typography>

              {option.description && (
                <Typography variant="body2" sx={styles.description}>
                  {option.description}
                </Typography>
              )}

              <Button
                type="button"
                fullWidth
                variant={selected ? 'contained' : 'outlined'}
                sx={styles.button}
                onClick={() => field.onChange(option.value)}
              >
                {selected
                  ? t('quoteHub.coverage.actions.current')
                  : t('quoteHub.coverage.actions.select', { title: option.title })}
              </Button>
            </Box>
          </Box>
        )
      })}
    </Stack>
  )
}
