import { Navigate, Route, Routes } from 'react-router-dom'

import { ProtectedRoute } from './ProtectedRoute'

import useScrollToTop from 'hooks/useScrollToTop'
import { E_Routes } from 'models/routes'
import * as Pages from 'pages'

export const AppRoutes = () => {
  useScrollToTop()
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path={E_Routes.calls} element={<Pages.Calls />} />
        <Route path='*' element={<Navigate to={E_Routes.calls} />} />
      </Route>
    </Routes>
  )
}
