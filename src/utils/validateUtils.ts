import * as Yup from 'yup'
import { IInputSetState } from './controlledInput'

export interface IInputStateProps {
  [key: string]: {
    value: string | number
    error: {
      hasError: boolean
      errorMessage: string
    }
  }
}
export interface ISetStateProps {
  [key: string]: IInputSetState
}

export interface IValidateProps {
  state: IInputStateProps
  setState: ISetStateProps
}

export interface IValidationErrorReturn {
  path: string
  message: string
}

function getValidationErrors(err: any): IValidationErrorReturn[] {
  const validationErrors: IValidationErrorReturn[] = []

  if (err instanceof Yup.ValidationError) {
    err.inner.forEach(error => {
      if (error.path != null) {
        validationErrors.push({
          path: error.path,
          message: error.message
        })
      }
    })
  }
  return validationErrors
}

/* A funcao cria um objeto apenas com os values dos states para realizar a validação
  email: {
    value: 'john@mail.com',
    error: true
  }
  password: {
    value: '123456',
    error: true
  }

  vira

  {
    nome: 'John'
    password: '123456'
  }

*/
const getValue = (states: IInputStateProps): object => {
  const values: { [key: string]: any } = {}

  Object.entries(states).forEach(([key, state]) => {
    values[key] = state.value
  })

  return values
}

/* A função setState e coloca o error como true
  state: {
    value: 'John',
    error: true
    error: 'mensagem de erro'
  }
*/
const setErrors = (inputs: IValidateProps, errors: IValidationErrorReturn[]): void => {
  Object.entries(inputs.state).forEach(([key, value], index) => {
    const setState: IInputSetState = Object.values(inputs.setState)[index]
    const hasError = errors.find(error => error.path === key)

    setState(prevState => ({
      ...prevState,
      error: {
        hasError: !(hasError == null),
        errorMessage: (hasError != null) ? hasError.message : ''
      }
    }))
  })
}

export { getValidationErrors, getValue, setErrors }
