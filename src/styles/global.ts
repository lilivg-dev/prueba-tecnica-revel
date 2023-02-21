import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  @font-face {
    font-family: "Roboto";
    src: url("/fonts/Roboto-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "Roboto";
    font-weight: 700;
    src: url("/fonts/Roboto-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: "RobotoCondensed";
    src: url("/fonts/RobotoCondensed-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "RobotoCondensed";
    font-weight: 700;
    src: url("/fonts/RobotoCondensed-Bold.ttf") format("truetype");
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p, h1, h2, h3, h4, h5, h6, ul {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  ol, ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    
    > * {
      flex: 1;
    }
  }
`;

export default GlobalStyle;
