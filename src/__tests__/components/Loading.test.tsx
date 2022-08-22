import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'

import Loading from '../../components/Loading'

import AppTestContainer from '../mock/AppTestContainer'

describe('Loading Component', () => {
  it('should be able to render the Loading', () => {
    render(
      <AppTestContainer>
        <Loading width={120} />
      </AppTestContainer>
    )

    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })
})
