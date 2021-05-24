import React, { useContext } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { CustomThemeContext } from './theme-provider';

const themes = {
  dark: {
    backgroundColor: 'hsl(207, 26%, 17%)',
    primaryColor: 'hsl(209, 23%, 22%)',
    textColor: 'hsl(0, 0%, 100%)',
  },

  light: {
    backgroundColor: '#ecf0f1',
    primaryColor: '#fff',
    textColor: 'hsl(200, 15%, 8%)',
  },
}

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
    --background-color: ${props => props.theme.backgroundColor};
    --primary-color: ${props => props.theme.primaryColor};
    --text-color: ${props => props.theme.textColor};
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
`

const Theme = ({ children }) => {
  const { theme } = useContext(CustomThemeContext);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Theme;