import React, {Component} from 'react'
import '../../assets/styles/host/firstpage-header.styl'
class Aboutheader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      wid: 168,
      color: '',
      wordColor: 'white',
      class: 'about-leftBantangWhite',
      loginColor: '#fd6363',
      loginBackColor: 'white',
      border: 'white',
      imgClass: 'about-newImg',
      value: '',
      placeholderColor: 'about-search',
      inputColor: 'white'
    }
  }
  focusWid = (e) => {
    this.setState({
      wid: 220
    })
    e.target.placeholder = ''
  }
  blurWid = () => {
    this.setState({
      wid: 168
    })
  }
  wheelChange = () => {
    if (document.body.scrollTop > 200) {
      this.setState({
        color: 'white',
        wordColor: 'black',
        class: 'about-leftBantangRed',
        loginColor: 'white',
        loginBackColor: '#fd6363',
        border: '#bfbfbf',
        imgClass: 'about-newPic',
        placeholderColor: 'about-search1',
        inputColor: '#999'
      })
    } else {
      this.setState({
        color: '',
        wordColor: 'white',
        class: 'about-leftBantangWhite',
        loginColor: '#fd6363',
        loginBackColor: 'white',
        border: 'white',
        imgClass: 'about-newImg',
        placeholderColor: 'about-search',
        inputColor: 'white'
      })
    }
  }
  inputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  componentDidMount () {
    window.onload = this.wheelChange
  }
  render () {
    return (
      <div className='about-wrapper' style={{backgroundColor: this.state.color}}>
        <div className='about-header'>
          <div className='about-left'>
            <a href='index.html'><div className={this.state.class} /></a>
            <div><a href='index.html' style={{color: this.state.wordColor}}>首页</a></div>
            <div><a href='find.html' style={{color: this.state.wordColor}}>发现</a></div>
            <div><a href='#' style={{color: this.state.wordColor}}>好物</a></div>
            <div><a href='article.html' style={{color: this.state.wordColor}}>写文章</a></div>
            <div><a href='http://www.sqkb.com/' style={{color: this.state.wordColor}}>优惠券</a><i /></div>
          </div>
          <div className='about-right'>
            <div className='about-searchInput'>
              <a href={'search.html?q=' + this.state.value} className={this.state.imgClass} />
              <input type='text' className={this.state.placeholderColor} placeholder='搜索你想要的' onFocus={this.focusWid} onBlur={this.blurWid} style={{width: this.state.wid + 'px', borderColor: this.state.border, color: this.state.inputColor}} onChange={this.inputChange} />
            </div>
            <div className='about-login' style={{color: this.state.loginColor, backgroundColor: this.state.loginBackColor}}>注册/登录</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Aboutheader
