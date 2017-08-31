import React, {Component} from 'react'
import About from '../../components/firstpage-about/firstpage-about'
import Footer from '../../components/index/Footer'
class App extends Component {
  render () {
    return (
      <div>
        <div className='wrap'>
          <About />
          <Footer />
        </div>
      </div>
    )
  }
}
export default App
