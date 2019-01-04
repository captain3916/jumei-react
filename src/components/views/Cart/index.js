import React, { Component } from 'react'
import axios from 'axios'
import './index.scss'

export default class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: {}
    }
  }
  getOne() {
    let id = this.props.location.pathname.split('/')[2]
    let params = {
      item_id: id
    }
    axios.get('http://129.204.109.25:3000/product/getOne', { params }).then((res) => {
      this.setState({
        list: res.data.data
      }, () => {
        // console.log(this.state.list.image_url_set.dx_image)
      })

    })
  }
  componentDidMount() {
    this.getOne()


  }
  render() {
    console.log(this.state.list)
    let name = this.state.list.short_name ? this.state.list.short_name : '';

    return (
      <div id='cart'>
        <header className='details_top'>
          <i className='iconfont icon-arrow-left'></i>
          <div>结算中心</div>
          <i className='iconfont icon-shouye'></i>
        </header>



      </div>
    )
  }
}
