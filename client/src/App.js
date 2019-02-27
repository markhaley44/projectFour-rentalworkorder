import React, { Component } from 'react';
import { Layout, Header, Navigation, } from 'react-mdl';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import WorkOrder from './components/WorkOrder';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="header-color" title="Belmont Palace" scroll>
            <Navigation>
              <Router>
                <Switch>
                  <Link to="/new_workOrder">Place a New Work-Order</Link>
                  <Route exact path='/workorder' component={WorkOrder}></Route>
                </Switch>
              </Router>
            </Navigation>
          </Header>
        </Layout>
      </div>
    );
  }
}

export default App;
