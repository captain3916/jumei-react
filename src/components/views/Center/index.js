import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '../../../store/index';

import './index.scss'

class Center extends Component {
  constructor(props){
    super(props);
    console.log(store.getState().userInfo.isLogin);
    console.log(store.getState().userInfo.userName);
    this.state = {
      // isLogin:store.getState(),
      userName:store.getState().userInfo.userName,
      isLogin:store.getState().userInfo.isLogin
    }
  }
  componentDidMount() {
    // state状态需要监听
    this.subscribe = store.subscribe(() => {
      this.setState({
        userName:store.getState().userInfo.userName,
        isLogin:store.getState().userInfo.isLogin
      })
    })
  }

  componentWillUnmount() {
    this.subscribe();
  }
  // 使用箭头函数改变thi指向
  outLogin = (e) => {
    e.preventDefault();
    // this.setState()
    localStorage.removeItem("jumei_userName");
    store.dispatch({type: 'SETUSERNAME', data: ''});
    store.dispatch({type: 'SETISLOGIN', data: false});
    // this.props.history.push('/center');
  } 

  render() {
    return (
      <div className="wrapper">
        {/* 后退 */}
        <div className="header">
          <div className="head_back_box" onClick={() => {this.props.history.go(-1)}}>
            <i className="iconfont icon-fanhui"></i>
          </div>
          <div className="head_title">我的聚美</div>
          <Link to="/" className="head_home">
            <i className="iconfont icon-Home"></i>
          </Link>
        </div>
        {/* 未登录 */}
        <div className="user_unlogin" style={{display: (this.state.isLogin===true) ? "none" : "block"}}>
          <div className="user_pic"><i className="iconfont icon-user"></i></div>
          <div className="operation">
            <Link to="/register" className="signup">注册</Link>
            <div className="separator"></div>
            <Link to="/login" className="login">登录</Link>
          </div>
        </div>
        {/* 已登录 */}
        <div className="wrapper_user" style={{display: (this.state.isLogin===true) ?  "block" : "none"}}>
          <img src="./images/user_pic.png" alt="" className="photo"/>
          <div className="user_bg">
            <div className="user_info">
              <span className="name">{this.state.userName}</span>
              <span className="grade">普通会员</span>
            </div>
          </div>
          <div className="icons">
            <a href="true" className="wishlist">
              <div className="icon"><i className="iconfont icon-kongxinxin-"></i></div>
              <span>心愿单</span>
            </a>
            <a href="true" className="onsale">
              <div className="icon"><i className="iconfont icon-shijiantixing"></i></div>
              <span>开售提醒</span>
            </a>
            <a href="true" className="fav">
              <div className="icon"><i className="iconfont icon-xing"></i></div>
              <span>收藏</span>
            </a>
          </div>
        </div>
        {/* 订单 */}
        <div className="order block">
          <div className="block_title">
            <i className="iconfont icon-dingdan block_title_icon"></i>
            我的订单
            <a href="{value.toString()}" className="block_title_nav">
              <span>查看我的全部订单</span>
              <i className="iconfont icon-right2"></i>
            </a>
          </div>
          <div className="block_content">
            <a href="true" className="block_item">
              <i className="iconfont icon-daifukuan"></i>
              <span>待付款</span>
            </a>
            <a href="true" className="block_item">
              <i className="iconfont icon-daishouhuo"></i>
              <span>待收货</span>
            </a>
            <a href="true" className="block_item">
              <i className="iconfont icon-pingjia-"></i>
              <span>待评价</span>
            </a>
            <a href="true" className="block_item">
              <i className="iconfont icon-tuihuo"></i>
              <span>退货/退款</span>
            </a>
          </div>
        </div>
        {/* 资产 */}
        <div className="fund block">
          <div className="block_title">
            <i className="iconfont icon-zichanxinxi block_title_icon"></i>
            我的资产
          </div>
          <div className="block_content">
            <a href="true" className="block_item">
              <span>现金卷</span>
            </a>
            <a href="true" className="block_item">
              <span>红包</span>
            </a>
            <a href="true" className="block_item">
              <span>聚美余额</span>
            </a>
            <a href="true" className="block_item">
              <span>礼品卡</span>
            </a>
          </div>
        </div>
        {/* 其他菜单 */}
        <div className="list block">
          <a href="true" className="list_item">
            <i className="iconfont icon-service block_title_icon"></i>
            <span>售后服务</span>
            <i className="iconfont icon-right2 arrow_right"></i>
          </a>
          <a href="true" className="list_item">
            <i className="iconfont icon-yijianfankui block_title_icon"></i>
            <span>意见反馈</span>
            <i className="iconfont icon-right2 arrow_right"></i>
          </a>
          <a href="true" className="list_item">
            <i className="iconfont icon-daishouhuo1 block_title_icon"></i>
            <span> 收货地址</span>
            <i className="iconfont icon-right2 arrow_right"></i>
          </a>
          <a href="false" className="list_item" onClick={this.outLogin} style={{display: (this.state.isLogin===true) ?  "block" : "none"}}>
            <i className="iconfont icon-tuichu block_title_icon"></i>
            <span>退出登录</span>
            <i className="iconfont icon-right2 arrow_right"></i>
          </a>
          <a href="true" className="list_item">
            <i className="iconfont icon-weibiaoti- block_title_icon"></i>
            <span>400-123-8888</span>
            <i className="iconfont icon-right2 arrow_right"></i>
          </a>
        </div>
        {/* 备注 */}
        <div className="hint">
          客服热线400-123-8888 (8:00-22:00)
          <br/>
          拨打前请记录您的UID<span> {this.state.userName}</span>
        </div>
      </div>
    )
  }
}

export default Center
