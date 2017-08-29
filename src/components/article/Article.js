import React, {Component} from 'react'
import Register from './Register'
import Clickme from './Clickme'
import Addproduct from './Addproduct'
let flag = false
class Article extends Component {
  constructor (porps) {
    super(porps)
    this.state = {
      display: 'none'
    }
  }
  click = () => {
    flag = !flag
    if (flag) {
      this.setState({
        display: 'block'
      })
    } else {
      this.setState({
        display: 'none'
      })
    }
  }
  render () {
    return (
      <div>
        <div className="click-me-s">
          <Clickme />
        </div>
        <div style={{display: this.state.display}} onClick={this.click} className="mask-s"><div className="X">X</div></div>
        <div style={{display: this.state.display}} className="register-position-s">
          <Register />
        </div>
        <div className='out'>
          <div className='inside clear'>
            <span className='left color'>原创文章</span>
            <a href='#' className='right font-size display'>发布</a>
            <a href='#' className='right display-a font-size'>预览</a>
            <a href='#' className='right display-a font-size' onClick={this.click}>保存</a>
          </div>
        </div>
        <div className="bg-article-s">
          <div className="article-s">
            <input className="article-title-s" placeholder="标题" type="text" />
            <span className="line-s-lightgray" /><br />
            <input className="file" type="file" />
            <div className="file-pic font-size">添加图片</div>
            <div className="product-s font-size">添加商品</div>
          </div>
          <textarea className="text-s" name="" id="" cols="100" rows="33" />
        </div>
        <div className="add-product">
          <Addproduct />
          <div className="footer-all-s">
            <a href="#">取消</a>
            <a href="#">完成</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Article
