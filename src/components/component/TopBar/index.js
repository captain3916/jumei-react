import React, { Component } from 'react';
import './index.scss';

class TopBar extends Component {
  constructor({list}) {
    super();
    this.state = {
      list,
      curTab: list[0].key
    }
  }

  tabActive(curTab) {
    if (curTab === this.state.curTab) return;
    this.setState(() => ({ curTab }), () => {
      this.props.changeTab(curTab);
    });
  }

  render() {
    return (
      <ul className='gnd-topbar'>
        {
          this.state.list.map((item,index) => {
            return (
              <li key={index}
                className={ item.key === this.state.curTab ? 'active' : '' }
                onClick={this.tabActive.bind(this, item.key)}>
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
