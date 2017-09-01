import React, {Component} from 'react'
import Register from './Register'
import Clickme from './Clickme'
import Addproduct from './Addproduct'
let flag = false
let valArr = []
let innerTextArr = []
class Article extends Component {
  constructor (porps) {
    super(porps)
    this.state = {
      display: 'none',
      displayAdd: 'none'
    }
  }
  handleVal = (val, inner) => {
    valArr.push(val)
    innerTextArr.push(inner)
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
    this.refs.getAdd.removeValue()
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
    this.setState({
      displayAdd: 'none'
    })
  }
  onkeydown = (ev) => {
    if (ev.keyCode === 13 && this.state.displayAdd === 'block') {
      console.log(ev.keyCode)
      this.refs.getAdd.getVal()
      this.setState({
        displayAdd: 'none'
      })
    }
  }
  removeDiv = (ev) => {
    let tell = confirm('确定要删除该商品么?')
    if (tell) {
      ev.target.parentNode.remove()
    } else {
      return false
    }
  }
  hoverChange = (e) => {
    let targ = e.target.getAttribute('name')
    let num = e.target.parentNode
    let iArr = num.getElementsByTagName('i')
    for (var j = 0; j <= targ; j++) {
      iArr[j].className = 'star-down-s'
    }
    var b = num.nextSibling
    b.innerHTML = (parseInt(targ) + 1) * 2
  }
  hoverOut = (e) => {
    let states = e.target.parentNode
    let sta = states.getAttribute('content')
    // console.log(sta)
    if (sta === '2') {
      let iscorea = e.target.parentNode.nextSibling
      let iscoreb = e.target.parentNode
      let iscorec = iscoreb.getAttribute('itemID')
      iscorea.innerHTML = (parseInt(iscorec) + 1) * 2
      let iArr = iscoreb.getElementsByTagName('i')
      for (var n = 0; n < iArr.length; n++) {
        iArr[n].className = 'star-s'
      }
      for (var m = 0; m <= iscorec; m++) {
        iArr[m].className = 'star-down-s'
      }
    }
    if (sta === '1') {
      let iscore = e.target.parentNode.nextSibling
      iscore.innerHTML = 0
      let iarr = e.target.parentNode
      let iArr = iarr.getElementsByTagName('i')
      for (var k = 0; k < iArr.length; k++) {
        iArr[k].className = 'star-s'
      }
    }
  }
  changeScore = (e) => {
    let iarr = e.target.parentNode
    iarr.setAttribute('content', '2')
    let iArr = iarr.getElementsByTagName('i')
    let targ = e.target.getAttribute('name')
    iarr.setAttribute('itemID', targ)
    for (var i = 0; i <= targ; i++) {
      iArr[i].className = 'star-down-s'
    }
  }
  componentDidMount () {
    window.addEventListener('keydown', this.onkeydown)
  }
  alertTitle = () => {
    let valueTitle = document.getElementsByClassName('article-title-s')[0].value
    console.log(valueTitle)
    if (valueTitle === '') {
      alert('请输入标题')
    }
  }
  render () {
    let arrBig = []
    if (innerTextArr.length > 0) {
      for (var i = 0; i < innerTextArr.length; i++) {
        arrBig.push(
          <div key={i} className="arr-all-d-s">
            <img src={valArr[i]} alt="" className="add-pic-s" /><span className="inner-s">{innerTextArr[i]}</span>
            <div className="star-out-s">
              <div className="styl-span-s">你的评分</div>
              <br />
              <div name={i} content={'1'} className="position-s">
                <i onMouseOut={this.hoverOut} onClick={this.changeScore} onMouseOver={this.hoverChange} name={0} className="star-s" />
                <i onMouseOut={this.hoverOut} onClick={this.changeScore} onMouseOver={this.hoverChange} name={1} className="star-s" />
                <i onMouseOut={this.hoverOut} onClick={this.changeScore} onMouseOver={this.hoverChange} name={2} className="star-s" />
                <i onClick={this.changeScore} onMouseOut={this.hoverOut} onMouseOver={this.hoverChange} name={3} className="star-s" />
                <i onMouseOut={this.hoverOut} onClick={this.changeScore} onMouseOver={this.hoverChange} name={4} className="star-s" />
              </div>
              <div className="score-s">0</div>
            </div>
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
            <a href='#' className='right font-size display' onClick={this.alertTitle}>发布</a>
            <a href='#' className='right display-a font-size' onClick={this.alertTitle}>预览</a>
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
