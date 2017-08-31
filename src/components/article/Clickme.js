/**
 * Created by dllo on 17/8/28.
 */
import React, {Component} from 'react'
import '../../assets/styles/article/article.styl'
class Clickme extends Component {
  render () {
    return (
      <div><a href='http://www.51sqkb.com' target="_blank"><img className="click-me" src={require('../../assets/images/01.png')} alt="" /></a></div>
    )
  }
}
export default Clickme