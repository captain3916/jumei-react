import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../../../store/index'
import { Modal } from 'antd-mobile'


// 引入提示组件,默认隐藏none
import Reminder from '../../component/Reminder/index'
import './index.scss'


class Shopcard extends Component {
  constructor() {
    super();
    console.log(store.getState().goodsInfo)
    this.state = {
      goods: store.getState().goodsInfo
    }
  }

  componentDidMount() {
    this.subscribe = store.subscribe(() => {
      this.setState({
        goods: [...store.getState().goodsInfo]
      })
    })
  }

  componentWillUnmount() {
    this.subscribe();
  }

  // 添加数量
  addNum = ( item ) => {
    store.dispatch({
      type: 'ADDGOOD',
      data: item
    })
  }

  // 减少数量
  reduceNum = (item) => {
    store.dispatch({
      type: 'REDUCEGOOD',
      data: item
    })
  }

  // 删除某个商品
  deleteOne = (id) => {
    const alert = Modal.alert
    alert('删除此商品', '您确定吗?', [
      { text: '取消', onPress: () => {} },
      { text: '确定', onPress: () => {
        store.dispatch({
          type: 'DELETE_ONE',
          data: id
        })
      }},
    ])
  }
  goShoping = (e) => {
    this.props.history.push('/')
  }
  render() {

    // <div>
    //   <span className="check_box_checked"><i className="iconfont icon-weigouxuan"></i></span>
    //   <div className="item_content">
    //     <div className="img_wrap">
    //       <img src="https://p2.jmstatic.com/product/000/647/647333_std/647333_200_200.jpg" alt="御泥坊亮采金桂花眼膜贴60片"/>
    //     </div>
    //     <div className="text_wrap">
    //       <div className="title"><span className="title">御御泥坊亮采金桂花眼膜贴60片片</span></div>
    //       <div className="sub_title">
    //         <span>60片x30</span>
    //         <div className="sun"><span className="jia"><i className="iconfont icon-jian"></i></span><span>x1</span><span className="jian"><i className="iconfont icon-jia"></i></span></div>
    //       </div>
    //       <div className="price_edit"><span className="price red">¥59.9</span><span className="delete">删除</span></div>
    //     </div>
    //   </div>
    // </div>



    return (
      <div id="shopCart">
        {/* 后退 */}
        <div className="shopCart_header">
          <div className="head_back_box" onClick={() => {this.props.history.go(-1)}}>
            <i className="iconfont icon-fanhui"></i>
          </div>
          <div className="head_title">购物车</div>
          <Link to="/" className="head_home">
            <i className="iconfont icon-Home"></i>
          </Link>
        </div>
        {/* 无商品状态 */}
        <div className="cart_no_goods" style={{display: (this.state.goods.length===0) ? "flex" : "none"}}>
          <div className="oops"></div>
          <div className="empty_cart">您的购物车中没有商品，请先去挑选心爱的商品吧！</div>
          <div className="go_stroll" onClick={this.goShoping}>去逛逛</div>
        </div>
        {/* 有商品状态 */}
        <div className="shop_list" style={{display: (this.state.goods.length===0) ? "none" : "block"}}>
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
                {
                  this.state.goods.map((item, index) => {
                    return (
                      <div className="item" key={index}>
                        {/* 勾选按钮 */}
                        <span className="check_box_checked"><i className="iconfont icon-weigouxuan"></i></span>
                        <div className="item_content">
                          {/* 缩略图 */}
                          <div className="img_wrap">
                            <img src={item.goods_img} alt={item.goods_name}/>
                          </div>
                          {/* 标题/参数/价格 */}
                          <div className="text_wrap">
                            <div className="title"><span className="title">{item.goods_name}</span></div>
                            <div className="sub_title">
                              <span></span>
                              <div className="sun">
                                <span className="jia" onClick={() => {this.reduceNum(item)}}><i className="iconfont icon-jian"></i></span>
                                <span>x{item.goods_num}</span>
                                <span className="jian" onClick={() => {this.addNum(item)}}><i className="iconfont icon-jia"></i></span>
                              </div>
                            </div>
                            <div className="price_edit">
                              <span className="price red">￥{item.goods_price}</span>
                              <span className="delete" onClick={ () => { this.deleteOne(item.goods_id) } }>删除</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }

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



