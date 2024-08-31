import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import BaseLayout from '../../components/BaseLayout/BaseLayout';
import TournamentSidebar from '../../components/TournamentSidebar/TournamentSidebar';
import TournamentList from '../../components/TournamentList/TournamentList';
import { Tournament, TournamentStatus } from '@dto/types';
import { isDraftTournament, isFinishedTournament, isOngoingTournament } from '../../utils';
import { ContainerBox, ContentGrid, SidebarGrid } from './styled';

const TournamentsPage = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [filteredTournaments, setFilteredTournaments] = useState<Tournament[]>([]);
  const [filter, setFilter] = useState<TournamentStatus>('current');

  useEffect(() => {
    const fetchTournaments = async () => {
      const data = await window.api.getTournaments();
      setTournaments(data);
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
      <ContainerBox>
        <Grid container spacing={2}>
          <SidebarGrid size={{mobile: 12, laptop: 3, desktop: 3 }}>
            <TournamentSidebar
              tournaments={tournaments}
              onFilterChange={handleFilterChange}
            />
          </SidebarGrid>
          <ContentGrid size={{ mobile: 12, laptop: 9, desktop: 9 }}>
            <TournamentList tournaments={filteredTournaments} />
          </ContentGrid>
        </Grid>
      </ContainerBox>
    </BaseLayout>
  );
};

export default TournamentsPage;