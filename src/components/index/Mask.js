import React, {Component} from 'react'
class Mask extends Component {
  render () {
    return (
      <div>
        <div className='download-mask' />
        <div className='app-downloadCode' >
          <div className='mask-leftphone'>
            <img className='mask-phone' src={require('../../assets/images/Z-phone.jpg')} alt='777' />
          </div>
          <div className='mask-codeborder'>
            <img src={require('../../assets/images/Z-code.png')} alt='777' />
          </div>
          <p className='code-downloadapp'>扫二维码下载,下载APP</p>
        </div>
      </div>
    )
  }
}
export default Mask
