import React, {Component} from 'react'
import Header from './Header'
class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: window.location.href.split('=')[1],
      data: []
    }
    console.log(this.state.value)
  }
  componentDidMount () {
    fetch('/api/search/getData?ot=product&st=0&q=' + this.state.value + '&page=0&pagesize=20', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.data
        })
        console.log(this.state.data)
      })
  }
  render () {
    // const dataArr = this.state.data.map(function (item, index) {
    //   return (
    //     <div>
    //       <div></div>
    //     </div>
    //   )
    // })
    return (
      <div className='myWrap'>
        <Header />
      </div>
    )
  }
}
export default Search
