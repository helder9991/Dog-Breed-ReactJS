import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'

import Tooltip from '../../components/Tooltip'

import AppTestContainer from '../mock/AppTestContainer'

describe('Tooltip Component', () => {
  it('should be able to render the Tooltip', () => {
    render(
      <AppTestContainer>
        <Tooltip title='Aviso'>
          <div>icon</div>
        </Tooltip>
      </AppTestContainer>
    )

    expect(screen.getByText('Aviso')).toBeInTheDocument()
    expect(screen.getByText('icon')).toBeInTheDocument()
  })
})
