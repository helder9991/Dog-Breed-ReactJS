import styled, { css } from 'styled-components'
import Tooltip from '../Tooltip'

interface IErrorProps {
  hasError: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  h1 {
    font-size: 18px;
  }
  input {
    border: none;
    width: 70%;
    margin: 0 10px;
    background: ${props => props.theme.colors.input.background};
    color: ${props => props.theme.colors.input.text};

    label {
      flex: 1;
      display: flex;
      align-items: center;
    }
  }
`
export const Content = styled.div<IErrorProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0 1.5px ${props => props.theme.colors.input.border};
  border-radius: 3px;
  height: 40px;
  background: ${props => props.theme.colors.input.background};
  color: ${props => props.theme.colors.input.text};
  margin: 5px 0 0 0;
  transition: box-shadow 1s;

    
  ${props =>
    props.hasError &&
    css`
      box-shadow: 0 0 0 2.5px ${() => props.hasError && props.theme.colors.error};
  `}
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.input.border};
  width: 15%; 
  height: 40px;
  border-radius: 2px 0 0 2px;
`

export const Error = styled(Tooltip) <IErrorProps>`
  height: 20px;
  margin-right: 12px;
  visibility: ${props => props.hasError ? 'visible' : 'hidden'};
  svg {
    margin: 0;
    fill: ${props => props.theme.colors.error} !important;
  }
  span {
    background: ${props => props.theme.colors.error};
    color: #fff;
    &::before {
      border-color: ${props => props.theme.colors.error} transparent;
    }
  }
`
