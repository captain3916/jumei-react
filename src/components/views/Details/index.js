import React, { Component } from 'react';
import './index.scss'

export default class Details extends Component {
  render() {
    return (
      <div id='details'>
        <header className='details_top'>
          <i className='iconfont icon-arrow-left'></i>
          <div>多媚卡雅清洁冻膜500g</div>
          <i className='iconfont icon-shouye'></i>
        </header>
        <div className='f-img'>
          <img src='http://lorempixel.com/375/375/' alt='' />
        </div>
        <div className='prod_detail'>
          <div className='price_info'>
            <span className='curry_price'>
              <span>￥279</span>
              <del>￥335</del>
            </span>
            <strong>23人已抢购</strong>
          </div>
          <div class='count_down'>
            <span>聚美自营</span>
            纪梵希香榭高定天鹅绒唇膏3.4g，展现你的时尚品味！
		      </div>
        </div>
        <div className='additional-info'>
          <div className='postage-wrap'>
            <div className='postage-type'>分期</div>
            <div className='postage-content'>
              <span className='tip-word'>该商品最多可享花呗12期分期购买福利</span>
            </div>

          </div>
          <div></div>
          <div></div>



        </div>

      </div>
    )
  }
}
