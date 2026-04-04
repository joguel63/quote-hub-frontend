// This is a sample React component for the home page of QuoteHub module.

import { Button } from '@mui/material'
import { AppRoutes } from 'core/enums'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <Button variant="contained" component={Link} to={AppRoutes.QuotePersonalInformation}>
        Get a Quote
      </Button>
    </div>
  )
}

export default Home
