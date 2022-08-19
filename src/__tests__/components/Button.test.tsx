import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'

import Button from '../../components/Button'

import AppTestContainer from '../mock/AppTestContainer'

describe('Button Component', () => {
  it('should be able to render the button', () => {
    render(
      <AppTestContainer>
        <Button text="Entrar" />
      </AppTestContainer>
    )

    expect(screen.getByText('Entrar')).toBeInTheDocument()
  })
})
