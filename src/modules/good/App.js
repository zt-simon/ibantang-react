import React, {Component} from 'react'
import Header from '../../components/top/Header'
import Scroll from '../../components/index/scrollTop'
import Main from '../../components/good/Main'
import Footer from '../../components/index/Footer'
import '../../assets/styles/good/scroll.styl'
class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Main />
        <div className="scroll">
          <Scroll />
        </div>
        <Footer />
      </div>
    )
  }
}
export default App
