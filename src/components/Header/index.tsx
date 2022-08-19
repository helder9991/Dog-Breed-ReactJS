import React from 'react'
import { HiSun } from 'react-icons/hi'

import { Container, FloatingMessage } from './styles'

interface IProps {
  toggleTheme: () => void
}

const Header: React.FC<IProps> = ({ toggleTheme }) => (
  <Container>
    <FloatingMessage title='Alterar tema'>
      <button onClick={toggleTheme}>
        <HiSun size={32} style={{ color: 'white' }} />
      </button>
    </FloatingMessage>
  </Container>
)

export default Header
