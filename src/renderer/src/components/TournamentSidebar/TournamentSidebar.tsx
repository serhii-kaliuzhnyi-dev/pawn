import { Box, Button, Paper, InputBase, List, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
import TournamentStatusButton from './TournamentStatusButton';
import { Tournament, TournamentStatus } from '@dto/types';
import { isDraftTournament, isFinishedTournament, isOngoingTournament } from '../../utils';

type TournamentSidebarProps = {
  tournaments: Tournament[];
  onFilterChange: (filter: TournamentStatus) => void;
};

const TournamentSidebar = ({ tournaments, onFilterChange }: TournamentSidebarProps) => {
  const { t } = useTranslation();

  const handleNewTournament = () => {
    console.log('New tournament clicked');
  };

  // Calculate the counts for each tournament status using utility functions
  const currentTournamentsCount = tournaments.filter(isOngoingTournament).length;
  const draftTournamentsCount = tournaments.filter(isDraftTournament).length;
  const finishedTournamentsCount = tournaments.filter(isFinishedTournament).length;

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
        <TournamentStatusButton
          label={t('currentTournaments')}
          count={currentTournamentsCount}
          onClick={() => onFilterChange('current')}
        />
        <Divider />
        <TournamentStatusButton 
          label={t('draftTournaments')}           
          count={draftTournamentsCount}
          onClick={() => onFilterChange('draft')} 
        />
        <Divider />
        <TournamentStatusButton
          label={t('finishedTournaments')}
          count={finishedTournamentsCount}
          onClick={() => onFilterChange('finished')}
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
  );
};

export default TournamentSidebar;
