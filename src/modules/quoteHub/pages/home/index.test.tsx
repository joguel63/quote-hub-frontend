import { render, screen } from '@testing-library/react'
import { es } from 'core/locales/es'
import { AppRoutes } from 'core/enums'
import { MemoryRouter } from 'react-router-dom'
import Home from './index'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const value = key.split('.').reduce<unknown>(
        (current, segment) => {
          if (current && typeof current === 'object' && segment in current) {
            return (current as Record<string, unknown>)[segment]
          }

          return undefined
        },
        { quoteHub: es.quoteHub },
      )

      return typeof value === 'string' ? value : key
    },
  }),
}))

describe('pages/home', () => {
  it('renders the redesigned quote home copy and keeps the CTA route', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )

    expect(screen.getByText(es.quoteHub.home.title)).toBeInTheDocument()
    expect(screen.getByText(es.quoteHub.home.description)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: es.quoteHub.home.cta })).toHaveAttribute(
      'href',
      AppRoutes.QuotePersonalInformation,
    )
  })
})
