import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { Toast } from 'antd-mobile';
import IndexTab from '../IndexTab';
import './index.scss';

class ZIndex extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      tab: {
        current_index: 1,
      },
      list:[],
      fy:{
        page:1,
        type:1,
        
      },
      pageCount:'',
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
          page:1,
        },
      ),
      list:[],
    });
    
    // 数据重新请求
    this.axiosClick();
  }


// 滚动事件
  contOnscroll = () => {
    const contDOM = this.myRef.current;
    let istrue = true;
    contDOM.onscroll = () => {
      if (this.state.fy.page > this.state.pageCount) {
        return;
      }
      const conH = contDOM.offsetHeight; // 容器高度
      const totalH = contDOM.children[3].offsetHeight; // 里面子元素的高度

      const tota0 = contDOM.children[0].offsetHeight;
      const tota1 = contDOM.children[1].offsetHeight;
      const tota2 = contDOM.children[2].offsetHeight;

      if (contDOM.scrollTop >= totalH - conH + tota0 +  tota1 + tota2  && istrue) {

        istrue = false;
        this.setState((oldState) => ({
          fy: Object.assign(oldState.fy, {page: oldState.fy.page + 1 })
        }), () => {
            if (this.state.fy.page > this.state.pageCount) {
              Toast.info('别拉了,我是有底线的...', 1.5);
              return;
            }
          this.axiosClick();
        })
        setTimeout( () => {
          this.contOnscroll()
        },100)
      }
    }
  }
    

  // 后台数据请求
  axiosClick = () => {
    Toast.loading('Loading...', 0, () => {
      console.log('Load complete !!!');
    });
    axios.get('http://129.204.109.25:3000/product/getProduct', {
      params: {
        page: this.state.fy.page,
        type: this.state.fy.type,
        pageSize: 5,
      }
    }).then((response) => {
      //筛选出广告数据
      if(response.data.code === 0){
        // console.log(response.data.data);
        this.setState((oldState) => ({
          list: [...(oldState.list),...response.data.data],
          pageCount:response.data.pageCount,
        }))
        Toast.hide();
      }
    })
  }

  componentDidMount() {
    this.axiosClick();
    this.contOnscroll();
  }
  
  render() {
    const state = this.state;
    const currentIndex = state.tab.current_index;
    const ulist = this.state.list;

    // 商品数据遍历
    let aLI = ulist ?
    ulist.map((item,index) => {
      return (

        <li className="deal-item item-each" key={index}>
          <Link to={ '/product/' + item.item_id }>
            <div className="product-img">
              <img src={item.image_url_set.dx_image.url[800]} alt="" />
              {/* <img src={ulist[0].image_url_set.dx_image.url[800]} alt="" /> */}
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
      <div className="settle-wrap" ref={this.myRef}>
        
        <div className="Zsearch">
          <Link to="/search">
            <div id="page_top" className="index-search" >
              <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png" alt=""/>
              <span>搜索商品 分类 功效</span>
            </div>
            <span id="search_action">
              <img   src="//f0.jmstatic.com/btstatic/h5/index/search_list2.png" className="search" alt="" />
            </span>
          </Link>
        </div>

        <IndexTab ></IndexTab>


        <ul className="settle-header">
          <li
            onClick={() => this.tabClick(1)}
            className={currentIndex === 1 ? 'active' : ''}>
            今日10点上新
          </li>
          <li
            onClick={() => this.tabClick(2)}
            className={currentIndex === 2 ? 'active' : ''}>
            明日10点预告
          </li>
        </ul>

        {/* 商品列表 */}
        {/* <div className={`settle-list ${currentIndex === 1 ? '' : 'hidden'}`}> */}
        <div className="settle-list">
          <ul>{ aLI }</ul>
          <div className="zw"></div>
        </div>

        {/* <div className={`settle-list ${currentIndex === 2 ? '' : 'hidden'}`}>
          <ul>{ aLI }</ul>
        </div> */}
      </div>
    )
  }
}
export default ZIndex;
