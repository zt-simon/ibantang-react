import React, {Component} from 'react'
import '../../assets/styles/host/App.styl'
class Firstpage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: 'none',
      height: '100',
      block: ''
    }
  }
  mouseover = () => {
    this.setState({
      show: 'block'
    })
  }
  mouseout = () => {
    this.setState({
      show: 'none'
    })
  }
  // click = () => {
  //   this.setState({
  //     height: '300',
  //     block: 'none'
  //   })
  // }
  render () {
    return (
      <div className='footer-wrap'>
        <div className='footer' >
          <div className='footer-line firstline'>
            <p><a href='firstpage-about.html' target='_Blank'>关于我们</a></p>
            <p><a href='firstpage-about.html#about-joinus' target='_Blank'>加入我们</a></p>
            <p><a href='firstpage-about.html#about-contact' target='_Blank'>联系我们</a></p>
            <p className='footer-firstline-last' target='_Blank'><a href='firstpage-about.html#about-contact'>商务合作</a></p>
          </div>
          <div className='footer-line secondline'>
            <div className='footer-secondCode' style={{display: this.state.show}} />
            <p><a href='firstpage-about.html#about-contact' target='_Blank'>用户反馈</a></p>
            <p><a href='firstpage-about.html#about-contact' target='_Blank'>投稿</a></p>
            <p><a href='http://weibo.com/bantangapp' target='_Blank'>关注我们</a></p>
            <p className='img'>
              <a href='http://weibo.com/bantangapp' className='icons-weibo' target="_Blank" />
              <a href='#' className='icons-weixin' onMouseOver={this.mouseover} onMouseOut={this.mouseout} />
            </p>
          </div>
          <div className='footer-line thirdline' style={{height: this.state.height + 'px'}}>
            <div className='footer-linkContent'>
              <div className="footer-region">公司名称：半糖（北京九州云动科技有限公司</div>
              <div className="footer-region">地址：北京市东城区箭厂胡同</div>
            </div>
          </div>
          <div className='footer-rightline'>
            <div className='footer-rightword'>
              <div className='footer-logo' />
              <div className='footer-word'>发现值得买的好东西</div>
              <div className='footer-shareClub'>购物分享社区</div>
            </div>
            <div className='footer-code'>
              <img src={require('../../assets/images/footer-code.png')} alt='777' className='code-logo' />
            </div>
          </div>
        </div>
        <div className='address'>
          地址：北京市东城区箭厂胡同 · 京ICP备14040010号-5 · 半糖 · 发现值得买的好东西
        </div>
      </div>
    )
  }
}
export default Firstpage
