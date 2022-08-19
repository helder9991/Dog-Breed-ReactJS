import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    color: ${props => props.theme.colors.text.primary};
  }
  html {
    display:flex;
  }
  body {
    background: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    flex: 1;
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  #root {
    display: flex;
    height: 100vh;
    width: 100vw;
  }

  html, html body, body {
    width: 100vw !important;
    min-width: 0 !important;
    max-width: none !important;
    overflow-x: hidden;
  }
`
