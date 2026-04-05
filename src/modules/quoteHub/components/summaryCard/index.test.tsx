import { render, screen } from '@testing-library/react'
import { SummaryCard } from './index'

describe('SummaryCard', () => {
  it('renders title, labels and primitive values', () => {
    render(
      <SummaryCard
        title="Personal Details"
        fields={[
          { label: 'Full Name', value: 'Jane Doe' },
          { label: 'Age', value: 65 },
        ]}
      />,
    )

    expect(screen.getByText('Personal Details')).toBeInTheDocument()
    expect(screen.getByText('Full Name')).toBeInTheDocument()
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    expect(screen.getByText('Age')).toBeInTheDocument()
    expect(screen.getByText('65')).toBeInTheDocument()
  })

  it('renders array values as chips', () => {
    render(
      <SummaryCard
        title="Coverage Details"
        fields={[{ label: 'Conditions', value: ['Diabetes', 'Hypertension'] }]}
      />,
    )

    expect(screen.getByText('Conditions')).toBeInTheDocument()
    expect(screen.getByText('Diabetes')).toBeInTheDocument()
    expect(screen.getByText('Hypertension')).toBeInTheDocument()
  })

  it('renders custom react nodes unchanged', () => {
    render(
      <SummaryCard
        title="Custom"
        fields={[{ label: 'Status', value: <span>Custom Node</span> }]}
      />,
    )

    expect(screen.getByText('Status')).toBeInTheDocument()
    expect(screen.getByText('Custom Node')).toBeInTheDocument()
  })
})
