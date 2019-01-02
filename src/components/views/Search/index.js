

import React, { Component } from 'react'



import './index.scss'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: ''
    }
    this.showList = this.showList.bind(this)

  }
  showList() {
    console.log(1)
    this.state.isShow = true;
    console.log(this.state.isShow)
  }


  render() {
    return (
      <div id='search'>
        <header className='search_top'>
          <i className='iconfont icon-arrow-left' onClick={this.showList}></i>
          <i className='iconfont icon-fangdajing'></i>
          <input className='search_input' placeholder='搜索商品名称、品牌、功效' type="text" />
          <span>搜索</span>
        </header>
        <div className='search_wrap'>
          <div >
            <ul>
              <li>
                <span>1</span>
                <ul>
                  <li>2</li>
                </ul>
              </li>
            </ul>

          </div>

        </div>


      </div>


    )
  }
}

export default Search;
