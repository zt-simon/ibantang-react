import React, {Component} from 'react'
var num = 1
class Article extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      page: num
    }
  }scroll = () => {
    if (document.body.scrollTop + document.body.clientHeight === document.body.scrollHeight) {
      num++
      // console.log(this.state.page + '前')
      this.setState({
        page: num
      })
      fetch('/api/article/getArticleList?page=' + this.state.page + '&pagesize=20', {
        method: 'GET'
      })
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response)
          this.setState({
            data: this.state.data.concat(response.data)
          })
        })
      // console.log(this.state.page + '后')
    }
  }
  componentDidMount () {
    fetch('/api/article/getArticleList?page=' + this.state.page + '&pagesize=20', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        // console.log(response.data)
        this.setState({
          data: response.data
        })
      })
    document.body.onscroll = this.scroll
  }
  render () {
    const descArr = this.state.data.map(function (item, index) {
      return (
        <a href='#' title={item.title} key={item.id}>
          <div className='article'>
            <div className='article_img'>
              <img src={item.pics[0]['url']} />
            </div>
            <div className='article_box'>
              <div className='article_title'>{item.title}</div>
              <p className='article_desc'>{item.desc}</p>
              <div className='article_small'>
                <div className='article_views'>
                  <img src={require('../../assets/images/views.png')} />
                  <span>{item.views}</span>
                </div>
                <div className='article_likes'>
                  <img src={require('../../assets/images/likes.png')} />
                  <span> {item.likes}</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      )
    })
    return (
      <div>{descArr}</div>
    )
  }
}
export default Article
