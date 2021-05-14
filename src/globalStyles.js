import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  :root {
    --background-color: hsl(207, 26%, 17%);
    --primary-color: hsl(209, 23%, 22%);
    --text-color: hsl(0, 0%, 100%);

    /* --dark-blue: hsl(209, 23%, 22%);
    --very-dark-blue: hsl(207, 26%, 17%);
    --text-dark: hsl(200, 15%, 8%);
    --dark-gray: hsl(0, 0%, 52%);
    --very-dark-gray: hsl(0, 0%, 98%);
    --white: hsl(0, 0%, 100%); */
  }

  body, input, button {
    font-family: 'Nunito Sans', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;

    width: 100%;
    height: 100%;

    background: var(--background-color);
  }
`;

export default GlobalStyle;