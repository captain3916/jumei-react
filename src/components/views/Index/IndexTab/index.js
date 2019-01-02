import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

import './index.scss';

 class IndexTab extends Component {
  render() {
    let tabs = this.props.tabs;
    return (
      <ul className="index-bar">
        {
          tabs.map(item => {
            return (
              <li className="index-bar-item" key={item.key}>
                <NavLink to={item.href}>
                  <span>{item.name}</span>
                  <span className="hx"></span>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    )
  }
}


export default IndexTab ;
