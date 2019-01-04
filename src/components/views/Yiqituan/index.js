import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { GetYiqituanInfo } from '../../../common/API/serverApi'

import TopBar from '../../component/TopBar';
import './index.scss';

class Yiqituan extends Component {
  constructor() {
    super();
    this.state = {
      tabList: [
        {title: '推荐', key: 'coutuan_home'},
        {title: '母婴健康', key: 'coutuan_baby'},
        {title: '家居', key: 'coutuan_makeup'},
        {title: '美妆', key: 'coutuan_furniture'},
        {title: '礼品箱包', key: 'coutuan_bag'},
        {title: '鞋类', key: 'coutuan_jewellery'},
        {title: '饰品配饰', key: 'coutuan_shose'},
        {title: '下期预告', key: 'coutuan_home'},
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
  }

  getGoodInfo() {
    axios.get(GetYiqituanInfo,{params: this.state.getInfo})
      .then((response) => {
        if (response.data.code === 0) {
          let total_Page = Math.ceil(response.data.data.total / this.state.getInfo.per_page);
          this.setState((oldState) => ({
            allGoods: [...(oldState.allGoods),...response.data.data.list],
            getInfo: Object.assign(oldState.getInfo, {total_Page})
          }))
        }
      })
  }

  componentDidMount() {
    this.getGoodInfo();
  }

  render() {
    return (
      <div className='gnd-yiqituan'>
        <div className='gnd-yiqituan-top'>
          <TopBar list={this.state.tabList}></TopBar>
        </div>
        <section className='gnd-yiqituan-product'>
          <ul>
            {
              this.state.allGoods.map((item) => {
                return (
                  <li key={item.item_id}>
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
