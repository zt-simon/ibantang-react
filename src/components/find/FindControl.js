import React, {Component} from 'react'
import '../../assets/styles/find/find.styl'
import Header from '../../components/top/Header'
import Main from './Main'
import Footer from './find-footer'
class FindControl extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tf: ''
    }
  }
  componentDidMount () {
    setTimeout(function () {
      this.setState({
        tf: <Footer />
      })
    }, 2000)
  }
  render () {
    return (
      <div className='wrap'>
        <Header />
        <Main />
        <div className='bottom'>
          {this.state.tf}
        </div>
      </div>
    )
  }
}
export default FindControl
