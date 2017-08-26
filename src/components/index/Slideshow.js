import React, {Component} from 'react'
import Mask from './Mask'
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
        <Mask />
      </div>
    )
  }
}
export default SlideShow
