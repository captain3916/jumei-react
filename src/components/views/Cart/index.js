import React, { Component } from 'react'
import axios from 'axios'
import './index.scss'
import store from '@/store/index.js'

export default class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: {},
      num: 1
    }
    this.addCart = this.addCart.bind(this)
    this.reduceCart = this.reduceCart.bind(this)
  }
  addCart() {
    console.log(store.getState())
    this.setState({
      num: this.state.num + 1
    })
  }
  reduceCart() {
    this.setState({
      num: this.state.num === 1 ? 1 : this.state.num - 1
    })
  }
  getOne() {
    let id = this.props.location.pathname.split('/')[2]
    let params = {
      item_id: id
    }
    axios.get('http://129.204.109.25:3000/product/getOne', { params }).then((res) => {
      this.setState({
        list: res.data.data
      }, () => {
        // console.log(this.state.list.image_url_set.dx_image)
      })

    })
  }
  componentDidMount() {
    this.getOne()


  }
  render() {
    console.log(this.state.list)
    let list = this.state.list ? this.state.list : {};
    let price = parseInt(list.jumei_price)
    let src = this.state.list.image_url_set ? this.state.list.image_url_set.dx_image.url[640] : '';
    let totalprice = this.state.num * price

    return (
      <div id='cart'>
        <header className='details_top'>
          <i className='iconfont icon-arrow-left'></i>
          <div>结算中心</div>
          <i className='iconfont icon-shouye'></i>
        </header>
        <div className='use_adress'>
          <i className='iconfont icon-location'></i>
          <div className='use_adress_info'>
            <div>
              <span>收件人: *飞</span>
              <span>132****3700</span>
            </div>
            <div>广东省-深圳市-宝安区-后瑞村西部硅谷</div>
          </div>
          <i className='iconfont icon-icon'></i>
        </div>
        <div className='time-select-box'>
          <i className='iconfont icon-dianpu'></i>
          <span>工作日/双休/节假日均可收货</span>
          <i className='iconfont icon-icon'></i>
        </div>
        <div className='group-head'>
          <i className='iconfont icon-shouye'></i>
          <span className='group-right'>聚美优品发货</span>
        </div>
        <div className='product-item'>
          <div className='pimg'>
            <img className='product-img' src={src} alt="" />
          </div>
          <div className='item_info'>
            <div className='product-info'>
              <div>{list.short_name}</div>
              <div>￥{list.jumei_price}</div>
            </div>
            <div className='product-count'>
              <span>123</span>
              <span>X{this.state.num}</span>
            </div>
          </div>
        </div>
        <div className='presale'>
          <span>购物数量</span>
          <div className='addcart'>
            <i className='iconfont icon-jian1' onClick={this.reduceCart}></i>
            <span>{this.state.num}</span>
            <i className='iconfont icon-jia1' onClick={this.addCart}></i>
          </div>
        </div>
        <div className='total'>
          <div>小计</div>
          <div className='price'>￥{totalprice}</div>
        </div>
        <div className='paymoney'>
          <div className='left'>
            <div className='jine'>
              合计
             <span>￥{totalprice}</span>
            </div>
            <div>
              共 {this.state.num} 件商品
            </div>
          </div>
          <div className='right'>
            <button>支付</button>
          </div>
        </div>

      </div>
    )
  }
}
