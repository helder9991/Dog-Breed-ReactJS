import '@testing-library/jest-dom/extend-expect'
import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { TabProvider, useTab } from '../../hooks/tab'

const tab = [
  {
    name: 'Chihuahua',
    selected: true
  },
  {
    name: 'Husky',
    selected: false
  }
]

describe('Tab Hook', () => {
  it('should be able to use setTab and get tab', () => {
    const { result } = renderHook(() => useTab(), {
      wrapper: TabProvider
    })

    act(() => {
      result.current.setTab(tab)
    })

    expect(result.current.tab).toMatchObject(tab)
  })

  it('should be able to get selected Tab', () => {
    const { result } = renderHook(() => useTab(), {
      wrapper: TabProvider
    })

    act(() => {
      result.current.setTab(tab)
    })

    expect(result.current.getSelectedTab()).toMatchObject(tab[0])
  })

  it('should be able to change selected Tab', () => {
    const { result } = renderHook(() => useTab(), {
      wrapper: TabProvider
    })

    act(() => {
      result.current.setTab(tab)
    })
    act(() => {
      result.current.handleChangeTab('Husky')
    })

    expect(result.current.getSelectedTab()).toMatchObject({
      name: 'Husky',
      selected: true
    })
  })
})
