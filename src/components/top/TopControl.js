import React, { Component } from 'react'
import Header from './Header'
import Register from '../article/Register'
class TopControl extends Component {
  constructor (props) {
    super(props)
    this.state = {
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
  render () {
    return (
      <div>
        <div className='register' style={{display: this.state.hover}} onClick={this.hoverClick}><Register />
        </div>
        <div className='hover' style={{display: this.state.hover}} onClick={this.hoverClick} />
        <Header clicked={this.click} />
      </div>
    )
  }
}
export default TopControl
