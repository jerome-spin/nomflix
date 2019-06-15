import React, { Component } from 'react';
import Router from '../Components/Router';
import GlobalStyles from './GlobalStyles';
// Before ES6
// require('dotenv').require();
import { config } from 'dotenv';
config();

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router />
        <GlobalStyles />
      </React.Fragment>
    );
  }
}

export default App;
