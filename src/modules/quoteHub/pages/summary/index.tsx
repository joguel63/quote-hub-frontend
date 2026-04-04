import { Button } from '@mui/material'
import { AppRoutes } from 'core/enums'
import { useNavigate } from 'react-router-dom'

const SummaryPage: React.FC = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(AppRoutes.QuoteCoverage)
  }

  const handleNext = () => {
    // navigate to the next page or perform any action needed
  }
  return (
    <>
      summary
      <Button variant="contained" color="primary" onClick={handleBack}>
        Atras
      </Button>
      <Button variant="contained" color="primary" onClick={handleNext}>
        Siguiente
      </Button>
    </>
  )
}

export default SummaryPage
