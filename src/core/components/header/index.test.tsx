import { render, screen } from '@testing-library/react'
import { AppRoutes } from 'core/enums'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { Header } from './index'

const { changeLanguageMock, languageRef } = vi.hoisted(() => ({
  changeLanguageMock: vi.fn(),
  languageRef: { current: 'es' },
}))

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => ({ 'quoteHub.header.title': 'Quote Hub' })[key] ?? key,
    i18n: {
      language: languageRef.current,
      changeLanguage: changeLanguageMock,
    },
  }),
}))

describe('core/components/header', () => {
  beforeEach(() => {
    changeLanguageMock.mockReset()
    languageRef.current = 'es'
  })

  it('shows the target language and toggles to english when current language is spanish', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    await user.click(screen.getByRole('button', { name: 'EN' }))

    expect(changeLanguageMock).toHaveBeenCalledWith('en')
  })

  it('shows spanish as the target language when current language is english', () => {
    languageRef.current = 'en'

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    expect(screen.getByRole('button', { name: 'ES' })).toBeInTheDocument()
  })

  it('links the Quote Hub brand to quote home', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: 'Quote Hub' })).toHaveAttribute('href', AppRoutes.Quote)
  })
})
