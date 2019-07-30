import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Newmortgage from './views/newmortgage.jsx'
import PortfolioSaving from './views/portfolioSaving.jsx'

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/portfolio-savings" component={PortfolioSaving} />
          <Route exact path="/newmortgage" component={Newmortgage} />
          <Route path="/" name="newmorgage" component={Newmortgage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
