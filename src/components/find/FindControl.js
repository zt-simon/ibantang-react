import React, {Component} from 'react'
import '../../assets/styles/find/find.styl'
import TopControl from '../../components/top/TopControl'
import Main from './Main'
import Footer from '../index/Footer'
class FindControl extends Component {
  render () {
    return (
      <div className='wrap'>
        <TopControl />
        <Main />
        <div className='bottom'>
          <Footer />
        </div>
      </div>
    )
  }
}
export default FindControl
