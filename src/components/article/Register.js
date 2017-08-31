import React, {Component} from 'react'
import '../../assets/styles/article/register.styl'
class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      style: 'hidden',
      display: 'none'
    }
  }
  // changeStyle = () => {
  //   this.setState({
  //     style: 'block'
  //   })
  // }
  submit = () => {
    let flg = document.getElementsByClassName('mobile-s')[0]
    console.log(flg)
    if (flg.value === '') {
      console.log(123)
      this.setState({
        style: 'visible'
      })
      return false
    }
  }
  changeDisplay = () => {
    this.setState({
      display: 'block'
    })
  }
  render() {
    return (
      <div className='out-s'>
        <div className='bg-register-s' />
        <form className='register-s'>
          <input className='register-input-s mobile-s' type='text' placeholder='手机号' />
          <br />
          <div style={{display: this.state.display}}>
            <input className="code-s" type="text" placeholder="验证码" /><input className="code-get-s" type="button" value="获取验证码" />
          </div>
          <input className='register-input-s' type='password' placeholder='密码' />
          <br />
          <input className='register-submit-s' onClick={this.submit} type='button' value='登录' />
          <br />
          <span className='register-mobile-style' style={{visibility: this.state.style}}>请输入手机号</span>
          <br />
          <div className='register-user-s' onClick={this.changeDisplay}>注册</div>
          <div className="clear comm-s">
            <div className="line-left left" /> <span style={{color: '#787878', fontSize: '14px'}}>社交账号快速登录</span> <div className="right line-right" />
          </div>
          <div className="img-s-out clear">
            <div className="mg-weibo-s-out left">
              <a href="https://api.weibo.com/oauth2/authorize" className="img-s img-weibo-s" /> <br /><div className="weibo-s">微博</div>
            </div>
            <div className="img-wechat-s-out right">
              <a href='https://graph.qq.com/oauth/show?which=Login' className="img-s img-wechat-s" alt="" /> <br /><div className="qq-s">QQ</div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default Register
