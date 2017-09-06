import React, {Component} from 'react'
import '../../assets/styles/find/find.styl'
import Header from '../../components/top/Header'
import Main from './Main'
import Footer from './find-footer'
import Scroll from '../index/scrollTop'
import ClickMe from '../article/Clickme'
class FindControl extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tf: '',
      state: ''
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        tf: <Footer />
      })
    }, 10000)
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
      <div className='wrap' onWheel={this.wheelScroll}>
        <Header />
        <Main />
        <div className='scrollTop' style={{display: this.state.state}}>
          <Scroll />
        </div>
        <div className='myImg'>
          <ClickMe />
        </div>
        <div className='bottom'>
          {this.state.tf}
        </div>
      </div>
    )
  }
}
export default FindControl
