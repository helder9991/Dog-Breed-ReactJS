import React from 'react'
import { HiSun, HiLogout } from 'react-icons/hi'
import { useAuth } from '../../hooks/auth'

import { Container, FloatingMessage } from './styles'

interface IProps {
  toggleTheme: () => void
}

const Header: React.FC<IProps> = ({ toggleTheme }) => {
  const { signOut } = useAuth()

  const handleLogout = (): void => {
    signOut()
  }

  return (
    <Container>
      <FloatingMessage title='Alterar tema'>
        <button type='button' onClick={toggleTheme}>
          <HiSun size={32} style={{ color: 'white' }} />
        </button>
      </FloatingMessage>
      <FloatingMessage title='Deslogar'>
        <button type='button' onClick={handleLogout}>
          <HiLogout size={32} style={{ fill: 'white' }} />
        </button>
      </FloatingMessage>
    </Container>
  )
}

export default Header
