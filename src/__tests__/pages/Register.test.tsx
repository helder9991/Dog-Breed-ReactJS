import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'

import Register from '../../pages/Register'
import AppTestContainer from '../mock/AppTestContainer'
import { api } from '../../services/api'

const apiMock = new MockAdapter(api)

const mockedUsedNavigate = jest.fn()
const mockedSignIn = jest.fn()

jest.mock('../../hooks/auth', () => ({
  useAuth: () => ({
    signIn: mockedSignIn
  })
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

describe('Register Component', () => {
  beforeEach(() => {
    const data = {
      user: {
        _id: '62fcf90eff45bc1402c932af',
        email: 'user@mail.com',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIyYzJkYzExZC0zODlkLTRiMjQtYjk2Ny05MTE5MTJiOTA0NTUiLCJzdWIiOiI2MmZjZjkwZWZmNDViYzE0MDJjOTMyYWYiLCJpYXQiOjE2NjA3NDU5OTgsImV4cCI6MTY2MjA0MTk5OH0.d375a2mIkmjO1YPsp4Hn5J4Un-poQbHP6ygGaYaiBl0',
        createdAt: '2022-08-17T14:19:58.981Z',
        updatedAt: '2022-08-17T14:19:58.981Z',
        __v: 0
      }
    }

    apiMock
      .onPost('/register')
      .reply(200, { data })
  })

  it('should be able to render the Register page', () => {
    render(
      <AppTestContainer>
        <Register />
      </AppTestContainer>
    )

    expect(screen.getByText('Entrar')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Digite seu e-mail')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Digite sua senha')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should be able to show a error layout feedback', async () => {
    render(
      <AppTestContainer>
        <Register />
      </AppTestContainer>
    )

    fireEvent.change(screen.getByPlaceholderText('Digite seu e-mail'), {
      target: { value: 'user' }
    })
    fireEvent.change(screen.getByPlaceholderText('Digite sua senha'), {
      target: { value: '123' }
    })

    fireEvent.click(screen.getByRole('button'))

    expect(await screen.findByText('A senha precisa ter no minimo 8 dígitos')).toBeInTheDocument()
    expect(await screen.findByText('Digite um email válido')).toBeInTheDocument()
    expect(await screen.findByText('Aconteceu algum erro, verifique.')).toBeInTheDocument()
  })

  it('should be able to login', async () => {
    render(
      <AppTestContainer>
        <Register />
      </AppTestContainer>
    )

    fireEvent.change(screen.getByPlaceholderText('Digite seu e-mail'), {
      target: { value: 'user@mail.com' }
    })
    fireEvent.change(screen.getByPlaceholderText('Digite sua senha'), {
      target: { value: '12345678' }
    })

    fireEvent.click(screen.getByRole('button'))

    expect(await screen.findByText('Carregando...')).toBeInTheDocument()
    expect(await screen.findByText('Usuário logado com sucesso!')).toBeInTheDocument()
    expect(mockedSignIn).toBeCalledTimes(1)
    expect(mockedUsedNavigate).toBeCalledTimes(1)
  })

  it('should be able to throw a server error', async () => {
    apiMock
      .onPost('/register')
      .reply(500)

    render(
      <AppTestContainer>
        <Register />
      </AppTestContainer>
    )

    fireEvent.change(screen.getByPlaceholderText('Digite seu e-mail'), {
      target: { value: 'user@mail.com' }
    })
    fireEvent.change(screen.getByPlaceholderText('Digite sua senha'), {
      target: { value: '12345678' }
    })

    fireEvent.click(screen.getByRole('button'))

    expect(await screen.findByText('Aconteceu algum erro no servidor')).toBeInTheDocument()
    expect(screen.queryByText('Tente novamente mais tarde')).toBeInTheDocument()
  })
})
