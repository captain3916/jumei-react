import React, { Component } from 'react';

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
      ]
    }
  }
  render() {
    return (
      <div className='gnd-yiqituan'>
        <div className='gnd-yiqituan-top'>
          <TopBar list={this.state.tabList}></TopBar>
        </div>

      </div>
    )
  }
}

export default Yiqituan
