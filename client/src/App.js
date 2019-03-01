import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
// import WorkOrder from './components/WorkOrder';
import Navbar from './components/Navbar';
import AddTenant from './components/Tenant/AddTenant';
import LandingPage from './components/LandingPage';
import SingleTenant from './components/Tenant/SingleTenant';
class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/tenant" component={AddTenant} />
            <Route exact path="/tenant/:userId" component={SingleTenant} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
