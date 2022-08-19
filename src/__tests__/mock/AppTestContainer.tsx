import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import theme from '../../styles/themes/light'

import 'react-toastify/dist/ReactToastify.css'

interface IProps {
  children: React.ReactNode
}

const AppTestContainer: React.FC<IProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {children}
    </ThemeProvider>
  )
}

export default AppTestContainer
