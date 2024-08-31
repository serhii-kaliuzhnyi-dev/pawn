export type Tournament = {
  id: number;
  name: string;
  location: string;
  date: string;
  timeType: string;
  playerCount: number;
  roundsPlayed: number;
  totalRounds: number;
  countryCode: string;
}

export type TournamentStatus = 'current' | 'draft' | 'finished';
