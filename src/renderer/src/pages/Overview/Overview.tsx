import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs"
import { GridExample } from "../../components/Table/Table"
import TournamentComponent from "../../components/Tournament/Tournament"
import TournamentsList from "../../components/TournamentList/TournamentList"

export const OverviewPage = () => {
  return (
    <>
      <NavigationTabs />
      <TournamentsList />
      <GridExample />
      <TournamentComponent />
    </>
  )
}