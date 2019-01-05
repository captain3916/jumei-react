import React, { Component } from 'react';
// import { NavBar, Icon } from 'antd-mobile';
import IndexTab from '../IndexTab';
import './index.scss';

export default class ZGlobal extends Component {
  render() {
    return (
      <div>
        <IndexTab></IndexTab>
        极速免税店
        {/* <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          ]}
          >NavBar
        </NavBar> */}

      </div>
    )
  }
}
