import styled from 'styled-components'
import Tooltip from '../Tooltip'

export const Container = styled.div`
  position: absolute;
  display: flex;
  right: 9%;
  top: 50px;


  button {
    background: none;
    border: none;

    svg {
      fill: ${props => props.theme.colors.icon.secondary}
    }
  }

  @media(max-width: 768px) {
    top: 25px;
  }
`
export const FloatingMessage = styled(Tooltip)`
  button {
    flex-direction: column;
    align-items: center;
    width: 60px;
    color: ${props => props.theme.colors.text.primary};

    b {
      visibility: hidden;
    }
  }

  & + & {
    margin-left: 15px;
  }

  @media(max-width: 768px) {
    button {
      b {
        visibility: visible;
      }
    }
  }

`
