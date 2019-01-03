import React, { Component } from 'react';
import './index.scss';

class TopBar extends Component {
  constructor({list}) {
    super();
    this.state = {
      list,
    }
  }
  render() {
    return (
      <ul className='gnd-topbar'>
        <li className='active'><span>haha</span></li>
        {
          this.state.list.map((item,index) => {
            return (
              <li key={index}>
                  <span>{item.title}</span>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default TopBar;
