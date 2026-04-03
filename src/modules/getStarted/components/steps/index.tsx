import React from 'react'

import { Step } from 'modules/getStarted/types'
import styles from './Steps.module.css'

const steps: Step[] = [
  {
    command: 'yarn dev',
    description: 'Start the development server with hot-reload to develop your application',
  },
  {
    command: 'yarn build',
    description: 'Build the application for production with optimizations and minification',
  },
  {
    command: 'yarn preview',
    description: 'Preview the production build locally before deployment',
  },
]

export const Steps: React.FC = () => {
  return (
    <ol className={styles.steps}>
      {steps.map((step, index) => (
        <li key={step.command} className={styles.step}>
          <div className={styles.stepNumber}>{index + 1}</div>
          <div className={styles.stepContent}>
            <div className={styles.stepCommand}>{step.command}</div>
            <div className={styles.stepDescription}>{step.description}</div>
          </div>
        </li>
      ))}
    </ol>
  )
}
