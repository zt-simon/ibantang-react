import React, {Component} from 'react'
import Register from '../article/Register'
class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      header_right_Width: '400',
      inputWidth: '190',
      pl: '搜索你想要的',
      value: '',
      hover: 'none'
    }
  }
  click = () => {
    this.setState({
      hover: 'block'
    })
  }
  hoverClick = () => {
    this.setState({
      hover: 'none'
    })
  }

  inputAdd = () => {
    this.setState({
      header_right_Width: '430',
      inputWidth: '220',
      pl: ''
    })
  }
  inputDel = () => {
    this.setState({
      header_right_Width: '400',
      inputWidth: '190',
      pl: '搜索你想要的'
    })
  }
  inputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render () {
    return (
      <div>
        <div className='register' style={{display: this.state.hover}}><Register />
        </div>
        <div className='hover' style={{display: this.state.hover}} onClick={this.hoverClick} />
        <div className='header'>
          <div className='header_nav'>
            <div className='logo'><a href='index.html' /></div>
            <div className='header_nav_li'><a href='index.html'>首页</a></div>
            <div className='header_nav_li'><a href='find.html'>发现</a></div>
            <div className='header_nav_li'><a href='#'>好物</a></div>
            <div className='header_nav_li'><a href='article.html'>写文章</a></div>
            <div className='header_nav_li'><a href='save.html'>优惠券</a>
              <i className='i' /></div>
          </div>
          <div className='header_right'>
            <div className='fangD'>
              <a href={'search.html?q=' + this.state.value} />
              <input type='text' className='fangD_input' style={{width: this.state.inputWidth + 'px'}} onFocus={this.inputAdd} onBlur={this.inputDel} placeholder={this.state.pl} onChange={this.inputChange} />
            </div>
            <div className='login'>
              <input type='button' className='login_button' onClick={this.click} value='注册 / 登录' />
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default Header
