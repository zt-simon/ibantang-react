import React, {Component} from 'react'
class Mask extends Component {
  render () {
    return (
      <div>
        <div className='download-mask' />
        <div className='app-downloadCode'>
          <div className='mask-leftphone'>
            <img className='mask-phone' src={require('../../assets/images/Z-phone.jpg')} alt='777' />
          </div>
          <div className='mask-codeborder'>
            a
          </div>
        </div>
      </div>
    )
  }
}
export default Mask
