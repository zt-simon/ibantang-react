import React, {Component} from 'react'
import '../../assets/styles/host/save.styl'
let leftSpeed = 0
let slideTimer = null
let slideout = null
let num = 0
let moveDistance = 0
let speed = 10
class Slide extends Component {
  constructor (props) {
    super(props)
    this.state = {
      left: leftSpeed,
      leftDistance: 20
    }
  }
  slide = () => {
    slideTimer = setInterval(() => {
      leftSpeed -= speed
      this.setState({
        left: leftSpeed
      })
      if (leftSpeed === -3300) {
        leftSpeed = 0
      }
      if (leftSpeed % 660 === 0) {
        speed = 10
        this.setState({
          leftDistance: 20 - leftSpeed / 660 * 25
        })
        clearInterval(slideTimer)
        slideout = setTimeout(() => {
          this.slide()
        }, 2000)
      }
    }, 10)
  }
  mouseover = (ev) => {
    ev.preventDefault()
    clearInterval(slideTimer)
    clearTimeout(slideout)
    var downDistance = leftSpeed
    var fixed = ev.clientX
    document.onmousemove = (e) => {
      var mouseX = e.clientX - fixed
      moveDistance = mouseX
      leftSpeed = downDistance + mouseX
      this.setState({
        left: leftSpeed
      })
    }
  }
  mouseout = () => {
    document.onmousemove = null
    num = parseInt(leftSpeed / 660)
    if (moveDistance > 0) {
      speed = -10
      leftSpeed = (parseInt(leftSpeed / 10)) * 10
      this.setState({
        left: leftSpeed
      })
      this.slide()
    } else {
      speed = 10
      this.setState({
        left: num * 660
      })
      this.slide()
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.slide()
    }, 2000)
  }
  render () {
    return (
      <div className='save-slideWrap'>
        <div className='save-slide' id='save-slide1' style={{left: this.state.left + 'px'}}>
          <a href='#' onMouseDown={this.mouseover} onMouseUp={this.mouseout}>
            <img src={require('../../assets/images/Z-save1.jpg')} alt='777' />
          </a>
          <a href='#' onMouseDown={this.mouseover} onMouseUp={this.mouseout}>
            <img src={require('../../assets/images/Z-save2.jpg')} alt='777' />
          </a>
          <a href='#' onMouseDown={this.mouseover} onMouseUp={this.mouseout}>
            <img src={require('../../assets/images/Z-save3.jpg')} alt='777' />
          </a>
          <a href='#' onMouseDown={this.mouseover} onMouseUp={this.mouseout}>
            <img src={require('../../assets/images/Z-save4.jpg')} alt='777' />
          </a>
          <a href='#' onMouseDown={this.mouseover} onMouseUp={this.mouseout}>
            <img src={require('../../assets/images/Z-save5.jpg')} alt='777' />
          </a>
          <a href='#' onMouseDown={this.mouseover} onMouseUp={this.mouseout}>
            <img src={require('../../assets/images/Z-save1.jpg')} alt='777' />
          </a>
        </div>
        <div className='save-circleWrap'>
          <div className='save-circles1' style={{left: this.state.leftDistance + 'px'}} />
          <div className='save-circles' />
          <div className='save-circles' />
          <div className='save-circles' />
          <div className='save-circles' />
          <div className='save-circles' />
        </div>
      </div>
    )
  }
  componentWillUnmount () {
    clearInterval(slideTimer)
    clearTimeout(slideout)
  }
}

export default Slide
