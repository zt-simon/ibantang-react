import React, {Component} from 'react'
import Header from '../../components/top/Header'
import TopControl from '../../components/top/TopControl'
import Main from '../../components/good/Main'
class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <TopControl />
        <Main />
      </div>
    )
  }
}
export default App
