import { Button } from '@mui/material'
import { AppRoutes } from 'core/enums'
import { useNavigate } from 'react-router-dom'

const CoveragePage: React.FC = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(AppRoutes.QuotePersonalInformation)
  }
  const handleNext = () => {
    navigate(AppRoutes.QuoteSummary)
  }
  return (
    <>
      coverage
      <Button variant="contained" color="primary" onClick={handleBack}>
        Atras
      </Button>
      <Button variant="contained" color="primary" onClick={handleNext}>
        Siguiente
      </Button>
    </>
  )
}

export default CoveragePage
