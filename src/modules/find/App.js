import React, {Component} from 'react'
import '../../assets/styles/find/App.styl'
import FindControl from '../../components/find/FindControl'
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
