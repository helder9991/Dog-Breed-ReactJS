import React, { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'
import { HiExclamationCircle } from 'react-icons/hi'
import { Container, Content, Error, IconContainer } from './styles'

type IProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  error: {
    hasError: boolean
    errorMessage: string
  }
  icon: IconType
  title: string
  type: 'text' | 'email' | 'password'
  placeholder: string
}

const Input: React.FC<IProps> = ({ className, error, icon: Icon, title, type, placeholder, ...props }) => (
  <Container className={className}>
    <h1>{title}</h1>
    <Content hasError={error.hasError} data-testid="inputContent">
      <IconContainer>
        <Icon size={20} data-testid="inputIcon" />
      </IconContainer>

      <input type={type} placeholder={placeholder} {...props} />
      <Error title={error.errorMessage} hasError={error.hasError} data-testid="errorIconContainer">
        <HiExclamationCircle size={20} data-testid="errorIcon" />
      </Error>
    </Content>
  </Container>
)

export default Input
