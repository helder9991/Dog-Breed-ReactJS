import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'

import List from '../../pages/List'
import AppTestContainer from '../mock/AppTestContainer'
import { api } from '../../services/api'
import { TabProvider } from '../../hooks/tab'

const apiMock = new MockAdapter(api)

const mockedSignIn = jest.fn()

jest.mock('../../hooks/auth', () => ({
  useAuth: () => ({
    signIn: mockedSignIn
  })
}))

const apiData = {
  breed: 'chihuahua',
  list: [
    'https://images.dog.ceo/breeds/chihuahua/n02085620_10074.jpg',
    'https://images.dog.ceo/breeds/chihuahua/n02085620_10131.jpg'
  ]
}

describe('List Component', () => {
  beforeEach(() => {
    apiMock
      .onGet('/list')
      .reply(200, { ...apiData })
  })

  it('should be able to render the List page', async () => {
    render(
      <AppTestContainer>
        <TabProvider>
          <List />
        </TabProvider>
      </AppTestContainer>
    )

    expect(screen.queryByTestId('loading')).toBeInTheDocument()
    expect(await screen.findByAltText(apiData.list[0])).toBeInTheDocument()
  })

  it('should be able to show a message when API fails', async () => {
    apiMock
      .onGet('/list')
      .reply(500)

    render(
      <AppTestContainer>
        <TabProvider>
          <List />
        </TabProvider>
      </AppTestContainer>
    )

    expect(screen.queryByTestId('loading')).toBeInTheDocument()
    expect(await screen.findByText('Não há nenhum dado para ser mostrado')).toBeInTheDocument()
  })

  it('should be able to show a ImageModal', async () => {
    render(
      <AppTestContainer>
        <TabProvider>
          <List />
        </TabProvider>
      </AppTestContainer>
    )

    expect(screen.queryByTestId('loading')).toBeInTheDocument()
    expect(await screen.findByAltText(apiData.list[0])).toBeInTheDocument()

    fireEvent.click(screen.getByAltText(apiData.list[0]))
    expect(screen.queryAllByAltText(apiData.list[0])).toHaveLength(2)
  })

  it('should be able to call API when the user click in a other tab', async () => {
    const mockedApiGet = jest.spyOn(api, 'get')
    render(
      <AppTestContainer>
        <TabProvider>
          <List />
        </TabProvider>
      </AppTestContainer>
    )

    expect(screen.queryByTestId('loading')).toBeInTheDocument()
    expect(await screen.findByAltText(apiData.list[0])).toBeInTheDocument()

    fireEvent.click(screen.getByText('Husky'))

    expect(await screen.findByAltText(apiData.list[0])).toBeInTheDocument()
    expect(mockedApiGet).toHaveBeenCalledTimes(2)
  })
})
