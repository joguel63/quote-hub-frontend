import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'EN' }))

    expect(changeLanguageMock).toHaveBeenCalledWith('en')
  })

  it('shows spanish as the target language when current language is english', () => {
    languageRef.current = 'en'

    render(<Header />)

    expect(screen.getByRole('button', { name: 'ES' })).toBeInTheDocument()
  })
})
