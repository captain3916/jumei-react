import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:'',
      userPsw:'',
    }
  }
  /* handleChange(key, val) {
    this.setState({
        [key]: val
    })
  } */
  userName = (event) => {
    this.setState({
        userName: event.target.value,
    })
  }
  userPsw = (event) => {
    this.setState({
        userPsw: event.target.value,
    })
  }


  render() {
    return (
      <div className="register">
        <div className="shopCart_header">
          
          <div className="head_back_box">
            <i className="iconfont icon-fanhui"></i>
          </div>
          <div className="head_title ztitle">注册</div>
          
          <div className="head_home">
            <Link to="/login">登录</Link>
          </div>

        </div>
        
        <div className="input-box"> 
          <div className="other-login">
            <span className="other-title" >使用手机注册</span>
          </div>
          {/* 输入手机号 */}
          <div className="jm_phone jm">
            <input type="text" className="register_input" maxLength="11" placeholder="请输入11位手机号" onChange={this.userName}></input>          
          </div>
          {/* 输入短信验证码 */}
          <div className="jm_col jm">
            <input type="text" className="register_input" placeholder="请输入短信验证码" maxLength="6" disabled="value"></input>
            <span>验证</span>
          </div>
          {/* 输入右图验证吗 */}
          <div className="mobile_verify_code jm">
            <input type="text" className="register_input" placeholder="请按右图输入" disabled="value"></input>
            
            <div className="jm_img">
              <img scr={require('./images/yzm.gif')}  alt="" />
            </div>
            
          </div>
          {/* 输入密码 */}
          <div className="jm_pad jm">
            <input type="password" className="register_input" placeholder="6-16位登录密码" onChange={this.userPsw}></input>
          </div>
          {/* 登录按钮 */}
          <button className="jm_button">注册</button>
        </div>
        {/* 底部协议 */}
        <div className="register_agreement jm_center">
          点击注册，表示同意 
          <a href="http://i.jumei.com/m/account/protocol">
          《聚美优品用户协议》
          </a>
        </div>
      </div>

        

    )
  }
}
export default Register;
