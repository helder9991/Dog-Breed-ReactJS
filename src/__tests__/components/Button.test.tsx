import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Button from '../../components/Button'

import theme from '../../styles/themes/light'

describe('Button Component', () => {
  it('should be able to render the button', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button text="Entrar" />
      </ThemeProvider>
    )

    expect(screen.getByText('Entrar')).toBeInTheDocument()
  })
})
