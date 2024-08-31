import TournamentSidebar from '../../components/TournamentSidebar/TournamentSidebar'
import TournamentListItem from '@renderer/components/TournamentItem/TournamentItem'

export const OverviewPage = () => {
  const tournamentInfo = {
    name: "Qualifying tournament for the championship of Ukraine among club teams",
    location: "Kharkiv, Ukraine",
    date: "28.04.2018",
    timeType: "Rapid",
    playerCount: 45,
    roundsPlayed: 2,
    totalRounds: 9,
    countryCode: "UA",
  };

  return (
    <>
      <TournamentSidebar />
      <TournamentListItem tournamentInfo={tournamentInfo}/>
    </>
  )
}
