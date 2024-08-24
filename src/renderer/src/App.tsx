import { ReactElement } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { OverviewPage } from './pages/Overview/Overview'
import { APP_ROUTES } from './constants/appRoutes'

function App(): ReactElement {
  return (
    <>
      <Routes>
        {/* Default Route to /overview */}
        <Route path="/" element={<Navigate to={APP_ROUTES.OVERVIEW} />} />

        {/* Overview Page Route */}
        <Route path={APP_ROUTES.OVERVIEW} element={<OverviewPage />} />

        {/* Catch-all Route to handle undefined paths and redirect to /overview */}
        <Route path="*" element={<Navigate to={APP_ROUTES.OVERVIEW} />} />
      </Routes>
    </>
  )
}

export default App
