import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StyledSection = styled(Box)({
  border: '1px solid grey',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(255, 255, 0, 0.5)',
  color: 'black',
  width: '100%',
  padding: 1.3,
});

export const FlexContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const IconTextBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});
