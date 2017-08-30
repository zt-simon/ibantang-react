import React, {Component} from 'react'
import '../../assets/styles/find/find.styl'
import Header from '../../components/top/Header'
import Main from './Main'
import Footer from '../index/Footer'
class FindControl extends Component {
  render () {
    return (
      <div className='wrap'>
        <Header />
        <Main />
        <div className='bottom'>
          <Footer />
        </div>
      </div>
    )
  }
}
export default FindControl
