import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Search from './components/views/Search';
import Details from './components/views/Details';
import Center from './components/views/Center';
import Register from './components/views/Register';
import Login from './components/views/Login';
import Home from './components/views/Home';
import Cart from './components/views/Cart'

import './common/css/move-base.css';
import './common/css/main.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/search' component={Search}></Route>
          <Route path='/product' component={Details}></Route>
          <Route path='/center' component={Center}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route path='/' component={Home}></Route>
          <Redirect to='/'></Redirect>
        </Switch>
      </Router>
    )
  }
}

export default App
