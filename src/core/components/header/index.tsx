import { AppBar, Toolbar, Typography } from '@mui/material'

export const Header: React.FC = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6">Quote Hub</Typography>
      </Toolbar>
    </AppBar>
  )
}
