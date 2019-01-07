import React, { Component } from 'react'

import Header from '../component/Header';
import Search from '../component/Search';
import IndexTab from '../component/IndexTab';

export default class ZPop extends Component {
  constructor(props){
    super(props);
    this.state = {
      MyText : '名品特'
    }
  }

  render() {
    return (
      <div>
        <Header tabs = {this.state.MyText} history={this.props.history}></Header>
        <Search></Search>
        <IndexTab ></IndexTab>
        名品特
      </div>
    )
  }
}

