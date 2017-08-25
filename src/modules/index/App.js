import React, {Component} from 'react'
import '../../assets/styles/host/App.styl'
import Footer from '../../components/Footer'
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
    return (
      <div>
        <h1>App</h1>
        <a href='article.html'>去文章</a>
        <br />
        <a href='find.html'>去发现</a>
        <Footer />
      </div>
    )
  }
}
export default App
