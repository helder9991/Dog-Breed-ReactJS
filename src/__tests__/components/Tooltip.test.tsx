import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Tooltip from '../../components/Tooltip'

import theme from '../../styles/themes/light'

describe('Tooltip Component', () => {
  it('should be able to render the Tooltip', () => {
    render(
      <ThemeProvider theme={theme}>
        <Tooltip title='Aviso'>
          <div>icon</div>
        </Tooltip>
      </ThemeProvider>
    )

    expect(screen.getByText('Aviso')).toBeInTheDocument()
    expect(screen.getByText('icon')).toBeInTheDocument()
  })
})
