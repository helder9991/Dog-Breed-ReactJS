import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import userEvent from '@testing-library/user-event'

import Header from '../../components/Header'

import theme from '../../styles/themes/light'

describe('Header Component', () => {
  let currentTheme = 'light'
  const toggleTheme = (): void => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light'
  }

  it('should be able to render the Header', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />
      </ThemeProvider>
    )

    expect(screen.getByText('Alterar tema')).toBeInTheDocument()
  })

  it('should be able to toggle theme', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />
      </ThemeProvider>
    )

    userEvent.click(screen.getByRole('button'))
    expect(currentTheme).toBe('dark')
  })
})
