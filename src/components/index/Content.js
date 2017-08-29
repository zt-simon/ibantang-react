import React, { Component } from 'react'
let typeArray = ['topic_main', 'topic_hot_list', 'topic_list_by_attribute', 'topic_list_by_attribute', 'topic_list_by_attribute', 'topic_list_by_attribute', 'topic_list_by_attribute', 'topic_list_by_attribute', 'topic_list_by_attribute', 'topic_list_by_attribute', 'topic_list_by_attribute', 'topic_list_by_attribute', 'topic_list_by_attribute', 'topic_list_by_attribute']
let extendArray = ['', '', '21', '11', '3', '20', '13', '2', '12', '23', '9', '14', '1', '26']
let page = 30
class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      type: 'topic_main',
      extend: '',
      page: 0
    }
  }
  detail = (type, extend, page) => {
    fetch('/api/topic/getHomeTopicList?type=' + type + '&extend=' + extend + '&page=0&pagesize=' + page, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.data.topic
        })
        console.log(this.state.data.length)
      })
  }
  click = (e) => {
    let oLi = document.getElementsByClassName('content-type')
    for (var i = 0; i < oLi.length; i++) {
      oLi[i].style.backgroundColor = 'white'
      oLi[i].style.color = 'black'
    }
    e.target.style.backgroundColor = '#fd6363'
    e.target.style.color = 'white'
    page = 30
    let name = e.target.getAttribute('name')
    this.setState({
      type: typeArray[name],
      extend: extendArray[name],
      page: 0
    })
    this.detail(typeArray[name], extendArray[name], page)
  }
  moreClick = () => {
    page = page + 30
    this.detail(this.state.type, this.state.extend, page)
  }
  componentDidMount () {
    fetch('/api/topic/getHomeTopicList?type=' + this.state.type + '&extend=' + this.state.extend + '&page=' + this.state.page + '&pagesize=30', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.data.topic
        })
      })
  }
  render () {
    const typeArray = ['最新', '热门', '礼物', '美食', '生活', '设计感', '家居', '数码', '阅读', '学生党', '上班族', '美妆', '护理', '运动户外']
    let arr = []
    for (var i = 0; i < typeArray.length; i++) {
      arr.push(<li className='content-type' name={i} onClick={this.click}>{typeArray[i]}</li>)
    }
    const picArray = this.state.data.map(function (item, index) {
      return (
        <div className='content-first'>
          <a href='#' title={item.title}>
            <div className='content-img'>
              <img src={item.pic} className='content-pic' />
            </div>
            <div className='content-title'>{item.title}</div>
            <div className='content-info'>
              <div className='content-nick'>
                <div className='content-nickimg' />
                <p className='content-nickname'>小糖君</p>
              </div>
              <div className='content-state'>
                <span className='content-infoViews' />
                {item.views}
                <span className='content-infoLikes' />
                {item.likes}
              </div>
            </div>
          </a>
        </div>
      )
    })
    return (
      <div className='content-wrap'>
        <div className='content-type'>
          <ul className='contnet-typelist'>
            {arr}
          </ul>
        </div>
        <div className='content-detail'>
          {picArray}
          <div className='content-more' onClick={this.moreClick}>点击查看更多精彩</div>
        </div>
      </div>
    )
  }
}

export default Content
