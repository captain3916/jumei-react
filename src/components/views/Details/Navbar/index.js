import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
export default class Navbar extends Component {




  render() {
    let id = this.props.list.item_id
    console.log(id)
    return (
      <Fragment>

        <ul className='f-navbar'>
          <li className='f-left'>
            <div className='f-left-a'>
              <i className='iconfont icon-dianpu '></i>
              <span>店铺</span>
            </div>
            <div className='f-left-a'>
              <i className='iconfont icon-gouwu'></i>
              <span>购物</span>
            </div>

          </li>
          <NavLink className='f-cart' to='/'>
            <li className='f-cart'>加入购物车</li>
          </NavLink>
          <NavLink to={`/cart/${id}`} className='f-buy'>
            <li>立刻购买</li>
          </NavLink>
        </ul>


      </Fragment>
    )
  }
}
