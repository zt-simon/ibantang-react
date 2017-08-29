import React, {Component} from 'react'
import Article from './Article'
import Share from './Share'
class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tf: 'title'
    }
  }

  titleClick = () => {
    this.setState({
      tf: 'title'
    })
  }
  shareClick = () => {
    this.setState({
      tf: 'share'
    })
  }
  choose = () => {
    if (this.state.tf === 'title') {
      return <Article />
    } else {
      return <Share />
    }
  }
  color = () => {
    if (this.state.tf === 'title') {
      return (
        <div>
          <li onClick={this.titleClick}><a href='#' style={{color: 'red'}}>文章</a></li>
          <li onClick={this.shareClick}><a href='#'>晒单</a></li>
        </div>
      )
    } else {
      return (
        <div>
          <li onClick={this.titleClick}><a href='#'>文章</a></li>
          <li onClick={this.shareClick} ><a href='#' style={{color: 'red'}}>晒单</a></li>
        </div>
      )
    }
  }
  render() {
    return (
      <div className='main'>
        <div className='main_left'>
          <ul>
            <li>发现</li>
            {this.color()}
          </ul>
        </div>
        <div className='main_right'>{this.choose()}</div>
      </div>
    )
  }
}
export default Main