import React, { createContext, useState, useCallback, useContext } from 'react'
import jwtDecode from 'jwt-decode'
import { isAfter } from 'date-fns'
import { api } from '../services/api'

interface IUser {
  _id: string
  email: string
  token: string
  createdAt: string
  updatedAt: string
  __v: number
}

interface IUseAuth {
  user: IUser
  signIn: (user: IUser) => void
  signOut: () => void
}

interface IAuthProps {
  children: React.ReactNode
}

interface IToken {
  name: string
  exp: number
}

const AuthContext = createContext<IUseAuth>({} as IUseAuth)

export const AuthProvider: React.FC<IAuthProps> = ({ children }) => {
  const [data, setData] = useState<IUser>(() => {
    const userStorage = localStorage.getItem('@DobBreed:user')
    let user: IUser = {} as IUser

    if (userStorage != null) {
      user = JSON.parse(userStorage)

      const token = jwtDecode<IToken>(user.token)

      // verifica se o token ja expirou
      if (isAfter(new Date(), new Date(token.exp * 1000))) {
        localStorage.removeItem('@DobBreed:user')

        return user
      }

      api.defaults.headers.common.Authorization = user.token
      return user
    }
    return user
  })

  const signIn = useCallback(async (user: IUser) => {
    localStorage.setItem('@DobBreed:user', JSON.stringify(user))

    api.defaults.headers.common.Authorization = user.token

    setData(user)
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@DobBreed:user')

    setData({} as IUser)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): IUseAuth {
  const context = useContext(AuthContext)

  if (Object.keys(context).length === 0) throw new Error('useAuth must be used within an AuthProvider')

  return context
}
