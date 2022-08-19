import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { render, screen } from '@testing-library/react'

import Input from '../../components/Input'

import theme from '../../styles/themes/light'
import AppTestContainer from '../mock/AppTestContainer'

describe('Input Component', () => {
  let state = {
    value: '',
    error: {
      hasError: false,
      errorMessage: ''
    }
  }
  const setValue = (e: any): void => {
    state.value = e.target.value
  }

  it('should be able to render the input', () => {
    render(
      <AppTestContainer>
        <Input
          title='email'
          type="email"
          value={state.value}
          error={state.error}
          placeholder="Digite seu e-mail"
          icon={HiOutlineMail}
          onChange={setValue}

        />
      </AppTestContainer>
    )

    expect(screen.getByText('email')).toBeInTheDocument()
    expect(screen.getByTestId('inputContent')).toHaveStyle(`box-shadow: 0 0 0 1.5px ${theme.colors.input.border}`)
    expect(screen.getByTestId('inputIcon')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Digite seu e-mail')).toBeInTheDocument()
  })

  it('should be able to show an error icon, tooltip message and change border color', () => {
    state = {
      value: '',
      error: {
        hasError: true,
        errorMessage: 'Algum erro'
      }
    }

    render(
      <AppTestContainer>
        <Input
          title='email'
          type="email"
          value={state.value}
          error={state.error}
          placeholder="Digite seu e-mail"
          icon={HiOutlineMail}
          onChange={setValue}

        />
      </AppTestContainer>
    )
    expect(screen.getByTestId('inputContent')).toHaveStyle(`box-shadow: 0 0 0 2.5px ${theme.colors.error}`)
    expect(screen.getByTestId('errorIcon')).toBeInTheDocument()
    expect(screen.getByText('Algum erro')).toBeInTheDocument()
  })

  it('should not be able to show an error icon with tooltip message', () => {
    state = {
      value: '',
      error: {
        hasError: false,
        errorMessage: 'Algum erro'
      }
    }
    const setValue = jest.fn((e) => {
      state.value = e.target.value
    })

    render(
      <AppTestContainer>
        <Input
          title='email'
          type="email"
          value={state.value}
          error={state.error}
          placeholder="Digite seu e-mail"
          icon={HiOutlineMail}
          onChange={setValue}

        />
      </AppTestContainer>
    )

    expect(screen.getByTestId('errorIconContainer')).toHaveStyle('visibility: hidden;')
  })
})
