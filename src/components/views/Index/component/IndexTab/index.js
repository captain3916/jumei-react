import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

import './index.scss';

 class IndexTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexTab: [
        { key: 'index', href: "/index/i", icon: "icon-films", name: '首页' },
        { key: 'global', href: "/index/global", icon: "icon-cinemas", name: '极速免税店' },
        { key: 'muandbaby', href: "/index/muandbaby", icon: "icon-sales", name: '母婴' },
        { key: 'luxury', href: "/index/luxury", icon: "icon-center", name: '轻奢' },
        { key: 'pop', href: "/index/pop", icon: "icon-center", name: '名品特' },
      ],
    };
  }
  render() {
    let tabs = this.state.indexTab;
    return (
      <div className="Tba">
      <ul className="index-bar">
        {
          tabs.map(item => {
            return (
              <li className="index-bar-item" key={item.key}>
                <NavLink to={item.href}>
                  <span>{item.name}</span>
                  {/* <span className="hx"></span> */}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
      </div>
    )
  }
}


export default IndexTab ;
