/**
 * Created by dllo on 17/8/28.
 */
import React, {Component} from 'react'
import '../../assets/styles/article/article.styl'
class Addproduct extends Component {
  static propTypes = {
    handleVal: React.PropTypes.func
  }
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      q: '',
      brandName: '',
      content: '',
      title: ''
    }
  }
  getVal = () => {
    let val = document.getElementsByClassName('product-pic-s')[0].src
    console.log(val)
    let inner = document.getElementsByClassName('product-description-s')[0].innerHTML
    console.log(inner)
    this.props.handleVal(val, inner)
  }
  add = (e) => {
    this.setState({
      q: e.target.value,
      brandName: e.target.value
    })
    var obrand = document.getElementsByClassName('brand-s')[0]
    if (obrand.value !== '') {
      fetch(`/api/article/searchBrand?q=${e.target.value}&page=0&pagesize=100`, {
        method: 'GET'
      })
          .then(response => {
            return response.json()
          })
          .then(response => {
            this.setState({
              data: response.data
            })
            console.log(response.data)
          })
    }
  }
  changeValue = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  clickProduct = (e) => {
    let brandId = e.target.getAttribute('name')
    let content = e.target.getAttribute('content')
    let itemIDn = e.target.getAttribute('itemID')
    console.log(brandId)
    fetch(`/api/article/searchBrandProduct?q=${content}&brandId=${brandId}&page=0&pagesize=100`, {
      method: 'GET'
    })
          .then(response => {
            return response.json()
          })
          .then(response => {
            this.setState({
              title: itemIDn
            })
            this.setState({
              data: response.data,
              brandName: response.data[0].brand.name
            })
            console.log(response.data)
          })
  }
  render () {
    let arrayProduct = []
    for (var i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].brand) {
        arrayProduct.push(
          <div itemID={this.state.data[i].title} name={this.state.data[i].brand.id} content={this.state.data[i].brand.name} onClick={this.clickProduct} className="product-description-out-s clear">
            <img itemID={this.state.data[i].title} name={this.state.data[i].brand.id} content={this.state.data[i].brand.name} src={this.state.data[i].pic} className="product-pic-s left" />
            <div itemID={this.state.data[i].title} name={this.state.data[i].brand.id} content={this.state.data[i].brand.name} className="product-description-s left">{this.state.data[i].title}</div>
          </div>
          )
      } else {
        arrayProduct.push(
          <div name={this.state.data[i].id} content={this.state.data[i].name} onClick={this.clickProduct} className="product-description-out-s clear">
            <img name={this.state.data[i].id} content={this.state.data[i].name} src={this.state.data[i].pic} className="product-pic-s left" />
            <div name={this.state.data[i].id} content={this.state.data[i].name} className="product-description-s left">{this.state.data[i].name}</div>
          </div>
          )
      }
    }
    return (
      <div className="add-product-out">
        <p className="add-product-out-s" onClick={this.getVal}>添加商品</p>
        <div className="brand-out">
          <input value={this.state.brandName} onChange={this.add} className="brand-s" type="text" placeholder="品牌" />
          <input value={this.state.title} onChange={this.changeValue} className="brand-name-s" type="text" placeholder="商品名" />
        </div>
        <div className="product-list-s">
          {arrayProduct}
        </div>
      </div>
    )
  }
}
export default Addproduct
