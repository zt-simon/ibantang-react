import React, {Component} from 'react'
class Header extends Component {
  static propTypes = {
    clicked: React.PropTypes.func
  }
  constructor (props) {
    super(props)
    this.state = {
      inputWidth: '200'
    }
  }

  inputAdd = () => {
    this.setState({
      inputWidth: '300'
    })
  }
  render () {
    return (
      <div className='header'>
        <div className='header_nav'>
          <ul>
            <li className='logo' ><a href='index.html' /></li>
            <li className='header_nav_li'><a href='index.html'>首页</a></li>
            <li className='header_nav_li'><a href='#'>发现</a></li>
            <li className='header_nav_li'><a href='#'>好物</a></li>
            <li className='header_nav_li'><a href='#'>写文章</a></li>
            <li className='header_nav_li'><a href='#'>优惠券</a>
              <i className='i' /></li>
          </ul>
        </div>
        <div className='header_right'>
          <div className='fangD'>
            <a href='#' />
            <input type='text' className='fangD_input' style={{width: this.state.inputWidth + 'px'}} onFocus={this.inputAdd} placeholder='输入你想要的' />
          </div>
          <div className='login'>
            <input type='button' className='login_button' onClick={this.props.clicked} value='注册 / 登录' />
          </div>
        </div>
      </div>
    )
  }
}
export default Header
