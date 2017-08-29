import React, {Component} from 'react'
import '../../assets/styles/find/find.styl'
import FindControl from '../../components/find/FindControl'
import '../../assets/styles/host/App.styl'
import '../../assets/styles/host/Slideshow.styl'
class App extends Component {
  render () {
    return (
      <div className='wrap'>
        <FindControl />
      </div>
    )
  }
}
export default App
