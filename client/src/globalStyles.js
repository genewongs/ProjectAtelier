import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background: white;
  }
  a:visited {
    color: black;
  }
`;

export default GlobalStyle;
