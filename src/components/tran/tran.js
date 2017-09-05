import React, {Component} from 'react'
var num = 0
var speed = 100
class Tran extends Component {
  constructor (props) {
    super(props)
    this.state = {
      left: num
    }
  }
  time = () => {
    var timer = setInterval(() => {
      num -= speed
      this.setState({
        left: num
      })
      if (num === -3000) {
        num = 0
      }
      if (num % 600 === 0) {
        clearInterval(timer)
        setTimeout(() => {
          this.time()
        }, 1000)
      }
    }, 100)
  }
  componentDidMount () {
    this.time()
  }
  render () {
    return (
      <div className='Tran'>
        <div className='Tran_box' style={{ left: this.state.left + 'px' }}>
          <div className='Tran_img'><img src={require('../../assets/images/Z-save1.jpg')} /></div>
          <div className='Tran_img'><img src={require('../../assets/images/Z-save2.jpg')} /></div>
          <div className='Tran_img'><img src={require('../../assets/images/Z-save3.jpg')} /></div>
          <div className='Tran_img'><img src={require('../../assets/images/Z-save4.jpg')} /></div>
          <div className='Tran_img'><img src={require('../../assets/images/Z-save5.jpg')} /></div>
          <div className='Tran_img'><img src={require('../../assets/images/Z-save1.jpg')} /></div>
        </div>
      </div>
    )
  }
}
export default Tran
