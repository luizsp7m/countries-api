import React from 'react';
import ReactDOM from 'react-dom';
import { CustomThemeProvider } from './theme-provider';
import Theme from './Theme';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <Theme>
        <Routes />
      </Theme>
    </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
