import styled from 'styled-components'

interface IProps {
  width: number
}

export const Container = styled.div<IProps>`
  border: 8px solid #c4c4c4;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: ${props => `${props.width}px`};
  height: ${props => `${props.width}px`};
  animation: spin 2s linear infinite;
  align-self: center;
  justify-self: center;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
