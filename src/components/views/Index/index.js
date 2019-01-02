import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './index.scss';

import IndexTab from './IndexTab';

import ZIndex from './ZIndex';
import ZGlobal from './ZGlobal';
import ZMuandbaby from './ZMuandbaby';
import ZLuxury from './ZLuxury';
import ZPop from './ZPop';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexTab: [
        { key: 'index', href: "/index", icon: "icon-films", name: '首页' },
        { key: 'global', href: "/global", icon: "icon-cinemas", name: '极速免税店' },
        { key: 'muandbaby', href: "/muandbaby", icon: "icon-sales", name: '母婴' },
        { key: 'luxury', href: "/luxury", icon: "icon-center", name: '轻奢' },
        { key: 'pop', href: "/pop", icon: "icon-center", name: '名品特' },
      ]
    }
  }
  render() {
    return (
      <div className="Index">
        <div style={{height:'0.45rem',fontSize:'0.13rem',}}>搜索</div>
        <IndexTab tabs={this.state.indexTab}></IndexTab>

        <Switch>
          <Route path="/index" component={ZIndex}></Route>
          <Route path="/global" component={ZGlobal}></Route>
          <Route path="/muandbaby" component={ZMuandbaby}></Route>
          <Route path="/luxury" component={ZLuxury}></Route>
          <Route path="/pop" component={ZPop}></Route>
          <Redirect to="/index"></Redirect>
        </Switch>
      </div>
    )
  }
}

export default Index;
