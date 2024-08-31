import { Grid, Box } from '@mui/material';
import BaseLayout from '../../components/BaseLayout/BaseLayout';
import TournamentSidebar from '../../components/TournamentSidebar/TournamentSidebar';
import TournamentList from '../../components/TournamentList/TournamentList';
import { useEffect, useState } from 'react';
import { Tournament, TournamentStatus } from '@dto/types';
import { isDraftTournament, isFinishedTournament, isOngoingTournament } from '../../utils';

const TournamentsPage = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [filteredTournaments, setFilteredTournaments] = useState<Tournament[]>([]);
  const [filter, setFilter] = useState<TournamentStatus>('current');

  useEffect(() => {
    const fetchTournaments = async () => {
      const data = await window.api.getTournaments();
      setTournaments(data);
       // Initially show current tournaments
      setFilteredTournaments(data.filter(isOngoingTournament));
    };

    fetchTournaments();
  }, []);

  useEffect(() => {
    const filterTournaments = () => {
      switch (filter) {
        case 'current':
          setFilteredTournaments(tournaments.filter(isOngoingTournament));
          break;
        case 'draft':
          setFilteredTournaments(tournaments.filter(isDraftTournament));
          break;
        case 'finished':
          setFilteredTournaments(tournaments.filter(isFinishedTournament));
          break;
        default:
          setFilteredTournaments([]);
          break;
      }
    };

    filterTournaments();
  }, [filter, tournaments]);

  const handleFilterChange = (newFilter: TournamentStatus) => setFilter(newFilter);

  return (
    <BaseLayout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TournamentSidebar
              tournaments={tournaments}
              onFilterChange={handleFilterChange}
            />
          </Grid>
          <Grid item xs={9}>
            <TournamentList tournaments={filteredTournaments} />
          </Grid>
        </Grid>
      </Box>
    </BaseLayout>
  );
};

export default TournamentsPage;
