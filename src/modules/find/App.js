import React, {Component} from 'react'
import '../../assets/styles/App.styl'
import TopControl from '../../components/hover/TopControl'

class App extends Component {
  render () {
    return (
      <div className='wrap'>
        <TopControl />
      </div>
    )
  }
}

export default App
