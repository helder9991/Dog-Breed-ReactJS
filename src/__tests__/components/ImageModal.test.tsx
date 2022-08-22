import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import ImageModal from '../../components/ImageModal'

import AppTestContainer from '../mock/AppTestContainer'

const mockedHandleClose = jest.fn()

describe('ImageModal Component', () => {
  it('should be able to render the ImageModal', () => {
    render(
      <AppTestContainer>
        <ImageModal handleClose={mockedHandleClose}>
          <img src="" />
        </ImageModal>
      </AppTestContainer>
    )

    expect(screen.getByText('Fechar')).toBeInTheDocument()
  })

  it('should be able to close ImageModal component', () => {
    render(
      <AppTestContainer>
        <ImageModal handleClose={mockedHandleClose}>
          <img src="" />
        </ImageModal>
      </AppTestContainer>
    )

    fireEvent.click(screen.getByRole('button'))

    expect(mockedHandleClose).toBeCalledTimes(1)
  })
})
