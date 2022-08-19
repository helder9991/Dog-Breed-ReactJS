import React from 'react'

import { Container } from './styles'

interface IProps {
  title: string
  className?: string
  children: React.ReactNode
}

const Tooltip: React.FC<IProps> = ({ title, className = '', children, ...props }) => {
  return (
    <Container className={className} {...props}>
      {children}
      <span>{title}</span>
    </Container>
  )
}

export default Tooltip
