import { Button, styled } from '@mui/material'

export const TournamentStatusButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.text.primary,
  padding: '10px 16px',
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  }
}))
