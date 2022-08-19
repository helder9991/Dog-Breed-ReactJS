
export type IInputSetState = React.Dispatch<React.SetStateAction<{
  value: string
  error: {
    hasError: boolean
    errorMessage: string
  }
}>>

const controlledInput = (setState: IInputSetState, value: string | number): void => {
  setState((prevState: any) => ({ ...prevState, value }))
}

export { controlledInput }
