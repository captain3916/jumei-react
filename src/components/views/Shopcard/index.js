import React, { Component } from 'react'

import './index.scss'

class Shopcard extends Component {
  render() {
    return (
      <div id="shopCart">
        {/* 后退 */}
        <div class="header">
          <div class="head_back_box">
            <i className="iconfont icon-fanhui"></i>
          </div>
          <div class="head_title">购物车</div>
          <div class="head_home">
            <i className="iconfont icon-Home"></i>
          </div>
        </div>
        {/* 无商品状态 */}
        <div className="cart_no_goods">
          <div className="oops"></div>
          <div className="empty_cart">您的购物车中没有商品，请先去挑选心爱的商品吧！</div>
          <div className="go_stroll">去逛逛</div>
        </div>
        {/* 商品列表 */}
        <div className="shop_list">
          <div className="count_down"></div>
          <div className="groups"></div>
        </div>
        {/* 结算按钮 */}
        <div className="submit-bottom">
        </div>
      </div>
    )
  }
}

export default Shopcard
