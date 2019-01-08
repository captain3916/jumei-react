import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../component/Header'
import Search from '../component/Search';
import IndexTab from '../component/IndexTab';

export default class ZLuxury extends Component {
  constructor(props){
    super(props);
    this.state = {
      MyText : '轻奢'
    }
  }

  render() {
    return (
      <div>
        <Header tabs = {this.state.MyText} history={this.props.history}></Header>
        <Search></Search>
        <IndexTab ></IndexTab>
        <ul>
          <li className="Zli">
            <Link to='/index/luxury' className="aaa">
              <div className="list-img">
                <img className="product-label haitaoy-label" src=  {"http://mp5.jmstatic.com//jmstore/image/000/006/6707_std/5c2f0680d7a8f_2048_1024.jpg"} alt="" />
              </div>
              <div className="list-info">
                <h1 className="list-tit">施华洛世奇饰品专场</h1>
                <div className="list-countdown" data-time="1547344799">
                  <span>仅剩</span>
                  <span>04天</span>
                  <span>15时</span>
                  <span>59分</span>
                </div>
              </div>
              <div className="list-logo">
                <img className="product-label haitaoy-label" src=  {"http://p0.jmstatic.com/brand/logo_180/884.jpg"} alt="" />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
