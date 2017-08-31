import React, {Component} from 'react'
import Header from './Header'
var dataArr
var num = 1
class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: window.location.href.split('=')[1],
      data: [],
      tf: '',
      color: '#999999',
      page: num,
      click: 'good'
    }
  }
  ajax = (ot, st, page, tf, num) => {
    fetch('/api/search/getData?ot=' + ot + '&st=' + st + '&q=' + this.state.value + '&page=' + page + '&pagesize=20', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.data,
          tf: tf,
          page: num
        })
      })
    return this.state.data
  }
  componentDidMount () {
    this.ajax('product', 0, 0, 'good', num)
  }
  goodClick = () => {
    document.getElementsByClassName('search_menu_right')[0].style.display = 'block'
    document.getElementsByClassName('search_menu_right_new')[0].style.display = 'none'
    this.setState({
      click: 'good'
    })
    this.ajax('product', 0, 0, 'good', num)
  }
  shareClick = () => {
    document.getElementsByClassName('search_menu_right')[0].style.display = 'none'
    document.getElementsByClassName('search_menu_right_new')[0].style.display = 'block'
    this.setState({
      click: 'share'
    })
    this.ajax('post', 0, 0, 'share', num)
  }
  titleClick = () => {
    this.setState({
      click: 'title'
    })
    this.ajax('topic', 0, 0, 'title', num)
  }
  moRen = () => {
    this.ajax('product', 0, 0, 'title', num)
  }
  wel = () => {
    this.ajax('product', 1, 0, 'title', num)
    console.log(this.state.data)
  }
  below = () => {
    this.ajax('product', 3, 0, 'title', num)
  }
  gao = () => {
    this.ajax('product', 4, 0, 'title', num)
  }
  render () {
    if (this.state.tf === 'good') {
      dataArr = this.state.data.map(function (item, index) {
        return (
          <div className='every_box' >
            <img src={item.pic} className='every_img' />
            <p className='every_p'>{item.title}</p>
            <div className='share_req'>
              <div className='every_price'>{'¥' + item.price}</div>
              <img src={require('../../assets/images/likes.png')} />
              <span>{item.likes}</span>
            </div>
          </div>
        )
      })
    } else if (this.state.tf === 'share') {
      dataArr = this.state.data.map(function (item, index) {
        return (
          <div className='share_' key={item.id}>
            <div className='share_img_'>
              <img src={item.mini_pic_url} />
            </div>
            <div className='share_main'>
              <div className='share_user'>
                <div className='share_rad' />
                <div className='share_nickname'>{item.user.nickname}</div>
                <span className='share_span'>
                  <img src={require('../../assets/images/likes.png')} />
                  <span>{item['dynamic']['likes']}
                  </span>
                </span>
              </div>
              <div className='share_title_'>{item.content}</div>
            </div>
          </div>
        )
      })
    } else if (this.state.tf === 'title') {
      dataArr = this.state.data.map(function (item, index) {
        let pics
        if (item.pic) {
          pics = item.pic
        } else {
          pics = item.pics[0].url
        }
        return (
          <div className='search_title_area' key={item.id}>
            <div className='search_title_img'>
              <img src={pics} alt="1" />
            </div>
            <div className='search_title_content'>{item.title}</div>
            <div>
              <div className='search_user'>
                <div className='share_rad_search'>
                  <img src={item.user.avatar} />
                </div>
                <div className='share_nickname_search'>{item.user.nickname}</div>
                <span className='share_span_search'>
                  <img src={require('../../assets/images/likes.png')} />
                  <span>{item['likes']}
                  </span>
                </span>
              </div>
            </div>
          </div>
        )
      })
    }
    return (
      <div className='myWrap'>
        <Header />
        <div className='search_box' >
          <div className='search_result'>{this.state.value}搜过结果</div>
          <div className='search_menu'>
            <a href='#'>
              <div className='search_menu_left'>
                <div className='search_menu_left_div' onClick={this.goodClick}>好物</div>
                <div className='search_menu_left_div' onClick={this.shareClick}>晒单</div>
                <div className='search_menu_left_div' onClick={this.titleClick}>文章</div>
              </div>
              <div className='search_menu_right'>
                <div className='paiH' onClick={this.moRen}>●默认</div>
                <div className='paiH' onClick={this.wel}>最受欢迎</div>
                <div className='paiH' onClick={this.below}>价格由低到高</div>
                <div className='paiH' onClick={this.gao}>价格由高到低</div>
              </div>
              <div className='search_menu_right_new'>
                <div className='paiH'>●默认</div>
                <div className='paiH'>最受欢迎</div>
                <div className='paiH'>最新</div>

              </div>
            </a>
          </div>
          <div className='search_main'>{dataArr}</div>

        </div>
      </div>
    )
  }
}
export default Search
