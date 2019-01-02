import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Search from './components/views/Search';
import Details from './components/views/Details';
import Center from './components/views/Center';
import Register from './components/views/Register';
import Login from './components/views/Login';
import Shopcard from './components/views/Shopcard';
import Yiqituan from './components/views/Yiqituan';
import Index from './components/views/Index';


import './common/css/move-base.css';
import './common/css/main.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/search' component={ Search }></Route>
          <Route path='/product' component={ Details }></Route>
          <Route path='/center' component={ Center }></Route>
          <Route path='/login' component={ Login }></Route>
          <Route path='/register' component={ Register }></Route>
          <Route path='/shopcard' component={ Shopcard }></Route>
          <Route path='/yiqituan' component={ Yiqituan }></Route>
          <Route path='/' component={ Index }></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
