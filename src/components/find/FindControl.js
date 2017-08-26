import React, {Component} from 'react'
import TopControl from '../../components/top/TopControl'
import Main from './Main'
import Footer from '../Footer'
class FindControl extends Component {
  render () {
    return (
      <div>
        <TopControl />
        <Main />
        <Footer />
      </div>
    )
  }
}
export default FindControl
