import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NewMortgage from './views/newmortgage.jsx'
import PortfolioSaving from './views/portfolioSaving.jsx'

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/portfolio-savings" component={PortfolioSaving} />
          <Route exact path="/newmortgage" component={NewMortgage} />
          <Route path="/" name="newmorgage" component={NewMortgage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
