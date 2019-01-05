import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import { Toast } from 'antd-mobile';

import store from '../../../../store/index';

export default class Navbar extends Component {


  // 加入购物车
  addGood = () => {
    // console.log(store.getState());


    store.dispatch({
      type: 'ADDGOOD',
      data: {
        goods_id: this.props.list.item_id,
        goods_name: this.props.list.short_name,
        goods_price: this.props.list.jumei_price,
        goods_img: this.props.list.image_url_set.dx_image.url[800],
      }
    })
    Toast.info('加入成功！', 1.5);
  }
  toCart = () => {
    let id = this.props.list.item_id;
    let islongin = store.getState();
    let login = islongin.userInfo.isLogin;
    console.log(login)
    if (login) {
      this.props.history.push({
        pathname: `/cart/${id}`
      })

    } else {
      console.log(2)
      console.log(this.props)
      this.props.history.push({
        pathname: '/login'
      })
    }



  }


  render() {

    return (
      <div className='nav_bottom'>
        <ul className='f-navbar'>
          <li className='f-left'>
            <div className='f-left-a'>
              <i className='iconfont icon-dianpu '></i>
              <span>店铺</span>
            </div>
            <Link className='f-left-a' to='/shopcard'>
              <i className='iconfont icon-gouwu'></i>
              <span>购物车</span>
            </Link>

          </li>
          <li className='f-cart'
            onClick={this.addGood}>加入购物车</li>
          {/* <Link to={{ login } === false ? `/cart/${id}` : '/login'} className='f-buy' ></Link> */}
          <li className='f-buy' onClick={this.toCart}>立刻购买</li>

        </ul>

      </div>
    )
  }
}
