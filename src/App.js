import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Newmortgage from './views/newmortgage.jsx'
import Assessment from './views/assessment.jsx'

class App extends Component {

  render() {
    return (
      <Assessment/>
    );
  }
}

export default App;
