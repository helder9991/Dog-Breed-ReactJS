import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import Tabs from '../../components/Tabs'

import AppTestContainer from '../mock/AppTestContainer'

const mockHandleChangeTab = jest.fn()

jest.mock('../../hooks/tab', () => ({
  useTab: () => ({
    tab: [
      {
        name: 'tab1',
        selected: true
      },
      {
        name: 'tab2',
        selected: false
      }
    ],
    handleChangeTab: mockHandleChangeTab
  })
}))

describe('Tabs Component', () => {
  it('should be able to render the Tabs', () => {
    render(
      <AppTestContainer>
        <Tabs />
      </AppTestContainer>
    )

    expect(screen.getByText('tab1')).toBeInTheDocument()
    expect(screen.getByText('tab2')).toBeInTheDocument()
  })

  it('should be able to change Tab', () => {
    render(
      <AppTestContainer>
        <Tabs />
      </AppTestContainer>
    )

    fireEvent.click(screen.getByText('tab2'))
    expect(mockHandleChangeTab).toBeCalledTimes(1)
    fireEvent.click(screen.getByText('tab1'))
    expect(mockHandleChangeTab).toBeCalledTimes(2)
  })
})
