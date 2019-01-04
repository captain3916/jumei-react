import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './index.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:'',
      userPsw:'',
    }
    // this.Register = this.Register.bind(this);
  }
  Tologin = () => {
    this.props.history.push('/center')
  }
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
  Register = () => {
    console.log(this.state.userName);
    axios.post('http://129.204.109.25:3000/user/register', {
      
        userName: this.state.userName,
        userPsw: this.state.userPsw,
      
    }).then((response) => {
      //筛选出广告数据
        console.log(response);
      })
  }

          
  render() {
     return (       
      <div className="register">
        <div className="shopCart_header">
          <div className="head_back_box" onClick={ this.Tologin}>
            <i className="iconfont icon-fanhui"></i>
          </div>
          <div className="head_title">注册</div>
          <div className="head_home">
            <Link to="/login">
              <span>登录</span>
            </Link>
          </div>
        </div>
        <div className="input-box"> 
          <div className="other-login">
            <span className="other-title" >使用手机注册</span>
          </div>
          {/* 输入手机号 */}
          <div className="jm_phone jm">
            <input type="text" className="register_input" maxLength="11" value={this.state.userName} placeholder="请输入11位手机号"  onChange={this.userName}></input>          
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
            <input type="password" className="register_input" placeholder="6-16位登录密码" /* value={this.state.userPsw} */ onChange={this.userPsw}></input>
          </div>
          {/* 登录按钮 */}
          <button className="jm_button" onClick={  this.Register }>注册</button>
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
