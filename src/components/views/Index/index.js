import React, { Component } from 'react';
import { Route, Switch, Redirect,} from 'react-router-dom';

import './index.scss';

import ZIndex from './ZIndex';
import ZGlobal from './ZGlobal';
import ZMuandbaby from './ZMuandbaby';
import ZLuxury from './ZLuxury';
import ZPop from './ZPop';

class Index extends Component {
  
  render() {
    return (
      <div className="Index">
       
        <Switch>
          <Route path="/index/global" component={ZGlobal}></Route>
          <Route path="/index/muandbaby" component={ZMuandbaby}></Route>
          <Route path="/index/luxury" component={ZLuxury}></Route>
          <Route path="/index/pop" component={ZPop}></Route>
          <Route path="/index/i" component={ZIndex}></Route>
          <Redirect to="/index/i"></Redirect>
        </Switch>
        
      </div>
    )
  }
}

export default Index;
