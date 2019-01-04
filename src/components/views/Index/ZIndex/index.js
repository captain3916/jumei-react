import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './index.scss';

class ZIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: {
        current_index: 1,
      },
      list: [],
      fy: {
        page: 1,
        type: 1,
      }
    };
  }

  // 选项卡切换
  tabClick = (num) => {
    this.setState({
      // 切换
      tab: Object.assign(
        this.state.tab, {
          current_index: num,
        },
      ),
      // 数据切换加载
      fy: Object.assign(
        this.state.fy, {
          type: num,
        },
      ),
    });
    // 数据重新请求
    this.axiosClick();
  }

  // 后台数据请求方法
  axiosClick = () => {
    axios.get('http://129.204.109.25:3000/product/getProduct', {
      params: {
        page: this.state.fy.page,
        type: this.state.fy.type,
      }
    }).then((response) => {
      //筛选出广告数据
      let arr = response.data.data.filter((item) => {
        return !item.label
      })
      // console.log(arr);
      this.setState({
        list: arr,
      })
      console.log(this.state.list);
    })
  }

  componentDidMount() {
    this.axiosClick();
  }
  render() {
    const state = this.state;
    const currentIndex = state.tab.current_index;
    const ulist = this.state.list;
    // console.log(ulist[0]);

    // 商品数据遍历
    let aLI = ulist ?
      ulist.map(item => {
        return (
          <li className="deal-item item-each" key={item._id}>
            <Link to={'/product/' + item.item_id}>
              <div className="product-img">
                <img src={item.image_url_set.dx_image.url[800]} alt="" />
                {/* <img src={ulist[12].image_url_set.dx_image.url[800]} alt="" /> */}
              </div>
              <div className="product-detail">
                <div className="product-title">
                  {item.name}
                </div>
                <div className="price-wrap">
                  <span className="jumei-price">￥{item.jumei_price}</span>
                  <span className="del-price">￥{item.market_price}</span>
                  <p className="">{item.product_desc}</p>
                </div>
              </div>
            </Link>
          </li>
        )
      }) : '';


    return (
      <div className="settle-wrap">

        <ul className="settle-header">
          <li
            onClick={() => this.tabClick(1)}
            // onClick={() => this.listClick(1)}
            className={currentIndex === 1 ? 'active' : ''}>
            今日10点上新
          </li>
          <li
            onClick={() => this.tabClick(2)}
            // onClick={() => this.listClick(2)}
            className={currentIndex === 2 ? 'active' : ''}>
            明日10点预告
          </li>
        </ul>

        {/* 商品列表 */}
        <div className={`settle-list ${currentIndex === 1 ? '' : 'hidden'}`}>

          <ul>
            {
              aLI
            }
          </ul>

        </div>

        <div className={`settle-list ${currentIndex === 2 ? '' : 'hidden'}`}>
          <ul>
            {
              aLI
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default ZIndex;
