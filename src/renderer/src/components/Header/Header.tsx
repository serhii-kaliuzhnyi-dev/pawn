import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#3A3D91', width: '100%' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ marginLeft: 1 }}>
            Pawn
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
