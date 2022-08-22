import React from 'react'
import { Container } from './styles'

interface IProps {
  className?: string
  width: number
}

const Loading: React.FC<IProps> = ({ className, width }) => (
  <Container
    className={className}
    width={width}
  />
)

export default Loading
