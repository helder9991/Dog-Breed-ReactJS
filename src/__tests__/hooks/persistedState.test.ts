import '@testing-library/jest-dom/extend-expect'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import usePersistedState from '../../hooks/persistedState'

jest.spyOn(Storage.prototype, 'setItem')
jest.spyOn(Storage.prototype, 'getItem')

describe('PersistedState Hook', () => {
  it('should be able to get a hook initialState', () => {
    const { result } = renderHook(() => usePersistedState<object>('@testHook', { test: '123' }))

    expect(localStorage.getItem).toHaveBeenCalledTimes(1)
    expect(result.current[0]).toMatchObject({ test: '123' })
  })

  it('should be able to persist state', () => {
    const { result } = renderHook(() => usePersistedState<object>('@testHook', { test: '123' }))

    act(() => {
      result.current[1]({ test: '456' })
    })

    expect(result.current[0]).toMatchObject({ test: '456' })
    expect(localStorage.setItem).toHaveBeenCalledTimes(2)
  })

  it('should be able to get a persisted state', () => {
    Storage.prototype.getItem = jest.fn(() => '{"test":"persisted"}')

    const { result } = renderHook(() => usePersistedState<object>('@testHook', {}))

    expect(result.current[0]).toMatchObject({ test: 'persisted' })
  })
})
