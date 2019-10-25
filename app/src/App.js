import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/home/home';
import Header from './components/header/header';
import Clock from './components/clock/clock';

import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div >
        <Header />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/restuarent">
            testing restuarent
          </Route>
          <Route path="/food">
            testing Food
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Clock />
        </div>
      </Router>
    );
  }
}

export default App;
