import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export default class index extends Component {
  render() {
    return (
      <div className="Zsearch">
        <Link to="/search">
          <div id="page_top" className="index-search" >
            <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" alt=""/>
            <span>搜索商品 分类 功效</span>
          </div>
          <span id="search_action">
            <img   src="//f0.jmstatic.com/btstatic/h5/index/search_list2.png" className="search" alt="" />
          </span>
        </Link>
      </div>
    )
  }
}
