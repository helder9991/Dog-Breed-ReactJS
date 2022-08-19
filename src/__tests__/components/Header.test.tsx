import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Header from '../../components/Header'

import AppTestContainer from '../mock/AppTestContainer'

describe('Header Component', () => {
  let currentTheme = 'light'
  const toggleTheme = (): void => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light'
  }

  it('should be able to render the Header', () => {
    render(
      <AppTestContainer>
        <Header toggleTheme={toggleTheme} />
      </AppTestContainer>
    )

    expect(screen.getByText('Alterar tema')).toBeInTheDocument()
  })

  it('should be able to toggle theme', () => {
    render(
      <AppTestContainer>
        <Header toggleTheme={toggleTheme} />
      </AppTestContainer>
    )

    userEvent.click(screen.getByRole('button'))
    expect(currentTheme).toBe('dark')
  })
})
