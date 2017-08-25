import React, {Component} from 'react'

class Footer extends Component {
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
  click = () => {
    this.setState({
      height: '300',
      block: 'none'
    })
  }
  render () {
    return (
      <div>
        <div className='footer' >
          <div className='footer-line firstline'>
            <p><a href='#'>关于我们</a></p>
            <p><a href='#'>加入我们</a></p>
            <p><a href='#'>练习我们</a></p>
            <p className='footer-firstline-last'><a href='#'>商务合作</a></p>
          </div>
          <div className='footer-line secondline'>
            <div className='footer-secondCode' style={{display: this.state.show}} />
            <p><a href='#'>用户反馈</a></p>
            <p><a href='#'>投稿</a></p>
            <p><a href='#'>关注我们</a></p>
            <p className='img'>
              <a href='#' className='icons-weibo' />
              <a href='#' className='icons-weixin' onMouseOver={this.mouseover} onMouseOut={this.mouseout} />
            </p>
          </div>
          <div className='footer-line thirdline' style={{height: this.state.height + 'px'}}>
            <div className='footer-link'><a href='#'>友情链接</a></div>
            <div className='footer-linkContent'>
              <span className='footer-spread' onClick={this.click} style={{display: this.state.block}}>展开</span>
              <a href='#'>京东优评</a>
              <a href='#'>申请方</a>
              <a href='#'>稀土</a>
              <a href='#'>追梦筹</a>
              <a href='#'>小猪</a>
              <a href='#'>半次元</a>
              <a href='#'>微电影</a>
              <a href='#'>新片场</a>
              <a href='#'>心上</a>
              <a href='#'>家长帮字典</a>
              <a href='#'>一下科技</a>
              <a href='#'>布卡漫画</a>
              <a href='#'>荔枝FM</a>
              <a href='#'>在线学习英语</a>
              <a href='#'>特创意设计</a>
              <a href='#'>逼格好物</a>
              <a href='#'>po校园</a>
              <a href='#'>伊人网</a>
              <a href='#'>格瓦拉9元电影票</a>
              <a href='#'>涨姿</a>
              <a href='#'>家居饰品批发</a>
              <a href='#'>开心返利网</a>
              <a href='#'>没得比</a>
              <a href='#'>手办吧</a>
              <a href='#'>漫展</a>
              <a href='#'>优派网</a>
              <a href='#'>会喵</a>
              <a href='#'>gucci中文官网</a>
              <a href='#'>翔通动漫</a>
              <a href='#'>海淘返利网</a>
              <a href='#'>海淘转运</a>
              <a href='#'>生男生女帮论坛</a>
              <a href='#'>婚戒品牌</a>
              <a href='#'>双十一攻略</a>
              <a href='#'>店铺运营</a>
              <a href='#'>48日饭社</a>
              <a href='#'>首充号</a>
              <a href='#'>爱券网</a>
              <a href='#'>极果</a>
              <a href='#'>青果</a>
              <a href='#'>柚果</a>
              <a href='#'>灵感日报</a>
              <a href='#'>熊猫优选</a>
              <a href='#'>吉他堂</a>
              <a href='#'>邻居的耳朵</a>
              <a href='#'>苏打苏塔</a>
              <a href='#'>尤克里里fans</a>
              <a href='#'>摇滚</a>
              <a href='#'>省钱快报</a>
              <a href='#'>半塘APP</a>
              <a href='#'>半塘官方微博</a>
              <a href='#'>半塘酱</a>
              <a href='#'>探路者</a>
              <a href='#'>氢网</a>
              <a href='#'>蜘蛛网</a>
              <a href='#'>在线视频制作</a>
              <a href='#'>好值</a>
              <a href='#'>淘客书院</a>
              <a href='#'>十块购</a>
              <a href='#'>淘客助手</a>
              <a href='#'>购物指南</a>
              <a href='#'>找券网</a>
            </div>
          </div>
          <div className='footer-rightline'>
            <div className='footer-rightword'>
              <div className='footer-logo' />
              <div className='footer-word'>发现值得买的好东西</div>
              <div className='footer-shareClub'>购物分享社区</div>
            </div>
            <div className='footer-code'>
              <img src={require('../assets/images/footer-code.png')} alt='777' className='code-logo' />
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

export default Footer
