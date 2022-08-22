import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

const PrivateRoutes: React.FC = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate('/')
    }
  }, [user])

  return <Outlet />
}

export default PrivateRoutes
