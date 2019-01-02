import React, {
  Component
} from 'react';

import './index.scss';

class ZIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: {
        current_index: 0,
      },
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
  render() {
    const state = this.state;
    const currentIndex = state.tab.current_index;
    return ( 
      <div className="settle-wrap">
        <ul className="settle-header">
        <li onClick={() => this.tabClick(0)} className={currentIndex === 0 ? 'active' : ''}>今日10点上新</li>
        <li onClick={() => this.tabClick(1)} className={currentIndex === 1 ? 'active' : ''}>明日10点预告</li>
        </ul>
        <div className={currentIndex === 0 ? '' : 'hidden'}>第一帧</div>
        <div className={currentIndex === 1 ? '' : 'hidden'}>第二帧</div>
      </div>
    )
  }
}
export default ZIndex;
