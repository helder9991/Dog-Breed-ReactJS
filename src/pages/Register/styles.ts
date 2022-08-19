import styled from 'styled-components'

import InputComponent from '../../components/Input'
import ButtonComponent from '../../components/Button'

export const Container = styled.div`
  flex: 1;
  background: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 480px;
  height: 400px;
  padding: 30px 0;
  background: ${props => props.theme.colors.modalBackground};

  box-shadow: 3px 2px 9px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media (max-width: 670px) {
    width: 80%;
    min-width: 360px;
  }
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
`

export const Input = styled(InputComponent)`
  width: 300px !important;

  svg {
    fill: ${props => props.theme.colors.icon.primary}
  }

  & + & {
      margin-top: -20px;
  }
`

export const Button = styled(ButtonComponent)`
  width: 300px;
`
