import React, {Component} from 'react'
import '../../assets/styles/host/App.styl'
import '../../assets/styles/find/find.styl'
import '../../assets/styles/host/Slideshow.styl'
import Footer from '../../components/index/Footer'
import SlideShow from '../../components/index/Slideshow'
import Header from '../../components/top/Header'
import Content from '../../components/index/Content'
import Clickme from '../../components/article/Clickme'
import Scroll from '../../components/index/scrollTop'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      state: 'none'
    }
  }
  wheelScroll = () => {
    if (document.body.scrollTop > 400) {
      this.setState({
        state: 'block'
      })
    } else {
      this.setState({
        state: 'none'
      })
    }
  }
  render () {
    return (
      <div onWheel={this.wheelScroll}>
        <div className='header'>
          <Header />
        </div>
        <SlideShow />
        <div className='click'>
          <Clickme />
        </div>
        <Content />
        <Footer />
        <div className='scrollTop' style={{display: this.state.state}}>
          <Scroll />
        </div>
      </div>
    )
  }
}
export default App
