import React from 'react'
import { Route, Routes } from 'react-router-dom'
import List from '../pages/List'

import Register from '../pages/Register'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const AppRoutes: React.FC = () => (
  <Routes>
    {/* Public Routes */}
    <Route element={<PublicRoutes />}>
      <Route path="/" element={<Register />} />
    </Route>

    {/* Private Routes */}
    <Route element={<PrivateRoutes />}>
      <Route path="/list" element={<List />} />
    </Route>
  </Routes>
)

export default AppRoutes
