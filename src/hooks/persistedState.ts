import React, { useState, useEffect } from 'react'

function usePersistedState<T>(key: string, initialState = {}): [T, React.Dispatch<any>] {
  const [state, setState] = useState<T>(() => {
    const storageValue = localStorage.getItem(key)

    if (storageValue != null) return JSON.parse(storageValue)

    return initialState
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default usePersistedState
