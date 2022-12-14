import React, { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

type IProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  text: string
  buttonType?: 'next'
}

const Button: React.FC<IProps> = ({ className, text, buttonType = 'next', ...rest }) => (
  <Container
    type="button"
    className={className}
    buttonType={buttonType}
    {...rest}
  >
    <h1>{text}</h1>
  </Container>
)

export default Button
