import { Outlet } from 'react-router-dom'

import { DashboardLayout } from 'layouts/Dashboard'

export const ProtectedRoute = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  )
}
