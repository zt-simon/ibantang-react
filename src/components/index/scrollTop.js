import React, {Component} from 'react'
import '../../assets/styles/host/scroll-top.styl'
class Scroll extends Component {
  constructor (props) {
    super(props)
    this.state = {
      display: 'none',
      verticalDistance: '41'
    }
  }
  mouseover = () => {
    this.setState({
      display: 'block',
      verticalDistance: '0'
    })
  }
  mouseout = () => {
    this.setState({
      display: 'none',
      verticalDistance: '41'
    })
  }
  scrollClick = () => {
    let distance = document.body.scrollTop
    let clickTimer = setInterval(() => {
      if (distance < 20) {
        distance = 0
      } else {
        distance = distance - 20
      }
      document.body.scrollTop = distance
      if (distance === 0) {
        clearInterval(clickTimer)
      }
    }, 3)
  }
  render () {
    return (
      <div className='scroll-top' onClick={this.scrollClick} onMouseOver={this.mouseover} onMouseOut={this.mouseout}>
        <span className='scroll-logo' />
        <div className='scroll-word' style={{top: this.state.verticalDistance + 'px'}}>返回顶部</div>
      </div>
    )
  }
}
export default Scroll
