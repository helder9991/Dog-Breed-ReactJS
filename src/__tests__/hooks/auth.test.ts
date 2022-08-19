import '@testing-library/jest-dom/extend-expect'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { AuthProvider, useAuth } from '../../hooks/auth'

jest.spyOn(Storage.prototype, 'setItem')
jest.spyOn(Storage.prototype, 'removeItem')

const user = {
  _id: '62fcf90eff45bc1402c932af',
  email: 'user@mail.com',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIyYzJkYzExZC0zODlkLTRiMjQtYjk2Ny05MTE5MTJiOTA0NTUiLCJzdWIiOiI2MmZjZjkwZWZmNDViYzE0MDJjOTMyYWYiLCJpYXQiOjE2NjA3NDU5OTgsImV4cCI6MTY2MjA0MTk5OH0.d375a2mIkmjO1YPsp4Hn5J4Un-poQbHP6ygGaYaiBl0',
  createdAt: '2022-08-17T14:19:58.981Z',
  updatedAt: '2022-08-17T14:19:58.981Z',
  __v: 0
}

describe('Auth Hook', () => {
  it('should be able to signIn', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    })

    act(() => {
      result.current.signIn(user)
    })

    expect(result.current.user).toMatchObject(user)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
  })

  it('should be able to signOut', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    })

    act(() => {
      result.current.signOut()
    })

    expect(result.current.user).toMatchObject({})
    expect(localStorage.removeItem).toHaveBeenCalledTimes(1)
  })

  it('should be able to restore data from storage when inits user', async () => {
    jest
      .spyOn(Storage.prototype, 'getItem')
      .mockImplementation(() => (JSON.stringify(user)))

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    })

    expect(result.current.user).toMatchObject(user)
  })
})
