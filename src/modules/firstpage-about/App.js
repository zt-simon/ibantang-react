import React, {Component} from 'react'
import About from '../../components/firstpage-about/firstpage-about'
import Firstpage from '../../components/firstpage-about/firstpage-footer'
import Aboutheader from '../../components/firstpage-about/firstpage-header'
class App extends Component {
  a = () => {
    this.refs.wheels.wheelChange()
  }
  render () {
    return (
      <div className='wrap' onWheel={this.a}>
        <Aboutheader ref='wheels' />
        <About />
        <Firstpage />
      </div>
    )
  }
}
export default App
