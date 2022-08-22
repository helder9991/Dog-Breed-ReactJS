import React from 'react'
import { HiSun, HiLogout } from 'react-icons/hi'
import { useAuth } from '../../hooks/auth'
import { useTab } from '../../hooks/tab'

import { Container, FloatingMessage } from './styles'

interface IProps {
  toggleTheme: () => void
}

const Header: React.FC<IProps> = ({ toggleTheme }) => {
  const { signOut, user } = useAuth()
  const { setTab } = useTab()

  const handleLogout = (): void => {
    signOut()
    setTab([])
  }

  return (
    <Container>
      <FloatingMessage title='Alterar tema'>
        <button type='button' onClick={toggleTheme} title="Alterar tema" data-testid="theme">
          <HiSun size={32} style={{ color: 'white' }} />
          <b>Alterar tema</b>
        </button>
      </FloatingMessage>

      {Object.keys(user).length > 0 && (
        <FloatingMessage title='Deslogar'>
          <button type='button' onClick={handleLogout} title="Deslogar" data-testid="signOut">
            <HiLogout size={32} style={{ fill: 'white' }} />
            <b>Deslogar</b>
          </button>
        </FloatingMessage>

      )}
    </Container>
  )
}

export default Header
