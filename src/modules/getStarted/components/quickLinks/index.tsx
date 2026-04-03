import React from 'react'

import { DocsUrls } from 'modules/getStarted/enums'
import { QuickLink } from 'modules/getStarted/types'
import styles from './QuickLinks.module.css'

const quickLinks: QuickLink[] = [
  {
    title: 'Vite',
    url: DocsUrls.VITE,
    description: 'Fast build tool for modern web applications',
  },
  {
    title: 'React',
    url: DocsUrls.REACT,
    description: 'JavaScript library for building user interfaces',
  },
  {
    title: 'React Router',
    url: DocsUrls.REACT_ROUTER,
    description: 'Declarative navigation for React applications',
  },
  {
    title: 'TypeScript',
    url: DocsUrls.TYPESCRIPT,
    description: 'JavaScript with static types for more robust development',
  },
]

export const QuickLinks: React.FC = () => {
  return (
    <div className={styles.links}>
      {quickLinks.map((link) => (
        <a
          key={link.title}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <div className={styles.linkTitle}>{link.title}</div>
          <div className={styles.linkDescription}>{link.description}</div>
        </a>
      ))}
    </div>
  )
}
