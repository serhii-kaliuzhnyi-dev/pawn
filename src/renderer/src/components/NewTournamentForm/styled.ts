import { Box, Grid2, styled, Typography } from '@mui/material';

export const FormContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: '1200px',
}));

export const StyledGrid = styled(Grid2)(() => ({
  width: '100%',
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
}));

export const HeaderTypography = styled(Typography)(() => ({
  color: 'black',
}));
