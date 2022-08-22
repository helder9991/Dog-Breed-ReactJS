import React, { useCallback } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import Header from './components/Header'

import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

import Routes from './routes'
import usePersistedState from './hooks/persistedState'
import AppProvider from './hooks'

type ITheme = 'dark' | 'light'

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<ITheme>('@DobBreed:theme', light.title)

  const toggleTheme = useCallback(() => {
    setTheme((prevState: string) =>
      prevState === 'light' ? dark.title : light.title)
  }, [theme, setTheme])

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <Router>
        <GlobalStyle />
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
          theme={theme}
        />
        <AppProvider>
          <Header toggleTheme={toggleTheme} />
          <Routes />
        </AppProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App
