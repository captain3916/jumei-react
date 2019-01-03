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
        { key: 'index', href: "/index/i", icon: "icon-films", name: '首页' },
        { key: 'global', href: "/index/global", icon: "icon-cinemas", name: '极速免税店' },
        { key: 'muandbaby', href: "/index/muandbaby", icon: "icon-sales", name: '母婴' },
        { key: 'luxury', href: "/index/luxury", icon: "icon-center", name: '轻奢' },
        { key: 'pop', href: "/index/pop", icon: "icon-center", name: '名品特' },
      ]
    }
  }
  render() {
    return (
      <div className="Index">
        <div className="Zsearch">
          <div id="page_top" className="index-search" >
            <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" alt=""/>
            <span>搜索商品 分类 功效</span>
          </div>
          <span id="search_action">
            <img   src="//f0.jmstatic.com/btstatic/h5/index/search_list2.png" className="search" alt="" />
          </span>
        </div>
        
        <IndexTab tabs={this.state.indexTab}></IndexTab>

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
