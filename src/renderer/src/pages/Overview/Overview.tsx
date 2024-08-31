import TournamentItem from '@renderer/components/TournamentItem/TournamentItem'
import TournamentSidebar from '../../components/TournamentSidebar/TournamentSidebar'

export const OverviewPage = () => {
  return (
    <>
      <TournamentSidebar />
      <TournamentItem date={123} count={12312} status={1231} ratio={3213213} location={43243243} />
    </>
  )
}
