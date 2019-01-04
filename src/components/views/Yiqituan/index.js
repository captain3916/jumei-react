import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { GetYiqituanInfo } from '../../../common/API/serverApi';
import { Toast } from 'antd-mobile';

import TopBar from '../../component/TopBar';
import './index.scss';

class Yiqituan extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      tabList: [
        {title: '推荐', key: 'coutuan_home'},
        {title: '母婴健康', key: 'coutuan_baby'},
        {title: '家居', key: 'coutuan_makeup'},
        {title: '美妆', key: 'coutuan_furniture'},
        {title: '礼品箱包', key: 'coutuan_bag'},
        {title: '鞋类', key: 'coutuan_jewellery'},
        {title: '饰品配饰', key: 'coutuan_shose'},
        {title: '下期预告', key: 'coutuan_next'},
      ],
      getInfo: {
        tab: 'coutuan_home',
        page: 1,
        per_page: 5,
        total_Page: 0
      },
      allGoods: []
    }

    this.getGoodInfo = this.getGoodInfo.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.contOnscroll = this.contOnscroll.bind(this);
  }

  //上方标签更改
  changeTab(tab) {
    this.setState((oldState) => ({
      allGoods: [],
      getInfo: Object.assign(oldState.getInfo, {tab, page: 1})
    }), () => {
      this.getGoodInfo();
    });

  }

  // 滚动事件
  contOnscroll() {
    const contDOM = this.myRef.current;
    contDOM.onscroll = () => {
      const conH = contDOM.offsetHeight; // 容器高度
      const totalH = contDOM.children[0].offsetHeight; // 里面子元素的高度
      if (contDOM.scrollTop >= totalH - conH) {
        this.setState((oldState) => ({
          getInfo: Object.assign(oldState.getInfo, {page: oldState.getInfo.page + 1 })
        }), () => {
            if (this.state.getInfo.page > this.state.getInfo.total_Page) {
              Toast.info('别拉了,我是有底线的...', 1.5);
              return;
            }
            this.getGoodInfo();
        })
      }
    }
  }

  // 获取产品信息
  getGoodInfo() {
    Toast.loading('Loading...', 0, () => {
      console.log('Load complete !!!');
    });
    axios.get(GetYiqituanInfo,{params: this.state.getInfo})
      .then((response) => {
        if (response.data.code === 0) {
          let total_Page = Math.ceil(response.data.data.total / this.state.getInfo.per_page);
          this.setState((oldState) => ({
            allGoods: [...(oldState.allGoods),...response.data.data.list],
            getInfo: Object.assign(oldState.getInfo, {total_Page})
          }))
          Toast.hide();
        }
      })
  }

  componentDidMount() {
    this.getGoodInfo();
    this.contOnscroll();
  }

  render() {
    return (
      <div className='gnd-yiqituan'>
        <div className='gnd-yiqituan-top'>
          <TopBar list={this.state.tabList}
            changeTab={this.changeTab}></TopBar>
        </div>
        <section className='gnd-yiqituan-product'
          ref={this.myRef}>
          <ul>
            {
              this.state.allGoods.map((item, index) => {
                return (
                  <li key={index}>
                    <Link  to={ '/product/' + item.item_id } className='goods'>
                      <div className='people-number'>{item.buyer_number_text}</div>
                      <div className='goods-topsmall'>
                        <img src={item.image} alt=''/>
                      </div>
                      <div className='goods-middle'>
                        <span className='goods-num'>{item.group_name_tag}</span>
                        {item.short_name}
                      </div>
                      <div className='goods-foot'>
                        <div className='price-left'>
                          <span className='ct-price'>{item.jumei_price}</span>
                          <span className='sc-price'></span>
                          <span className='jm-price'>{item.single_price}</span>
                        </div>
                        <div className='time-right timer'>
                          <span className='goods-btn'>去开团</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </div>
    )
  }
}

export default Yiqituan
