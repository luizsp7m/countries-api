import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { FilterProvider } from './contexts/FilterContext';

import Home from './views/Home';
import Details from './views/Details';

function Routes() {
  return (
    <FilterProvider>
      <Router>
        <Switch>
          <Route component={Details} path={'/:code'} />
          <Route component={Home} path={'/'} exact />
        </Switch>
      </Router>
    </FilterProvider>
  );
}

export default Routes;