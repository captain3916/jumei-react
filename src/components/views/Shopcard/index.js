import React, { Component } from 'react'

// 引入提示组件,默认隐藏none
import Reminder from '../../component/Reminder/index'
import './index.scss'

class Shopcard extends Component {
  render() {
    return (
      <div id="shopCart">
        {/* 后退 */}
        <div class="shopCart_header">
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
        {/* 有商品状态 */}
        <div className="shop_list">
          <div className="count_down">
            <i className="iconfont icon-shijian"></i>
            <div className="timer_text">14:49.3</div>
            <div className="clock_msg">结算时间结束后，商品可能被抢空，请尽快结算</div>
          </div>
          <div className="groups">
            <div className="group">
              {/* 1 */}
              <div className="group_header">
                <span className="check_box_checked"><i className="iconfont icon-weigouxuan"></i></span>
                <div className="group_title">聚美优品发货</div>
              </div>
              {/* 2 产品盒子*/}
              <div className="group_content">
                {/* /item为模拟数据,添加新产品for <item> */}
                {/* 1 <item> */}
                <div className="item">
                  {/* 勾选按钮 */}
                  <span className="check_box_checked"><i className="iconfont icon-weigouxuan"></i></span>
                  <div className="item_content">
                    {/* 缩略图 */}
                    <div className="img_wrap">
                      <img src="https://p2.jmstatic.com/product/000/647/647333_std/647333_200_200.jpg" alt="御泥坊亮采金桂花眼膜贴60片"/>
                    </div>
                    {/* 标题/参数/价格 */}
                    <div className="text_wrap">
                      <div className="title"><span className="title">御御泥坊亮采金桂花眼膜贴60片片</span></div>
                      <div className="sub_title">
                        <span>60片x30</span>
                        <div className="sun"><span className="jia"><i className="iconfont icon-jian"></i></span><span>x1</span><span className="jian"><i className="iconfont icon-jia"></i></span></div>
                      </div>
                      <div className="price_edit"><span className="price red">¥59.9</span><span className="delete">删除</span></div>
                    </div>
                  </div>
                </div>

              </div>
              {/* 3 包邮 */}
              <div className="group_tail red">
                <span className="icon"><i className="iconfont icon-mian"></i></span>
                <div>已享新用户满39元包邮</div>
              </div>
            </div>
          </div>
          {/* 结算按钮 */}
          <div className="submit_bottom">
            <div className="sub_info">
              <span className="check_box_checked"><i className="iconfont icon-gouxuan1"></i></span>
              <span className="all_check_text">全选</span>
              <div className="summary">
                <span>合计</span>
                <span className="red">¥59.9</span>
              </div>
            </div>
            <div className="submit_btn go_to_submit">
              去结算
              <span>(2)</span>
            </div>
          </div>
        </div>
        <Reminder></Reminder>
      </div>
    )
  }
}

export default Shopcard
