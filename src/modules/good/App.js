import React, {Component} from 'react'
import Header from '../../components/top/Header'
// import Search from '../../components/top/Search'
import Main from '../../components/good/Main'
import Footer from '../../components/index/Footer'
class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
export default App
