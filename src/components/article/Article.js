import React, {Component} from 'react'
import Register from './Register'
import Clickme from './Clickme'
import Addproduct from './Addproduct'
let flag = false
let valArr = []
let innerTextArr = []
class Article extends Component {
  // static propTypes = {
  //   getVal: React.PropTypes.func
  // }
  constructor (porps) {
    super(porps)
    this.state = {
      display: 'none',
      displayAdd: 'none',
      value: '',
      innerText: ''
    }
  }
  handleVal = (val, inner) => {
    this.setState({
      value: val,
      innerText: inner
    })
    valArr.push(this.state.value)
    innerTextArr.push(this.state.innerText)
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
  clickAdd = () => {
    this.setState({
      displayAdd: 'block'
    })
  }
  clickAddRemove = () => {
    this.setState({
      displayAdd: 'none'
    })
  }
  clickget = () => {
    this.refs.getAdd.getVal()
    console.log(this.state.innerText)
    this.setState({
      displayAdd: 'none'
    })
    console.log(valArr)
    console.log(innerTextArr)
  }
  removeDiv = (ev) => {
    ev.target.parentNode.remove()
  }
  render () {
    let arrBig = []
    if (innerTextArr.length > 1) {
      for (var i = 1; i < innerTextArr.length; i++) {
        // console.log('1')
        arrBig.push(
          <div className="arr-all-d-s">
            <img src={valArr[i]} alt="" className="add-pic-s" /><span>{innerTextArr[i]}</span>
            <div className="remove-X-s" onClick={this.removeDiv}>X</div>
          </div>
        )
      }
    }
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
            <div className="product-s font-size" onClick={this.clickAdd}>添加商品</div>
          </div>
          <div className="hidden-div" />
          {arrBig}
        </div>
        <div style={{display: this.state.displayAdd}} className="add-product">
          <Addproduct handleVal={this.handleVal} ref="getAdd" />
          <div className="footer-all-s">
            <a onClick={this.clickAddRemove} href="#">取消</a>
            <a href="#" onClick={this.clickget}>完成</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Article
