import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Toast } from 'antd-mobile';
import { LoginURL } from '../../../common/API/serverApi';
import store from '../../../store/index';

import './index.scss';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      userName: '',
      userPwd: '',
    }
    this.loginAction = this.loginAction.bind(this);
    console.log(store.getState());
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
    const phoneReg = /^1\d{10}$/; // 手机号正则
    const pswReg = /^\w{6,20}$/; // 密码正则
    if (!phoneReg.test(this.state.userName)) {
      Toast.info('手机号输入有误,请检查!', 1.5);
    } else if (!pswReg.test(this.state.userPwd)) {
      Toast.info('密码输入有误,请检查!', 1.5);
    } else {
      axios.post(LoginURL, {
        userName: this.state.userName,
        userPsw: this.state.userPwd
      }).then((response) => {
        if (response.data.code === 0) {
          // 登录成功
          // 写入本地存储
          localStorage.setItem('jumei_userName', response.data.userName);
          // 告诉仓库
          store.dispatch({type: 'SETUSERNAME', data: response.data.userName});
          store.dispatch({type: 'SETISLOGIN', data: true});
          // 页面跳转
          this.props.history.go(-1);
        } else {
          Toast.info(response.data.msg, 1.5);
        }
      })
    }
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
            <Link to="/">使用手机短信码登录</Link>
            <Link to="/">忘记密码？</Link>
          </div>
          <input type="button" className="log_button" value="登录" onClick={this.loginAction}/>
        </div>
      </div>
    )
  }
}

export default Login
