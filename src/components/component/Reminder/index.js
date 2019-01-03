import React, { Component } from 'react'

import './index.scss'
export default class Reminder extends Component {
  render() {
    return (
      // 提示框
      <div className="shade">
        <div className="reminder">
          <div className="title">确定要删除此商品?</div>
          <div className="content">
            <div className="ok">确定</div>
            <div className="cancel">取消</div>
          </div>
        </div>
      </div>
    )
  }
}
