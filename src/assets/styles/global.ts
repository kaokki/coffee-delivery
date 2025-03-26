import { createGlobalStyle } from "styled-components"
import { mixins } from "./mixins"


export const GlobalStyle = createGlobalStyle`
  body, html, textarea, input, * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
    font-family: ${mixins.fonts.roboto}, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    background-color: ${mixins.colors["background"]};
    margin-bottom: 5rem;
  }
`