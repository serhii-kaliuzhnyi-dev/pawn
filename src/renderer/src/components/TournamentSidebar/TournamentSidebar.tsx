import { Box, Button, Paper, Typography, InputBase, List, Divider } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { TournamentStatusButton } from './styled'
import { useTranslation } from 'react-i18next'

type TournamentStatusProps = {
  label: string
  count: number
  onClick: () => void
}

const TournamentStatus = ({ label, count, onClick }: TournamentStatusProps) => (
  <TournamentStatusButton onClick={onClick} fullWidth>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <Typography variant="body1">{label}</Typography>
      <Typography variant="body2">{count}</Typography>
    </Box>
  </TournamentStatusButton>
)

const TournamentSidebar = () => {
  const { t } = useTranslation()

  const handleNewTournament = () => {
    console.log('New tournament clicked')
  }

  const showCurrentTournaments = () => {
    console.log('Current tournaments clicked')
  }

  const showDraftTournaments = () => {
    console.log('Draft tournaments clicked')
  }

  const showFinishedTournaments = () => {
    console.log('Finished tournaments clicked')
  }

  return (
    <Paper elevation={3} sx={{ width: 250, padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleNewTournament}
          sx={{ width: '100%', backgroundColor: '#3A3D91' }}
        >
          {t('newTournament')}
        </Button>
      </Box>
      <List disablePadding>
        <TournamentStatus
          label={t('currentTournaments')}
          count={1}
          onClick={showCurrentTournaments}
        />
        <Divider />
        <TournamentStatus label={t('draftTournaments')} count={0} onClick={showDraftTournaments} />
        <Divider />
        <TournamentStatus
          label={t('finishedTournaments')}
          count={2}
          onClick={showFinishedTournaments}
        />
      </List>
      <Box sx={{ mt: 2 }}>
        <InputBase
          placeholder={t('search')}
          fullWidth
          sx={{
            padding: '4px 8px',
            border: '1px solid #ccc',
            borderRadius: 4
          }}
        />
      </Box>
    </Paper>
  )
}

export default TournamentSidebar
