import React from 'react'
import { Button, Container, ModalContainer } from './styles'

interface IProps {
  children: React.ReactNode
  handleClose: () => void
}

const Modal: React.FC<IProps> = ({ handleClose, children }) => {
  return (
    <Container>
      <ModalContainer>
        {children}
        <Button onClick={handleClose} text='Fechar' />
      </ModalContainer>
    </Container>
  )
}

export default Modal
