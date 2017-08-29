import React, {Component} from 'react'
import '../../assets/styles/find/find.styl'
// import fetch from 'whatwg-fetch'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    fetch('/api/g/getProductList?id=4&sort = 0& load = 1&page = 1& pagesize = 20', {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        console.log(response)
        this.setState({
          data: response.data.product
        })
      })
  }
  render () {
    const dataArray = this.state.data.map(function (item, index) {
      return (
        <p key={index.toString()}>{item.title}</p>
      )
    })
    return (
      <div>
        <h1>App</h1>
        <a href='about.html'>去关于我们</a>
        {dataArray}
      </div>
    )
  }
}

export default App
