import React from 'react'
import { QuickLinks, Steps } from '../../components'
import { useColorScheme } from '../../hooks'
import styles from './GetStartedPage.module.css'
import reactLogo from '../../../../assets/react.svg'

const GetStartedPage: React.FC = () => {
  const { theme, toggleTheme } = useColorScheme()
  const version = '1.0.0'
  const environment = 'development'

  return (
    <div className={styles.container}>
      <button
        className={styles.themeToggle}
        onClick={toggleTheme}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <header className={styles.header}>
        <img src={reactLogo} className={styles.logo} alt="React logo" />
        <h1 className={styles.title}>Welcome to React!</h1>
        <p className={styles.subtitle}>
          A simple template with Vite, React, TypeScript and React Router
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Environment Information</h2>
        <div className={styles.envInfo}>
          <div className={styles.envItem}>
            <div className={styles.envLabel}>Mode</div>
            <div className={styles.envValue}>{environment}</div>
          </div>
          <div className={styles.envItem}>
            <div className={styles.envLabel}>Version</div>
            <div className={styles.envValue}>{version}</div>
          </div>
          <div className={styles.envItem}>
            <div className={styles.envLabel}>Theme</div>
            <div className={styles.envValue}>{theme}</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Getting Started</h2>
        <Steps />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Useful Links</h2>
        <p style={{ color: 'var(--fg-secondary)', marginBottom: '1.5rem' }}>
          Essential documentation for development with this technology stack
        </p>
        <QuickLinks />
      </section>
    </div>
  )
}

export default GetStartedPage
