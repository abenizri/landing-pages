import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Newmortgage from './views/newmortgage.jsx'
import Assessment from './views/assessment.jsx'

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/assessment" component={Newmortgage} />
          <Route exact path="/newmortgage" component={Assessment} />
          <Route path="/" name="newmorgage" component={Newmortgage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
