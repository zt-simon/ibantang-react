import React, {Component} from 'react'
import Header from './Header'
var dataArr = []
var num = 1

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: window.location.href.split('=')[1],
      data: [],
      tf: '',
      page: num,
      click: 'good',
      list: 'moRen'
    }
  }
  ajax = (ot, st, page, tf) => {
    fetch('/api/search/getData?ot=' + ot + '&st=' + st + '&q=' + this.state.value + '&page=' + page + '&pagesize=20', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.data,
          tf: tf
        })
      })
    return this.state.data
  }
  ajaxMore = (ot, st, page, tf) => {
    fetch('/api/search/getData?ot=' + ot + '&st=' + st + '&q=' + this.state.value + '&page=' + page + '&pagesize=20', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: this.state.data.concat(response.data),
          tf: tf
        })
      })
    return this.state.data
  }

  componentDidMount () {
    this.ajax('product', 0, 0, 'good')
  }
  goodClick = () => {
    document.getElementsByClassName('search_menu_right')[0].style.display = 'block'
    document.getElementsByClassName('search_menu_right_new')[0].style.display = 'none'
    this.ajax('product', 0, 0, 'good')
  }
  shareClick = () => {
    document.getElementsByClassName('search_menu_right')[0].style.display = 'none'
    document.getElementsByClassName('search_menu_right_new')[0].style.display = 'block'
    this.ajax('post', 0, 0, 'share')
  }
  titleClick = () => {
    document.getElementsByClassName('search_menu_right')[0].style.display = 'none'
    document.getElementsByClassName('search_menu_right_new')[0].style.display = 'none'
    this.ajax('topic', 0, 0, 'title')
  }
  changeRed = () => {
    let arr = document.getElementsByClassName('paiH')
    for (let i = 0; i < arr.length; i++) {
      arr[i].style.color = ''
    }
  }
  moRen = (e) => {
    this.setState({
      tf: 'good',
      list: 'moRen'
    })
    this.changeRed()
    e.target.style.color = 'red'
    this.ajax('product', 0, 0, 'good')
  }
  wel = (e) => {
    this.setState({
      tf: 'good',
      list: 'wel'
    })
    this.changeRed()
    e.target.style.color = 'red'
    this.ajax('product', 1, 0, 'good')
  }
  below = (e) => {
    this.setState({
      tf: 'good',
      list: 'below'
    })
    this.changeRed()
    e.target.style.color = 'red'
    this.ajax('product', 3, 0, 'good')
  }
  gao = (e) => {
    this.setState({
      tf: 'good',
      list: 'gao'
    })
    this.changeRed()
    e.target.style.color = 'red'
    this.ajax('product', 4, 0, 'good')
  }
  newMoRen = (e) => {
    this.setState({
      tf: 'share',
      list: 'newMoRen'
    })
    this.changeRed()
    e.target.style.color = 'red'
    this.ajax('post', 0, 0, 'share')
  }
  newWel = (e) => {
    this.setState({
      tf: 'share',
      list: 'newWel'
    })
    this.changeRed()
    e.target.style.color = 'red'
    this.ajax('post', 1, 0, 'share')
  }
  newS = (e) => {
    this.setState({
      tf: 'share',
      list: 'newS'
    })
    this.changeRed()
    e.target.style.color = 'red'
    this.ajax('post', 2, 0, 'share')
  }
  more = () => {
    num++
    this.setState({
      page: num
    })
    if (this.state.tf === 'good') {
      this.ajaxMore('product', 0, num, 'good')
    } else if (this.state.tf === 'share') {
      this.ajaxMore('post', 0, num, 'share')
    } else if (this.state.tf === 'title') {
      this.ajaxMore('topic', 0, num, 'title')
    } else if (this.state.list === 'moRen') {
      this.ajaxMore('product', 0, num, 'good')
    } else if (this.state.list === 'wel') {
      this.ajaxMore('product', 1, num, 'good')
    } else if (this.state.list === 'below') {
      this.ajaxMore('product', 3, num, 'good')
    } else if (this.state.list === 'gao') {
      this.ajaxMore('product', 4, num, 'good')
    } else if (this.state.list === 'newMoRen') {
      this.ajaxMore('post', 0, num, 'share')
    } else if (this.state.list === 'newWel') {
      this.ajaxMore('post', 1, num, 'share')
    } else if (this.state.list === 'newS') {
      this.ajaxMore('post', 2, num, 'share')
    }
  }
  rule = (string) => {
    var arr = []
    if (string.length > 35) {
      for (let i = 0; i < string.length; i++) {
        arr.push(string[i])
        if (i > 35) {
          return (arr + '...').split(',')
        }
      }
    } else {
      return string
    }
  }
  render () {
    if (this.state.tf === 'good') {
      dataArr = this.state.data.map(function (item, index) {
        return (
          <div className='every_box' key={item.id}>
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
      dataArr = []
      for (let i = 0; i < this.state.data.length; i++) {
        dataArr.push(
          <div className='share_' key={this.state.data[i].id}>
            <div className='share_img_'>
              <img src={this.state.data[i].mini_pic_url} />
            </div>
            <div className='share_main'>
              <div className='share_user'>
                <div className='share_rad_' style={{background: 'url(' + this.state.data[i].user.avatar + ')'}} />
                <div className='share_nickname'>{this.state.data[i].user.nickname}</div>
                <span className='share_span'>
                  <img src={require('../../assets/images/likes.png')} />
                  <span>{this.state.data[i]['dynamic']['likes']}
                  </span>
                </span>
              </div>
              <div className='share_title_'>{this.rule(this.state.data[i].content)}</div>
            </div>
          </div>
        )
      }
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
              <img src={pics} />
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
        <div className='search_box'>
          <div className='search_result'>{this.state.value}搜过结果</div>
          <div className='search_menu'>
            <div className='search_menu_left'>
              <div className='search_menu_left_div' onClick={this.goodClick}>好物</div>
              <div className='search_menu_left_div' onClick={this.shareClick}>晒单</div>
              <div className='search_menu_left_div' onClick={this.titleClick}>文章</div>
            </div>
            <div className='box_right_left'>
              <div className='search_menu_right'>
                <div className='paiH' onClick={this.moRen} style={{color: 'red'}}>●默认</div>
                <div className='paiH' onClick={this.wel}>最受欢迎</div>
                <div className='paiH' onClick={this.below}>价格由低到高</div>
                <div className='paiH' onClick={this.gao}>价格由高到低</div>
              </div>
              <div className='search_menu_right_new'>
                <div className='paiH' onClick={this.newMoRen} style={{color: 'red'}}>●默认</div>
                <div className='paiH' onClick={this.newWel}>最受欢迎</div>
                <div className='paiH' onClick={this.newS} >最新</div>
              </div>
            </div>
          </div>
          <div className='search_main'>{dataArr}</div>
          <div className='content-more' id='content-checkMore' onClick={this.more}>点击查看更多精彩</div>
        </div>
      </div>
    )
  }
}
export default Search
