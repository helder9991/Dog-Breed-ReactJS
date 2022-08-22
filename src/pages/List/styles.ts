import styled, { css } from 'styled-components'

import Tabs from '../../components/Tabs'

interface IContentProps {
  loading: 'true' | 'false'
}

export const Container = styled.div`
  flex: 1;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 768px) {
    margin: 60px 25px 0 0;
  }

  @media (max-width: 600px) {
    width: 100vw;
  }

  @media (max-width: 425px) {
    margin: 80px 25px 0 0;
  }
`

export const Content = styled.div<IContentProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 15px;
  column-gap: 15px;

  align-items: center;
  width: 75%;
  height: 68%;
  padding: 30px 25px;
  background: ${props => props.theme.colors.modalBackground};
  overflow-y: auto;

  box-shadow: 3px 2px 9px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 8px 8px 8px;

  ${(props) => props.loading === 'true' && (
    css`
      grid-template-columns: repeat(1, 1fr) !important;
    `)
  }

  button {
    border: none;
    background: none;

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }


  @media (max-width: 930px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 740px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 500px) {
    height: 85%;
    grid-template-columns: repeat(1, 1fr);
    padding: 30px 10px;
  }
  
  @media (max-width: 670px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    border-radius: 0 0 8px 8px;
    width: 100%;
  }
`

export const TabsContainer = styled(Tabs)`
  width: 75%;

  @media (max-width: 670px) {
    width: 80%;
    min-width: 360px;
  }

  @media (max-width: 605px) {
    overflow-x: scroll;
    width: 90%;
  }
`
