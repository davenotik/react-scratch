import { resetStyle } from '@baseloop/ui'
import { createGlobalStyle } from 'styled-components'
import { FOOTER_BACKGROUND, FOOTER_FOREGROUND, BACKGROUND, SECONDARY_BACK, LINK, LINK_HOVER } from './colors'

const fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'

const GlobalStyle = createGlobalStyle`
  ${resetStyle}
  
  html {
    overflow: hidden;
    font-size: 16px;
    height: 100vh;
  }
  
  body {
    background: ${BACKGROUND};
    font-family: ${fontFamily};
    text-rendering: optimizeLegibility;
  }
  
  body, #app-container {
    height: 100vh;
  }
  
  h1 {
    font-size: 1.5rem;
  }
  
  p {
    margin: 0.5rem 0;
    line-height: 1.375rem;
  }
  
  a {
    color: ${LINK};
  }
  
  a:hover {
    color: ${LINK_HOVER};
  }
  
  img {
    max-width: 100%;
  }
  
  main {
    background: ${SECONDARY_BACK};
    width: 100%;
    flex: 1;
    box-sizing: border-box;
  }
  
  footer {
    background: ${FOOTER_BACKGROUND};
    color: ${FOOTER_FOREGROUND};
    padding: 2rem;
    text-align: center;
  }
  
  @font-face {
    font-family: "icons-solid";
    font-style: normal;
    font-weight: 900;
    font-display: auto;
  }
  
  @font-face {
    font-family: "icons-regular";
    font-style: normal;
    font-weight: 900;
    font-display: auto;
  }
  
  @font-face {
    font-family: "icons-brands";
    font-style: normal;
    font-weight: 900;
    font-display: auto;
  }
`

export default GlobalStyle
