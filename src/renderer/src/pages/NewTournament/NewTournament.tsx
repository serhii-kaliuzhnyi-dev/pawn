import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';

import BaseLayout from '../../components/BaseLayout';
import ImportTournamentsButton from '../../components/ImportTournamentsButton';
import TournamentForm from '../../components/NewTournamentForm/NewTournamentForm';

const NewTournament = () => {
  return (
    <BaseLayout>
      <Box sx={{ padding: 3 }}>
        <Grid container spacing={3}>
          <Grid size={{ mobile: 12, laptop: 8, desktop: 8 }}>
            <TournamentForm />
          </Grid>
          <Grid
            size={{ mobile: 12, laptop: 4, desktop: 4 }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ImportTournamentsButton />
          </Grid>
        </Grid>
      </Box>
    </BaseLayout>
  );
};

export default NewTournament;
