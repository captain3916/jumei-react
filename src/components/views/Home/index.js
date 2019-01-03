import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Index from '../Index';
import Yiqituan from '../Yiqituan';
import Shopcard from '../Shopcard';
import TabBar from '../../../common/TabBar';

import './index.scss';

class Home extends Component {
  render() {
    return (
      <div className='gnd-main'>
        <Switch>
          <Route path='/shopcard' component={ Shopcard }></Route>
          <Route path='/yiqituan' component={ Yiqituan }></Route>
          <Route path='/index' component={ Index }></Route>
          <Redirect to='/index'></Redirect>
        </Switch>
        <div className='gnd-bottom'>
          <TabBar></TabBar>
        </div>
      </div>
    )
  }
}

export default Home