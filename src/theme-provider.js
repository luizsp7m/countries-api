import React, { createContext, useState } from 'react';

const CustomThemeContext = createContext();

function CustomThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  function switchTheme() {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <CustomThemeContext.Provider value={{ switchTheme, theme }}>
      { children}
    </CustomThemeContext.Provider>
  );
}

export { CustomThemeProvider, CustomThemeContext }