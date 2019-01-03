

import React, { Component } from 'react'
import axios from 'axios'
import { Accordion, List } from 'antd-mobile';



import './index.scss'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
      list: [],
      listShow: false
    }
    this.showList = this.showList.bind(this);
    this.noneList = this.noneList.bind(this)

  }
  componentDidMount() {
    this.getSearch()
  }
  onChange = (key) => {
    console.log(key)
  }
  getSearch() {
    axios.get('http://129.204.109.25:3000/search/key').then((res) => {
      this.setState({
        list: res.data.data
      })
    })
  }
  showList() {

    this.setState({
      isShow: true
    })
  }
  noneList() {
    this.setState({
      isShow: false
    })
  }

  render() {
    return (
      <div id='search'>
        <header className='search_top'>
          <i className='iconfont icon-arrow-left' onClick={this.showList}></i>
          <i className='iconfont icon-fangdajing'></i>
          <input className='search_input' onClick={this.noneList} placeholder='搜索商品名称、品牌、功效' type="text" />
          <span>搜索</span>
        </header>
        <div className='search_wrap'>
          <div style={{ marginTop: 10, marginBottom: 10, display: (this.state.isShow === true) ? "block" : "none" }}>
            <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
              {this.state.list.map((item, index) => {
                return (
                  <Accordion.Panel header={item.name} key={index}>
                    <List className="my-list">
                      {item.sub_categories.map((it, i) => {
                        return <List.Item key={it.category_id}>{it.name}</List.Item>
                      })
                      }
                    </List>
                  </Accordion.Panel>
                )
              })
              }

            </Accordion>





          </div>

        </div>


      </div >


    )
  }
}

export default Search;
