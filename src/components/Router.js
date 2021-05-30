/* eslint-disable linebreak-style */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './Navbar';
import Home from './Home';
import Qoutes from './Qoute';
import App from './App';

function AppRoutes() {
  return (
    <Router>
      <Header />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/calculator">
          <App />
        </Route>
        <Route exact path="/qoutes">
          <Qoutes />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRoutes;
