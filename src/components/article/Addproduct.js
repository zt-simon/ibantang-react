/**
 * Created by dllo on 17/8/28.
 */
import React, {Component} from 'react'
import '../../assets/styles/article/article.styl'
let a = ''
let b = ''
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
            // console.log(response.data)
          })
    }
  }
  changeValue = (e) => {
    this.setState({
      title: e.target.value
    })
  }
  clickProduct = (e) => {
    a = e.target.getAttribute('data')
    b = e.target.innerHTML
    let brandId = e.target.getAttribute('name')
    let content = e.target.getAttribute('content')
    let itemIDn = e.target.getAttribute('itemID')
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
            // console.log(response.data[0].brand.name)
          })
  }
  removeValue = () => {
    this.setState({
      brandName: ''
    })
  }
  render () {
    let arrayProduct = []
    for (var i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].brand) {
        arrayProduct.push(
          <div data={this.state.data[i].pic} itemID={this.state.data[i].title} name={this.state.data[i].brand.id} content={this.state.data[i].brand.name} onClick={this.clickProduct} className="product-description-out-s clear" key={this.state.data[i].item_id}>
            <img data={this.state.data[i].pic} itemID={this.state.data[i].title} name={this.state.data[i].brand.id} content={this.state.data[i].brand.name} src={this.state.data[i].pic} className="product-pic-s left" />
            <div data={this.state.data[i].pic} itemID={this.state.data[i].title} name={this.state.data[i].brand.id} content={this.state.data[i].brand.name} className="product-description-s left">{this.state.data[i].title}</div>
          </div>
          )
      } else {
        arrayProduct.push(
          <div data={this.state.data[i].pic} name={this.state.data[i].id} content={this.state.data[i].name} onClick={this.clickProduct} className="product-description-out-s clear" key={this.state.data[i].id}>
            <img data={this.state.data[i].pic} name={this.state.data[i].id} content={this.state.data[i].name} src={this.state.data[i].pic} className="product-pic-s left" />
            <div data={this.state.data[i].pic} name={this.state.data[i].id} content={this.state.data[i].name} className="product-description-s left">{this.state.data[i].name}</div>
          </div>
          )
      }
    }
    return (
      <div className="add-product-out">
        <p className="add-product-out-s">添加商品</p>
        <div className="brand-out">
          <input value={this.state.brandName || ''} onChange={this.add} className="brand-s" type="text" placeholder="品牌" />
          <input value={this.state.title || ''} onChange={this.changeValue} className="brand-name-s" type="text" placeholder="商品名" />
        </div>
        <div className="product-list-s">
          {arrayProduct}
        </div>
      </div>
    )
  }
  getVal = () => {
    let val = a
    let inner = b
    this.props.handleVal(val, inner)
  }
}
export default Addproduct
