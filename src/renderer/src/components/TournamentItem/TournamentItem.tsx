import { Box, Typography, Tooltip } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import TimerIcon from '@mui/icons-material/Timer';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FlagIcon from '@mui/icons-material/Flag';
import { DetailsBox, InfoBox, LocationBox, StyledPaper } from './styled';

type TournamentInfo = {
  name: string;
  location: string;
  date: string;
  timeType: string;
  playerCount: number;
  roundsPlayed: number;
  totalRounds: number;
  countryCode: string;
};

type TournamentListItemProps = {
  tournamentInfo: TournamentInfo;
};

const TournamentListItem = ({ tournamentInfo }: TournamentListItemProps) => {
  return (
    <StyledPaper>
      <InfoBox>
        <Typography variant="h6" gutterBottom>
          {tournamentInfo.name}
        </Typography>
        <DetailsBox>
          <EventIcon fontSize="small" />
          <Typography variant="body2">{tournamentInfo.date}</Typography>
          <GroupIcon fontSize="small" />
          <Typography variant="body2">{tournamentInfo.playerCount} players</Typography>
          <TimerIcon fontSize="small" />
          <Typography variant="body2">{tournamentInfo.timeType}</Typography>
          <PlayArrowIcon fontSize="small" />
          <Typography variant="body2">
            {tournamentInfo.roundsPlayed}/{tournamentInfo.totalRounds} rounds
          </Typography>
        </DetailsBox>
      </InfoBox>
      <LocationBox>
        <Tooltip title={tournamentInfo.location}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FlagIcon sx={{ color: '#0057B7' }} />
            <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
              {tournamentInfo.location}
            </Typography>
          </Box>
        </Tooltip>
      </LocationBox>
    </StyledPaper>
  );
};

export default TournamentListItem;
