import React, { Component } from 'react';

import Header from '../component/Header';
import Search from '../component/Search';
import IndexTab from '../component/IndexTab';

export default class ZGlobal extends Component {
  constructor(props){
    super(props);
    this.state = {
      MyText : '极速免税店'
    }
  }

  render() {
    return (
      <div className ="global">
        <Header tabs = {this.state.MyText} history={this.props.history}></Header>
        <Search></Search>
        <IndexTab ></IndexTab>
        极速免税店
      </div>
    )
  }
}
