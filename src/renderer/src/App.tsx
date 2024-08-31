import { ReactElement } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { APP_ROUTES } from './constants/appRoutes'
import TournamentsPage from './pages/Tournaments/Tournaments'
import NewTournament from './pages/NewTournament/NewTournament'

function App(): ReactElement {
  return (
    <>
      <Routes>
        {/* Default Route to /overview */}
        <Route path="/" element={<Navigate to={APP_ROUTES.TOURNAMENTS} />} />

        {/* Overview Page Route */}
        <Route path={APP_ROUTES.TOURNAMENTS} element={<TournamentsPage />} />
        <Route path={APP_ROUTES.NEW_TOURNAMENT} element={<NewTournament />} />

        {/* Catch-all Route to handle undefined paths and redirect to /overview */}
        <Route path="*" element={<Navigate to={APP_ROUTES.TOURNAMENTS} />} />
      </Routes>
    </>
  )
}

export default App
