import * as Yup from 'yup'
import { getValidationErrors, getValue, IValidateProps, IValidationErrorReturn, setErrors } from '../../utils/validateUtils'

const schema = Yup.object().shape({
  email: Yup.string()
    .typeError('O email precisa ser um texto')
    .email('Digite um email válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .typeError('A senha precisa ser um texto')
    .min(8, 'A senha precisa ter no minimo 8 dígitos')
    .required('A senha é obrigatória')
})

const validate = async (inputs: IValidateProps): Promise<boolean> => {
  let errors: IValidationErrorReturn[] = []
  try {
    await schema.validate(getValue(inputs.state), { abortEarly: false })
  } catch (err: any) {
    errors = getValidationErrors(err)
  } finally {
    setErrors(inputs, errors)
  }
  return errors.length === 0
}

export { validate }
