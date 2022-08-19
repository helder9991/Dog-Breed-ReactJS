import { shade } from 'polished'
import styled from 'styled-components'

interface IButtonProps {
  buttonType: 'next'
}

export const Container = styled.button<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => {
    switch (props.buttonType) {
      case 'next':
        return props.theme.colors.button.next
    }
  }};

  height: 45px;
  border-radius: 4px;
  border: none;

  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));

  h1 {
    color: ${props => props.theme.colors.button.text};
    font-size: 22px;
  }

  &:disabled {
    cursor: auto;
    background: ${props => {
    switch (props.buttonType) {
      case 'next':
        return shade(0.5, props.theme.colors.button.next)
    }
  }};
  }
`
