import React, { useState, createContext } from 'react';
import Routes from './routes';
import GlobalStyle from './globalStyles';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './globalStyles';

function App() {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <button onClick={toggleTheme}>Change color</button>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;