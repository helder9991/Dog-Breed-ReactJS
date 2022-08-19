import styled from 'styled-components'
import Tooltip from '../Tooltip'

export const Container = styled.div`
  position: absolute;
  right: 9%;
  top: 50px;


  button {
    background: none;
    border: none;

    svg {
      fill: ${props => props.theme.colors.icon.secondary}
    }
  }
`
export const FloatingMessage = styled(Tooltip)`

`
