import { Tournament } from '@dto/types';

export const isFinishedTournament = (tournament: Tournament): boolean => {
  return tournament.roundsPlayed === tournament.totalRounds;
};

export const isOngoingTournament = (tournament: Tournament): boolean => {
  return (
    tournament.roundsPlayed > 0 &&
    tournament.roundsPlayed < tournament.totalRounds
  );
};

export const isDraftTournament = (tournament: Tournament): boolean => {
  return tournament.roundsPlayed === 0;
};
