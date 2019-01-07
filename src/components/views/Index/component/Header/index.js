import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';
class Header extends Component {

  // goback = () => {
  //   this.props.histort.goBack();
  // }
  
  render() {
    let tabs = this.props.tabs;
    return (
      <div className="Z-header">
        <div className="head_back_box" onClick={() => {this.props.history.go(-1)}} >
          <i className="iconfont icon-fanhui"></i>
        </div>
        <div className="head_title">{tabs}</div>
        <div className="head_home">
          <Link to="/index/i">
          <i className="iconfont icon-Home"></i>
          </Link>
        </div>
      </div>
    )
  }

}

export default Header
