import React, { Component } from 'react';

import './index.scss';

class Login extends Component {
  render() {
    return (
      <div id="warper">
        <section className="log_header">
          <a href="xxx">
            <i className="iconfont icon-fanhui"></i>
          </a>
          <h1>登录</h1>
          <a href="yyy">注册</a>
        </section>
        <form className="biaodan">
          <div className="other-login-outer">
            <div className="out-login">
              <div  className="out-login-before"></div>
              <span className="out-title">使用聚美账号登录</span>
            </div>
          </div>
          <div className="jm_lous">
            <input type="text" className="lous_input" placeholder="已注册的手机号/邮箱/用户名/" name="email" id="acount"></input>
          </div>
          <div className="jm_lous jm_lous2">
            <input type="password" className="lous_input" placeholder="6-16位登录密码" name="password"></input>
          </div>
          <div className="slider">
          </div>
          <div className="jm_wjmm">
            <a href="xxx">使用手机短信码登录</a>
            <a href="yyy">忘记密码？</a>
          </div>
          <input type="submit" className="log_button" value="登录" />
        </form>
      </div>
    )
  }
}

export default Login
