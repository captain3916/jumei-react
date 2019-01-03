import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

class TabBar extends Component {
  constructor() {
    super();
    this.state = {
      tabList : [
        {
          path: '/index',
          title: '首页',
          icon: 'icon-shouye'
        },
        {
          path: '/yiqituan',
          title: '拼团',
          icon: 'icon-pintuan'
        },
        {
          path: '/shopcard',
          title: '购物车',
          icon: 'icon-gouwuche'
        },
        {
          path: '/center',
          title: '我的',
          icon: 'icon-sousuo'
        }
      ]
    }
  }
  render() {
    return (
      <ul className='gnd-tabbar'>
        {
          this.state.tabList.map((item,index) => {
            return (
              <li key={index}>
                <NavLink to={item.path}>
                  <i className={`iconfont ${item.icon}`}></i>
                  <span>{item.title}</span>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default TabBar;
