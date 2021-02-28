/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from 'react-router-dom';

import AboutPage from './AboutPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import MarkDown from './MarkDown';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <img
          style={{
            padding: '20px 0',
          }}
          src="https://citymall.live/assets/img/logo.png"
        />

        <div
          style={{
            padding: '20px 0',
          }}
        >
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>
            About Us
          </NavLink>
          {' | '}
          <NavLink to="/markdown" activeStyle={activeStyle}>
            Mark Down
          </NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/markdown" component={MarkDown} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);
