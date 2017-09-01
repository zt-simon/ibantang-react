import React, {Component} from 'react'
var num = 1
class Share extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: num
    }
  }
  scroll = () => {
    if (document.body.scrollTop + document.body.clientHeight === document.body.scrollHeight) {
      num++
      this.setState({
        page: num
      })
      fetch('/api/post/getPostList?currentPage=' + this.state.page + '&lastUpdateTime', {
        method: 'GET'
      })
        .then(response => {
          return response.json()
        })
        .then(response => {
          this.setState({
            data: this.state.data.concat(response.data)
          })
        })
    }
  }
  componentDidMount () {
    fetch('/api/post/getPostList?currentPage=' + this.state.page + '&lastUpdateTime', {
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
    document.body.onscroll = this.scroll
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
    var shareArr = []
    for (let i = 0; i < this.state.data.length; i++) {
      let item = this.state.data[i]
      shareArr.push(
        <a href='#' title={item.UserProfile.nickname}>
          <div className='share' key={item.id}>
            <div className='share_img'>
              <img src={item.PostPics[0]['url']} />
            </div>
            <div className='share_main'>
              <div className='share_user'>
                <div className='share_rad' style={{background: 'url(' + item.UserProfile.avatar + ')'}} />
                <div className='share_nickname'>{item.UserProfile.nickname}
                </div>
                <span className='share_span'>
                  <img src={require('../../assets/images/likes.png')} />
                  <span>{item.likes}</span>
                </span>
              </div>
              <div className='share_title'>{this.rule(item.content)}</div>
            </div>
          </div>
        </a>
      )
    }
    return (
      <div>
        {shareArr}
      </div>
    )
  }
}
export default Share
