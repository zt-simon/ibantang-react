import React, {Component} from 'react'
import '../../assets/styles/host/App.styl'
import '../../assets/styles/host/Slideshow.styl'
import '../../assets/styles/find/find.styl'
import '../../assets/styles/host/content.styl'
import Footer from '../../components/index/Footer'
import SlideShow from '../../components/index/Slideshow'
import TopControl from '../../components/top/TopControl'
import Content from '../../components/index/Content'
class App extends Component {
  render () {
    return (
      <div>
        <div className='header'>
          <TopControl />
        </div>
        <SlideShow />
        <Content />
        <Footer />
      </div>
    )
  }
}
export default App
