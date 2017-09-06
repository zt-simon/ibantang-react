import React, {Component} from 'react'
// import Type from '../../components/save-money/save-type'
import Type from './save-type'
import '../../assets/styles/host/save-nav.styl'
let a = ''
class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  ajax = (cate) => {
    fetch('/app/zhekou/getZhekouListByCate?page=0&pagesize=20&cate=' + cate + '&sort=0&channel=35', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response.data)
        this.setState({
          data: response.data
        })
      })
  }
  click = (e) => {
    a = e.target.innerHTML
    // console.log(a)
    this.ajax(1)
  }
  componentDidMount () {
    this.ajax(1)
    // fetch('/app/zhekou/getZhekouListByCate?page=0&pagesize=20&cate=0&sort=0&channel=35', {
    //   method: 'GET'
    // })
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(response => {
    //     // console.log(response.data)
    //     this.setState({
    //       data: response.data
    //     })
    //   })
  }
  render () {
    var recommendArr = []
    if (a === '女装') {
      for (var i = 0; i < this.state.data.length; i++) {
        recommendArr.push(
          <div className='save-girl' key={i.toString()}>
            <div className='save-girlTitle'>
              <img src={this.state.data[i].thumbnail_pic} alt='777' />
            </div>
            <div>{this.state.data[i].title}</div>
            <div>
              <span>
                现价
                <span>{this.state.data[i].raw_price}</span>
                <span>{this.state.data[i].subtitle}</span>
              </span>
            </div>
            <div>
              {this.state.data[i].coupon_price}
            </div>
          </div>
        )
      }
    } else {
      recommendArr.push(<Type click={this.click} />)
    }
    return (
      <div>
        <div className='save-navWrap'>
          <div className='save-nav'>
            <a href='#' className='save-NavChoose save-list'><span className='save-recommend' /></a>
            <a href='#' className='save-hot save-list'>爆销热款
              <span className='save-hotImg' />
            </a>
            <a href='#' className='save-list'>优惠直播</a>
            <a href='#' className='save-list'>9块9包邮n</a>
            <a href='#' className='save-list'>20元封顶</a>
            <a href='#' className='save-list'>发现.好物</a>
          </div>
        </div>
        <div className='save-recommendWrap'>
          {recommendArr}
        </div>
      </div>
    )
  }
}
export default Nav
