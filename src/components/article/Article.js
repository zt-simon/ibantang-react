import React, {Component} from 'react'
import Register from './Register'
class Article extends Component {
  render () {
    return (
      <div>
        <div className='out'>
          <div className='inside clear'>
            <span className='left color'>原创文章</span>
            <a href='' className='right font-size display'>发布</a>
            <a href='' className='right display-a font-size'>预览</a>
            <a href='' className='right display-a font-size'>保存</a>
          </div>
          <Register />
        </div>
      </div>
    )
  }
}
export default Article
