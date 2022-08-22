import React, { useEffect } from 'react'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

const PublicRoutes: React.FC = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (Object.keys(user).length > 0 && location.pathname === '/') {
      navigate('/list')
    }
  }, [])

  return <Outlet />
}

export default PublicRoutes
