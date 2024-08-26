import { NavigationTabs } from "../../components/NavigationTabs/NavigationTabs"
import { GridExample } from "../../components/Table/Table"
import TournamentComponent from "../../components/Tournament/Tournament"

export const OverviewPage = () => {
  return (
    <>
      <NavigationTabs />
      <GridExample />
      <TournamentComponent />
    </>
  )
}