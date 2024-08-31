import { Box, Typography, Tooltip } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import TimerIcon from '@mui/icons-material/Timer';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FlagIcon from '@mui/icons-material/Flag';
import { DetailsBox, InfoBox, LocationBox, StyledPaper } from './styled';
import { Tournament } from '@dto/types';

type TournamentListItemProps = {
  tournament: Tournament;
};

const TournamentListItem = ({ tournament }: TournamentListItemProps) => {
  return (
    <StyledPaper>
      <InfoBox>
        <Typography variant="h6" gutterBottom>
          {tournament.name}
        </Typography>
        <DetailsBox>
          <EventIcon fontSize="small" />
          <Typography variant="body2">{tournament.date}</Typography>
          <GroupIcon fontSize="small" />
          <Typography variant="body2">{tournament.playerCount} players</Typography>
          <TimerIcon fontSize="small" />
          <Typography variant="body2">{tournament.timeType}</Typography>
          <PlayArrowIcon fontSize="small" />
          <Typography variant="body2">
            {tournament.roundsPlayed}/{tournament.totalRounds} rounds
          </Typography>
        </DetailsBox>
      </InfoBox>
      <LocationBox>
        <Tooltip title={tournament.location}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FlagIcon sx={{ color: '#0057B7' }} />
            <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
              {tournament.location}
            </Typography>
          </Box>
        </Tooltip>
      </LocationBox>
    </StyledPaper>
  );
};

export default TournamentListItem;
