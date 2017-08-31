import React, {Component} from 'react'
import '../../assets/styles/host/about.styl'
class About extends Component {
  render () {
    return (
      <div>
        <div className='about-slideShow' />
        <div className='about-wrap'>
          <div className='about-section'>
            <h4>我们是谁 | Who We Are</h4>
            <p className='about-content'>我们是一群热爱生活的年轻人</p>
            <p className='about-content'>我们的愿景是提高商品信息的效率，帮助用户完成商品决策，成为全球最好的电子商务公司。</p>
            <p className='about-content'>我们已经努力了1年，并且会一直为此努力下去。</p>
            <div className='about-img'>
              <img src={require('../../assets/images/Z-us-1.jpg')} alt='777' />
              <img className='about-img-us2' src={require('../../assets/images/Z-us-2.jpg')} alt='777' />
            </div>
          </div>
          <div className='about-section'>
            <h4>关于半糖 | About Better</h4>
            <p className='about-content'>我们愿意成为你消费的入口，希望帮你节省更多的时间，帮你挑选最适合你的商品，</p>
            <p className='about-content'>这就是我们的团队从5个人到50个人也一直在努力做的事情。</p>
            <div className='about-better'>
              <img className='about-betterImg' src={require('../../assets/images/Z-cate.jpg')} alt='777' />
              <ul className='about-base'>
                <li>厨房/Kitchen</li>
                <li>礼物/Gift</li>
                <li>宿舍/Dorm</li>
                <li>学生党/Student</li>
              </ul>
              <ul className='about-base2'>
                <li>上班族/Office</li>
                <li>文艺/Litersature</li>
                <li>节日/Festival</li>
                <li>指南/Guide</li>
                <li>爱美/Beauty</li>
              </ul>
              <ul className='about-base about-base3'>
                <li>聚会/Party</li>
                <li>吃货/Foodie</li>
                <li>设计/Design</li>
                <li>格调/Bigger</li>
              </ul>
            </div>
          </div>
          <div className='about-banner' />
          <div className='about-section'>
            <h4>工作环境 | Environment</h4>
            <p className='about-content'>独立四合院</p>
            <p className='about-content'>嗯，没错，我们有自己的院子和健身房</p>
            <div className='about-environment'>
              <img src={require('../../assets/images/Z-env-1.jpg')} alt='777' />
              <img src={require('../../assets/images/Z-env-2.jpg')} alt='777' />
              <img src={require('../../assets/images/Z-env-3.jpg')} alt='777' />
            </div>
          </div>
          <div className='about-section'>
            <h4>福利待遇 | Benefit</h4>
            <p className='about-benefitContent'>首先在这里，无论你的工作经验、无论你的学历背景，我们都提供给你一个公平竞争的机会，如果你够努力，够出彩，你一定会得到相应的平台和奖励，我们会看到你的努力，也看到你的进步。</p>
            <br />
            <p className='about-benefitContent'>你将会认识一群喜欢各种买买买，平常无限剁剁剁的少男少女们，他们年轻、有活力，做事靠谱，视用户为上帝，视细节为生命的团队一起共事。</p>
            <br />
            <p className='about-benefitContent'>你可以第一时间接触到时尚潮流、商品资讯，我们会尊重你的兴趣和爱好，尊重你的职业生涯规划，为你找到最适合你的那个位置，你也可以听听我们平时的分享，深入到各个你感兴趣的方向。</p>
            <br />
            <p className='about-benefitContent'>你将投入到一个更广阔的天地中去，以一个全新的视野审视自己，在这里每个人都可以畅所欲言提出你的想法，发挥你的价值，你不仅仅是一颗螺丝钉，你可能承担更多的责任，一个好的产品离不开团队里每一个人的idea～</p>
            <br />
            <p className='about-benefitContent about-lastBenefit'>除了这些我们来说说俗点的东西</p>
            <div className='about-benefit'>
              <img src={require('../../assets/images/Z-bene-1.jpg')} alt='777' />
              <ul className='about-benedesc'>
                <li>优秀员工配有期权以及高于行业平均水平的薪资</li>
                <li>五险一金、年终奖、月度奖金一个都不少</li>
                <li>工程师和设计师配备Retina Macbook Pro+27寸显示器</li>
                <li>全员人体工学椅，远离颈椎疾病</li>
                <li>免费的早餐和无限供应的办公室零食</li>
              </ul>
            </div>
            <div className='about-benefit'>
              <img src={require('../../assets/images/Z-bene-2.jpg')} alt='777' />
              <ul className='about-benedesc'>
                <li>报销图书费用，尽情畅游书海，提升自己</li>
                <li>空气净化器保护你的健康</li>
                <li>全面的体检、团队聚餐、季度团建旅游</li>
                <li>健身房、XBOX/PS4游戏机，休息的时候也可以多运动</li>
                <li>交通补贴、电脑补贴等</li>
              </ul>
            </div>
          </div>
          <div className='about-makers' />
          <div className='about-section' id='about-joinus'>
            <h4>加入我们 | Join Us</h4>
            <p className='about-content'>为了未完成的梦想，我们需要很多志同道合的小伙伴加入我们</p>
          </div>
          <div className='about-join'>
            <div className='about-joinLeftVertical'>
              <div className='about-joinContent'>
                <i className='about-editor' />
                <div className='about-joinTitle'>
                  内容编辑
                  <span>｜Content Editor</span>
                </div>
                <p className='about-joinDetail'>除了简单形式的专题和单品推荐，我们将在内容方面不断探索更多不一样的多媒体形式－测评文章、短视频、图像音频等，以更多的方式给用户展示更多更优质的商品。在健康、运动、生活、美妆、箱包、办公、数码、配饰、电器、图书等品类里更多的帮助用户提高生活质量。</p>
                <p className='about-joinDetail'>我们对每一个编辑都有近乎苛刻的要求，每一行文字，每一个选品和图片都是经过精挑细选，所有展示给用户的细节都是我们一直追求的，这也是半糖的做事风格和态度。</p>
              </div>
              <div className='about-joinContent'>
                <i className='about-club' />
                <div className='about-joinTitle'>
                  社区运营
                  <span>｜Community Operation</span>
                </div>
                <p className='about-joinDetail'>我们在寻找一位在社区运营和用户运营方面都非常有经验的社区运营经理。我们需要你搭建社区构架的同时，帮助用户在社区里多分享生活好物。从2015年8月份社区功能上线以后，这部分就成为半糖非常重要的一部分。这里是用户和用户分享、交流的地方，同时也是我们信息的来源入口。</p>
              </div>
              <div className='about-joinContent'>
                <i className='about-manager' />
                <div className='about-joinTitle'>
                  产品经理
                  <span>｜Product Manager</span>
                </div>
                <p className='about-joinDetail'>半糖APP是我们面向用户的第一沟通平台，也绝对是半糖的核心。作为一个产品经理，你一定要站在用户的角度，随时不断的进行沟通，明确用户需求，收集用户信息。在这里你一定要是一个逻辑思维清晰，做事认真，无时无刻不发挥着处女座的本质。遇到问题开动脑筋，第一时间去解决。你可以在技术们和设计们撕到不可开交的时候，做一个调停者。</p>
              </div>
            </div>
            <div className='about-joinLeftVertical'>
              <div className='about-joinContent'>
                <i className='about-media' />
                <div className='about-joinTitle'>
                  新媒体运营
                  <span>｜New Media Operation</span>
                </div>
                <p className='about-joinDetail'>能说会写，脑洞巨大，文风多变的软妹或暖男在哪里？能跟着新媒体大神勾搭用户，挑逗粉丝，策划好玩又新鲜活动的小伙伴，I Want You。我们想要你：对数据敏感，能够正推反推各种姿势推导数据，优化运营手段，提高粉丝数量！各大社交工具的大V小牛，比如某乎、某瓣、某人、某涯、某扑和某吧等等，最好是热爱剁手、了解电商和导购行业的资深达人！</p>
              </div>
              <div className='about-joinContent'>
                <i className='about-design' />
                <div className='about-joinTitle'>
                  设计师
                  <span>｜Designer</span>
                </div>
                <p className='about-joinDetail'>加入我们的设计团队，你一定要是一个对设计有着无限追求和热爱的人。在这里我们视作品和设计意识为唯一的评判标准，对设计师我们从来不设限制，你可以天马行空的想象，在这里每一个设计师都可以做自己。因为我们是一个拥有无限想法的设计团队，你不仅仅是完成一件工作，更是在完成一件有灵魂的作品。我们的每一个设计师对自己输出的任何一个视觉素材都非常挑剔，因为我们输出的每一个界面、每一个元素都会直接呈现在用户面前，我们要为每一个用户负责。为用户设计出最好的产品，这也是半糖设计团队的最高使命。</p>
              </div>
              <div className='about-joinContent'>
                <i className='about-engineer' />
                <div className='about-joinTitle'>
                  工程师
                  <span>｜Engineer</span>
                </div>
                <p className='about-joinDetail'>我们在寻找那些在技术领域有着丰富经验的人。对技术有热情，有自己的想法。在半糖的价值观里用户绝对是第一位的。我们希望所有工程师基于这个理念，来完善我们的后台，并且不断帮助我们优化APP。我们希望你是一个认真，并且乐于学习的人。</p>
              </div>
            </div>
          </div>
          <p className='about-joinJob'>除了上述职位，我们还需要：商务运营 | 品牌经理 | 渠道运营……以上职位同时对实习生开放哦！</p>
          <br />
          <p className='about-joinJob'>如果你想加入我们，完成未完成的梦想</p>
          <br />
          <p className='about-joinJob'>简历请投 hr@ibantang.com</p>
          <br />
          <p className='about-joinJob'>（请在简历中写明你想应聘的岗位）</p>
          <div className='about-map' />
          <div className='about-end' id='about-contact'>
            <h4 className='about-contact'>联系我们 | Contact Us</h4>
            <div className='about-emailArea'>
              <div className='about-add'>
                <i className='about-addImg' />
                <p className='about-addTitle'>公司地址</p>
                <p className='about-addDesc'>北京九州云动科技有限公司</p>
                <p className='about-addDesc'>北京市东城区箭厂胡同22号301室</p>
              </div>
              <div className='about-add'>
                <i className='about-business' />
                <p className='about-addTitle'>商务合作</p>
                <p className='about-addDesc'>open@ibantang.com</p>
                <p className='about-addDesc'>电话：010-57479723</p>
              </div>
              <div className='about-add'>
                <i className='about-userFeedback' />
                <p className='about-addTitle'>用户反馈</p>
                <p className='about-addDesc'>kf@ibantang.com</p>
              </div>
              <div className='about-add'>
                <i className='about-contribute' />
                <p className='about-addTitle'>用户反馈</p>
                <p className='about-addDesc'>kf@ibantang.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default About
