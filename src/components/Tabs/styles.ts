import styled, { css } from 'styled-components'

interface ITabProps {
  selected: boolean
}

export const Container = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  border-radius: 6px 6px 0px 0px;

  @media (max-width: 600px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`

export const Tab = styled.li<ITabProps>`
  border-radius: 6px 6px 0px 0px;
  width: 13%;
  padding: 10px 15px;
  box-shadow: 5px -3px 4px rgba(0, 0, 0, 0.25);
  list-style-type: none;    
  text-align: center;
  font-size: 1.1rem;
  z-index: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: ${props => props.theme.colors.modalBackground};
  min-width: 120px;

  ${props => !props.selected && (
    css`
      border: 1px solid #c4c4c4;
      border-width: 0 1px 0 0;
      filter: brightness(85%);
      z-index: 0;
    `
  )}

  &:hover { 
    cursor: pointer;
  }
`
