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
  #__next {
    display: flex;
    min-height: 100vh;
    
    > * {
      flex: 1;
    }
  }
`;

export default GlobalStyle;
