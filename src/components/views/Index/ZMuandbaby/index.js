import React, { Component } from 'react'

import Header from '../component/Header';
import Search from '../component/Search';
import IndexTab from '../component/IndexTab';
export default class ZMuandbaby extends Component {
  constructor(props){
    super(props);
    this.state = {
      MyText : '母婴'
    }
  }

  render() {
    return (
      <div>
        <Header tabs = {this.state.MyText} history={this.props.history}></Header>
        <Search></Search>
        <IndexTab ></IndexTab>
        母婴
      </div>
    )
  }
}

