import React, {Component} from 'react'
import '../../assets/styles/host/Slideshow.styl'
class SlideShow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      block: 'none'
    }
  }
  click = () => {
    this.setState({
      block: 'block'
    })
  }
  click1 = () => {
    this.setState({
      block: 'none'
    })
  }
  render () {
    return (
      <div>
        <div className='first-slideShow'>
          <div className='first-slideShowImg'>
            <div className='first-downloadApp' onClick={this.click} />
          </div>
        </div>
        <div className='download-maskBorder' style={{display: this.state.block}}>
          <div className='download-mask' onClick={this.click1} />
          <div className='app-downloadCode'>
            <div className='mask-leftphone'>
              <img className='mask-phone' src={require('../../assets/images/Z-phone.jpg')} alt='777' />
            </div>
            <div className='mask-codeborder'>
              <img src={require('../../assets/images/Z-code.png')} alt='777' />
            </div>
            <p className='code-downloadapp'>扫二维码下载,下载APP</p>
          </div>
        </div>
      </div>
    )
  }
}
export default SlideShow
