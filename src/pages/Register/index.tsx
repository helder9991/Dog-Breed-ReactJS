import React, { MouseEvent, useCallback, useState } from 'react'
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi'
import { Id, toast } from 'react-toastify'

import { api } from '../../services/api'
import { controlledInput } from '../../utils/controlledInput'
import { validate } from './schemaValidation'

import { Button, Container, Content, Input, Title } from './styles'

const Register: React.FC = () => {
  const defaultInputValue = {
    value: '',
    error: {
      hasError: false,
      errorMessage: ''
    }
  }
  const [email, setEmail] = useState(defaultInputValue)
  const [password, setPassword] = useState(defaultInputValue)
  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback(async (e: MouseEvent): Promise<Id | void> => {
    e.preventDefault()
    const isValid = await validate({
      state: {
        email,
        password
      },
      setState: {
        setEmail,
        setPassword
      }
    })

    if (!isValid) return toast.error('Aconteceu algum erro, verifique.')

    setLoading(prevState => !prevState)
    try {
      await toast.promise(api.post('/register', {
        email: email.value,
        password: password.value
      }), {
        error: 'Aconteceu algum erro no servidor',
        success: 'Usuário logado com sucesso!',
        pending: 'Carregando...'
      })
    } catch (err) {
      throw new Error('Erro durante a requisição')
    } finally {
      setLoading(prevState => !prevState)
    }
  }, [email, password, loading])

  return (
    <Container>
      <Content>
        <Title>Entrar</Title>
        <Input
          type='email'
          title='E-mail'
          placeholder='Digite seu e-mail'
          icon={HiOutlineMail}
          value={email.value}
          error={email.error}
          onChange={e => controlledInput(setEmail, e.target.value)}
        />
        <Input
          type='password'
          title='Senha'
          placeholder='Digite sua senha'
          icon={HiOutlineLockClosed}
          value={password.value}
          error={password.error}
          onChange={e => controlledInput(setPassword, e.target.value)}
        />
        <Button
          text='Logar'
          type='submit'
          buttonType='next'
          disabled={loading}
          onClick={handleSubmit}
        />
      </Content>
    </Container>
  )
}

export default Register
