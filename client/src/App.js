import React, { Component } from 'react';
// import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
// import WorkOrder from './components/WorkOrder';
import Navbar from './components/Navbar';
import AddTenant from './components/Tenant/AddTenant';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <AddTenant />

      </div>
    );
  }
}

export default App;
