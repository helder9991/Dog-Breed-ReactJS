import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Header from '../../components/Header'

import AppTestContainer from '../mock/AppTestContainer'

const mockedUsedNavigate = jest.fn()
const mockedSignOut = jest.fn()

jest.mock('../../hooks/auth', () => ({
  useAuth: () => ({
    signOut: mockedSignOut,
    user: {
      token: 'test'
    }
  })
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

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

    expect(screen.getByTestId('theme')).toBeInTheDocument()
  })

  it('should be able to toggle theme', () => {
    render(
      <AppTestContainer>
        <Header toggleTheme={toggleTheme} />
      </AppTestContainer>
    )

    userEvent.click(screen.getByTestId('theme'))
    expect(currentTheme).toBe('dark')
  })

  it('should be able to signOut', () => {
    render(
      <AppTestContainer>
        <Header toggleTheme={toggleTheme} />
      </AppTestContainer>
    )

    userEvent.click(screen.getByTestId('signOut'))
    expect(mockedSignOut).toBeCalled()
  })
})
