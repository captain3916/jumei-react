import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../component/Header';
import Search from '../component/Search';
import IndexTab from '../component/IndexTab';

import './index.scss'

export default class ZGlobal extends Component {
  constructor(props){
    super(props);
    this.state = {
      MyText : '极速免税店'
    }
  }

  render() {
    return (
      <div className ="global">
        <Header tabs = {this.state.MyText} history={this.props.history}></Header>
        <Search></Search>
        <IndexTab ></IndexTab>
        极速免税店
        <ul>
          <li className="deal-item item-each">
            <Link to="/index/global">
              <div className="product-info clear">
                <div className="product-img fl">
                  <img className="product-label haitaoy-label" src={"http://p0.jmstatic.com/banner/area/000/000/029.jpg"} alt="" />
                  <img className="deal-img" src={"http://mp6.jmstatic.com/product/001/648/1648502_std/1648502_1000_1000.jpg"} alt="" />
                </div>
                <div className="product-desc fl">
                  <div className="product-name">
                    雅诗兰黛无痕持妆粉底液30mlSPF10/PA++，持久不脱妆
                  </div>
                  <div className="price-info">
                    <span className="exceed-hidden activity-jumei-price">
                      <span className="price">￥<span>298</span></span>
                      <span className="old">￥390</span>
                    </span>
                </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
