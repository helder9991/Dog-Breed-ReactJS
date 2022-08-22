import styled from 'styled-components'
import ButtonInput from '../Button'

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.8);
  z-index: 2;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  
  img {
    height: 80vh;
    object-fit: contain
  }
`

export const Button = styled(ButtonInput)`
  width: 300px;
  align-self: center;
  margin-top: 25px;
`
