import React, {Component} from 'react'
import Slide from './save-slideshow'
import '../../assets/styles/host/save-nav.styl'
import '../../assets/styles/host/save.styl'
let a = null
// let b = []
class Type extends Component {
  static propTypes = {
    click: React.PropTypes.func
  }
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      fixData: [],
      data1: []
    }
  }
  ajax1 = () => {
    fetch('/app/zhekou/getZhekouListByCate?page=0&pagesize=20&cate=0&sort=0&channel=35', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        // console.log(response.data)
        this.setState({
          data1: response.data
        })
      })
  }
  componentDidMount () {
    fetch('/apo/getOperElements', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.data.tab_element,
          fixData: response.data.fixed_element
        })
        a = response.data.fixed_element[0].pic
      })
    this.ajax1()
  }
  render () {
    let Arr = []
    for (var j = 0; j < this.state.data.length; j++) {
      Arr.push(<div className='save-typeDetail' key={j.toString()} name={j} onClick={this.props.click}>
        {this.state.data[j].name}
      </div>)
    }
    let fixArr = []
    for (var i = 1; i < this.state.fixData.length - 2; i++) {
      fixArr.push(<div className='img' key={i.toString()}>
        <img src={this.state.fixData[i].pic} alt='777' />
        <div>{this.state.fixData[i].title}</div>
      </div>)
    }
    const recommendArr = this.state.data1.map((item, index) => {
      return (
        <div className='save-recommendContent' key={index}>
          <div className='save-recommendDetail'>
            <img src={item.feed_info.thumbnail_pic} alt='777' />
          </div>
          <p className='save-detailTitle'>
            <span className='save-post'>包邮</span>
            {item.feed_info.title}
          </p>
          <div className='save-price'>
            <span className='save-nowPrice'>现价: {item.feed_info.raw_price}</span>
            <span className='save-ticket'>{item.feed_info.subtitle}</span>
          </div>
          <div className='save-ticketPrice'>
            <div className='save-sellPrice'>
              ¥
              <span className='save-bigPrice'>{parseInt(item.feed_info.coupon_price)}</span>
              .
              <span>{Math.round(item.feed_info.coupon_price % 1 * 10)}</span>
              <span className='save-ticketLogo' />
            </div>
            <div className='save-tianmao'>
              <img src={require('../../assets/images/Z-tianmao.png')} alt='777' />
              天猫
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        <div className='save-typeWrap'>
          <div className='save-typeLeft'>
            {Arr}
          </div>
          <div className='save-leftSlideImg'>
            <div className='save-leftSlideImg1'>
              <Slide />
            </div>
            <div className='save-leftImg'>
              <img src={a} alt='777' />
            </div>
          </div>
          <div className='save-typeBottom'>
            {fixArr}
          </div>
        </div>
        <div className='save-content'>
          {recommendArr}
        </div>
      </div>
    )
  }
}
export default Type
