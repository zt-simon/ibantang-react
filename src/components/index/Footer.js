import React, {Component} from 'react'
import '../../assets/styles/host/App.styl'
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
            <div className='footer-link'><a href='#'>友情链接</a></div>
            <div className='footer-linkContent'>
              <span className='footer-spread' onClick={this.click} style={{display: this.state.block}}>展开</span>
              <a href='http://yp.jd.com/' target="_Blank">京东优评</a>
              <a href='https://www.applysquare.com/' target="_Blank">申请方</a>
              <a href='https://xitu.io/' target="_Blank">稀土</a>
              <a href='http://www.dreamore.com/' target="_Blank">追梦筹</a>
              <a href='http://www.xiaozhu.com/' target="_Blank">小猪</a>
              <a href='https://bcy.net/start' target="_Blank">半次元</a>
              <a href='http://www.vmovier.com/' target="_Blank">微电影</a>
              <a href='http://www.xinpianchang.com/' target="_Blank">新片场</a>
              <a href='http://91xinshang.com/' target="_Blank">心上</a>
              <a href='http://zidian.eduu.com/' target="_Blank">家长帮字典</a>
              <a href='http://www.yixia.com/' target="_Blank">一下科技</a>
              <a href='http://buka.cn/' target="_Blank">布卡漫画</a>
              <a href='http://www.lizhi.fm/' target="_Blank">荔枝FM</a>
              <a href='http://www.abc360.com/' target="_Blank">在线学习英语</a>
              <a href='http://www.techuangyi.com/designer?scode=7DB1F5A855' target="_Blank">特创意设计</a>
              <a href='http://www.bighaowu.com/' target="_Blank">逼格好物</a>
              <a href='http://www.poxiaoyuan.com/' target="_Blank">po校园</a>
              <a href='http://www.ebangzhu.com/' target="_Blank">伊人网</a>
              <a href='http://www.gewara.com/?utmsource=bantang' target="_Blank">格瓦拉9元电影票</a>
              <a href='http://www.biread.net/' target="_Blank">涨姿势</a>
              <a href='https://www.wlgou.com/' target="_Blank">家居饰品批发</a>
              <a href='http://www.kxfanli.com/' target="_Blank">开心返利网</a>
              <a href='http://www.mdebi.com/' target="_Blank">没得比</a>
              <a href='http://www.shoubanba.cn/' target="_Blank">手办吧</a>
              <a href='http://www.manzhan8.com/' target="_Blank">漫展</a>
              <a href='http://www.yopai.com/' target="_Blank">优派网</a>
              <a href='http://www.huim.com/' target="_Blank">会喵</a>
              <a href='http://www.12ku.cn/' target="_Blank">gucci中文官网</a>
              <a href='http://www.nomo.cn/' target="_Blank">翔通动漫</a>
              <a href='http://www.91lai.com/benefit' target="_Blank">海淘返利网</a>
              <a href='http://www.qqqnm.com/zhuanyun/' target="_Blank">海淘转运</a>
              <a href='https://bbs.snsnb.com/' target="_Blank">生男生女帮论坛</a>
              <a href='http://www.bloves.com/news/' target="_Blank">婚戒品牌</a>
              <a href='https://www.douban.com/group/better20171111/' target="_Blank">双十一攻略</a>
              <a href='http://www.zbj.com/wdyy/' target="_Blank">店铺运营</a>
              <a href='http://www.snh0048.com/' target="_Blank">48日饭社</a>
              <a href='http://www.taoshouyou.com/game' target="_Blank">首充号</a>
              <a href='http://www.iquan.net/' target="_Blank">爱券网</a>
              <a href='http://www.jiguo.com/' target="_Blank">极果</a>
              <a href='http://qng.im/' target="_Blank">青果</a>
              <a href='http://yooguo.com/' target="_Blank">柚果</a>
              <a href='http://www.ideamsg.com/' target="_Blank">灵感日报</a>
              <a href='http://www.xiongmao123.com/' target="_Blank">熊猫优选</a>
              <a href='http://www.jitatang.com/' target="_Blank">吉他堂</a>
              <a href='http://ear.duomi.com/' target="_Blank">邻居的耳朵</a>
              <a href='http://sudasuta.com/' target="_Blank">苏打苏塔</a>
              <a href='http://www.ukulelefan.com/' target="_Blank">尤克里里fans</a>
              <a href='http://www.jammyfm.com/' target="_Blank">摇滚</a>
              <a href='http://www.sqkb.com/' target="_Blank">省钱快报</a>
              <a href='http://www.jianshu.com/u/58a8adb769aa' target="_Blank">半塘APP</a>
              <a href='http://weibo.com/bantangapp' target="_Blank">半塘官方微博</a>
              <a href='http://ibantang.lofter.com/' target="_Blank">半塘酱</a>
              <a href='https://www.s.cn/toread-brand.html' target="_Blank">探路者</a>
              <a href='http://www.iamqing.cn/' target="_Blank">氢网</a>
              <a href='http://www.spider.com.cn/' target="_Blank">蜘蛛网</a>
              <a href='https://aimeike.tv/' target="_Blank">在线视频制作</a>
              <a href='http://www.haozhia.cc/' target="_Blank">好值</a>
              <a href='http://www.taokeshuyuan.com/' target="_Blank">淘客书院</a>
              <a href='http://www.shikuaigou.com/' target="_Blank">十块购</a>
              <a href='http://www.tengyuntaoke.com/' target="_Blank">淘客助手</a>
              <a href='http://www.gouwuzhinan.cn/' target="_Blank">购物指南</a>
              <a href='http://www.iquan.net/' target="_Blank">找券网</a>
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
export default Footer
