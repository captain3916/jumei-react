import React, { Component } from 'react';

import './index.scss'

class Center extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* 后退 */}
        <div className="header">
          <div className="head_back_box">
            <i className="iconfont icon-fanhui"></i>
          </div>
          <div className="head_title">我的聚美</div>
          <div className="head_home">
            <i className="iconfont icon-Home"></i>
          </div>
        </div>
        {/* 未登录 */}
        <div className="user_unlogin">
          <div className="user_pic"></div>
          <div className="operation">
            <a href="true" className="signup">注册</a>
            <div className="separator"></div>
            <a href="true" className="login">登录</a>
          </div>
        </div>
        {/* 已登录 */}
        <div className="wrapper_user">
          <img src="./images/user_pic.png" alt="" className="photo"/>
          <div className="user_bg">
            <div className="user_info">
              <span className="name">JM1GreijgDGN1</span>
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
          <a href="true" className="list_item">
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
          拨打前请记录您的UID <span></span>
        </div>
      </div>
    )
  }
}

export default Center
