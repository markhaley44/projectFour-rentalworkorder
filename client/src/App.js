import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
// import WorkOrder from './components/WorkOrder';
import Navbar from './components/Navbar';
import AddTenant from './components/Tenant/AddTenant';
import LandingPage from './components/LandingPage';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <AddTenant />
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/tenant" component={AddTenant} />


          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
