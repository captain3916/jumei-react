import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { LoginURL } from '../../../common/API/serverApi';

import './index.scss';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      userName: '',
      userPwd: '',
    }
    this.loginAction = this.loginAction.bind(this);
  }

  changeUserName(e){
    let userName = e.target.value;
    this.setState(()=>({userName}))
  }
  changeUserPwd(e){
    let userPwd = e.target.value;
    this.setState(()=>({userPwd}))
  }
  loginAction(){
    console.log(1);
    // let =
    axios.post('http://129.204.109.25:3000/user/login', {
      userName: this.state.userName,
      userPsw: this.state.userPwd
    }).then((response) => {
      console.log(response);
    })
    
  }
  render() {
    return (
      <div id="warper">
        <section className="log_header">
          <span onClick={() => {this.props.history.go(-1)}}>
            <i className="iconfont icon-fanhui"></i>
          </span>
          <h1>登录</h1>
          <Link to="/register">注册</Link>
        </section>
        <div className="biaodan">
          <div className="other-login-outer">
            <div className="out-login">
              <div  className="out-login-before"></div>
              <span className="out-title">使用聚美账号登录</span>
            </div>
          </div>
          <div className="jm_lous">
            <input type="text" className="lous_input" placeholder="已注册的手机号/邮箱/用户名/" name="email" id="acount" value={this.state.userName}
            onChange={this.changeUserName.bind(this)}></input>
          </div>
          <div className="jm_lous jm_lous2">
            <input type="password" className="lous_input" placeholder="6-16位登录密码" name="password"
            value={this.state.userPwd}
            onChange={this.changeUserPwd.bind(this)}></input>
          </div>
          <div className="slider">
          </div>
          <div className="jm_wjmm">
            <a href="xxx">使用手机短信码登录</a>
            <a href="yyy">忘记密码？</a>
          </div>
          <input type="button" className="log_button" value="登录" onClick={this.loginAction}/>
        </div>
      </div>
    )
  }
}

export default Login
