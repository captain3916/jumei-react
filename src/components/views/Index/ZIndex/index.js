import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './index.scss';

class ZIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: {
        current_index: 0,
      },
      list:[ ],
    };
  }

  tabClick = (num) => {
    this.setState({
      tab: Object.assign(
        this.state.tab, {
          current_index: num,
        },
      ),
    });
  }

  componentDidMount(){
    axios.get('http://129.204.109.25:3000/product/getProduct?page=2&type=2' , {
      params:{

      }
    }).then((response) => {
      // console.log(response.data);
        this.setState({
          list:response.data,
        })
    })
  }
  render() {
    const state = this.state;
    const currentIndex = state.tab.current_index;
    const ulist = this.state.list.data;

    let aLI = ulist ? 
    ulist.map(item => {
      return (
        <li className="deal-item item-each" key={item._id}>
          <Link to={
                {
                  pathname:'/product',
                  state:item,
                }
          }>
            <div className="product-img">
              <img src={item.image_url_set.dx_image.url[320]} alt="" />
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
          <li onClick={() => this.tabClick(0)} className={currentIndex === 0 ? 'active' : ''}>
            今日10点上新
          </li>
          <li onClick={() => this.tabClick(1)} className={currentIndex === 1 ? 'active' : ''}>
            明日10点预告
          </li>
        </ul>

        {/* 商品列表 */}
        <div className={`settle-list ${currentIndex === 0 ? '' : 'hidden'}`}>
          
          <ul>
            {
              aLI
            }
              
          </ul>

          
          

          
        </div>
        <div className={`settle-list ${currentIndex === 1 ? '' : 'hidden'}`}>
          <div className="deal-item item-each">
              <Link to={
                {
                  pathname:'/product',
                  state:'hello',
                }
              }>
                <div className="product-img">
                  <img src="http://mp6.jmstatic.com/product/000/818/818484_std/818484_dx_1154_400.jpg?_t=1501409562&imageView2/2/w/800/q/90" alt="" />
                </div>
                <div className="product-detail">
                  <div className="product-title">
                    兰蔻粉水清滢柔肤水（干性）200ml，解救换季干燥肌
                  </div>
                  <div className="price-wrap">
                    <span className="jumei-price">￥205</span>
                    <span className="del-price">￥305</span>
                    <p className="">1.2万条评论</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
      </div>
    )
  }
}
export default ZIndex;
