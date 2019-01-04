import React, { Component } from 'react';
import './index.scss'
import axios from 'axios'
import Navbar from './Navbar'

export default class Details extends Component {
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
    let name = this.state.list.short_name ? this.state.list.short_name : '';
    let src = this.state.list.image_url_set ? this.state.list.image_url_set.dx_image.url[800] : '';
    return (
      <div className='detailsinfo'>

        <div id='details'>
          <header className='details_top'>
            <i className='iconfont icon-arrow-left'></i>
            <div>{name}</div>
            <i className='iconfont icon-shouye'></i>
          </header>
          <div className='f-img'>
            <img src={src} alt='' />
          </div>
          <div className='prod_detail'>
            <div className='price_info'>
              <span className='curry_price'>
                <span>￥{this.state.list.jumei_price}</span>
                <del>￥{this.state.list.market_price}</del>
              </span>
              <strong>23人已抢购</strong>
            </div>
            <div className='count_down'>
              <span className='jumeiziying'>聚美自营</span>
              {this.state.list.name}
            </div>
          </div>
          <div className='additional-info'>
            <div className='postage-wrap'>
              <div className='postage-type'>分期</div>
              <div className='postage-content'>
                <span className='tip-word'>该商品最多可享花呗12期分期购买福利</span>
              </div>
            </div>
            <div className='postage-wrap'>
              <div className='postage-type'>运费</div>
              <div className='postage-content'>
                <span className='tip-word'>本商品单件包邮</span>
              </div>

            </div>
            <div className='postage-wrap postage-list'>
              <div className='postage-type'>说明</div>
              <div className='postage-content page-list'>
                <span className='tip-word'>
                  <p>
                    <i className='iconfont icon-xuanzhong1'></i>
                    <span>海外直邮</span>
                  </p>
                  <p>
                    <i className='iconfont icon-xuanzhong1'></i>
                    <span>24小时内发货</span>
                  </p>

                  <p>
                    <i className='iconfont icon-xuanzhong1'></i>
                    <span>不支持退货</span>
                  </p>

                  <p>
                    <i className='iconfont icon-xuanzhong1'></i>
                    <span>不支持现金卷</span>
                  </p>

                  <p>
                    <i className='iconfont icon-xuanzhong1'></i>
                    <span>视频红包可抵扣商品20%</span>
                  </p>

                  <p>
                    <i className='iconfont icon-xuanzhong1'></i>
                    <span>分期购物</span>
                  </p>



                </span>
              </div>

            </div>



          </div>


        </div>
        <Navbar list={this.state.list}></Navbar>

      </div>
    )
  }
}
