import React, { Component } from 'react'
import axios from 'axios'
import './index.scss'

export default class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: {}
    }
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
          <span class='group-right'>聚美优品发货</span>
        </div>
        <div className='product-item'>
          <img src="http://lorempixel.com/60/60" alt="" />
          <div className='item_info'>
            <div className='product-info'>
              <div>123</div>
              <div>￥124</div>
            </div>
            <div className='product-count'>111</div>
          </div>
        </div>


      </div>
    )
  }
}
