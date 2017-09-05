/**
 * Created by yuezengchen on 2017/8/29.
 */
import '../../assets/styles/find/find.styl'
import '../../assets/styles/good/kinds.styl'
import React, {Component} from 'react'
const kindArr = ['美妆', '个护', '食品', '生活', '数码', '办公', '鞋包', '家电', '运动', '图书', '搭配']
const fArrid = [14, 1, 11, 3, 2, 9, 6, 13, 10, 12, 8]
const meizhuangArr = ['美妆分类', '面部彩妆', '眼部彩妆', '眉部彩妆', '唇部彩妆', '美甲护甲', '香水香氛', '美妆工具', '套装/礼盒']
const meizhuangArrid = [122, 126, 116, 108, 109, 21, 110, 545]
const gehuArr = ['个护分类:', '面部护理', '眼部护理', '唇部护理', '口腔护理', '身体护理', '美发护发', '男士护理', '女性卫生', '洗护工具', '其他护理']
const gehuArrid = [233, 239, 248, 299, 290, 315, 270, 328, 309, 556]
const shipinArr = ['食品分类:', '休闲食品', '饮料酒水', '奶类制品', '粮油调味', '生鲜食品', '节日食品', '保健食品']
const shipinArrid = [342, 370, 384, 357, 419, 392, 406]
const shenghuoArr = ['生活分类:', '生活用品', '家居清洁', '家居饰品', '住宅家具', '家纺布艺', '厨房用具', '灯具灯饰', '宠物用品', '玩模乐器', '园艺用品', '节庆礼品']
const shenghuoArrid = [475, 483, 451, 463, 469, 489, 434, 501, 514, 524, 498]
const shumaArr = ['数码分类:', '手机周边', '电脑周边', '影音娱乐', '摄影摄像', '游戏设备', '智能设备']
const shumaArrid = [313, 336, 343, 326, 373, 359]
const bangongArr = ['办公分类:', '文具', '日常办公']
const bangongArrid = [527, 515]
const xiebaoArr = ['鞋包分类:', '女包', '男包', '功能箱包', '女鞋', '男鞋']
const xiebaoArrid = [395, 405, 420, 431, 448]
const jiadianArr = ['家电分类:', '生活电器', '厨房电器', '个护健康', '家庭清洁']
const jiadianArrid = [242, 238, 240, 245]
const yundongArr = ['运动分类:', '球类', '健身', '户外', '运动服饰']
const yundongArrid = [91, 113, 90, 89]
const tushuArr = ['图书分类:', '图书杂志', '数字音像']
const tushuArrid = [100, 101]
const dapeiArr = ['搭配分类:', '女装', '男装', '配置']
const dapeiArrid = [5, 4, 115]
const firbothArr = [meizhuangArr, gehuArr, shipinArr, shenghuoArr, shumaArr, bangongArr, xiebaoArr, jiadianArr, yundongArr, tushuArr, dapeiArr]
const firbothArrid = [meizhuangArrid, gehuArrid, shipinArrid, shenghuoArrid, shumaArrid, bangongArrid, xiebaoArrid, jiadianArrid, yundongArrid, tushuArrid, dapeiArrid]
const mianbuArr = ['面部彩妆分类', 'BB/CC霜', '粉底', '粉饼', '隔离/妆前乳', '气垫BB/CC霜', '腮红', '散粉/蜜粉', '修容', '喷雾', '高光', '遮瑕', '面妆套装']
const mianbuArrid = [114, 119, 120, 118, 117, 175, 121, 177, 543, 179, 181, 550]
const yanbuArr = ['眼部彩妆分类', '眼线笔', '眼线膏/胶', '眼线液', '眼影', '睫毛膏', '睫毛增长液', '睫毛定型', '美瞳/隐形眼镜', '眼妆套装']
const yanbuArrid = [127, 128, 129, 130, 131, 132, 554, 582, 548]
const meibuArr = ['眉部彩妆分类', '眉笔', '眉粉', '染眉膏', '眉部定型']
const meibuArrid = [123, 124, 125, 553]
const chunbuArr = ['唇部彩妆分类', '口红', '唇彩/唇蜜', '唇装套装']
const chunbuArrid = [141, 142, 549]
const meijiaArr = ['美甲护甲分类', '指甲油', '指甲贴', '美甲工具', '护甲产品', '卸甲水', '甲油胶', '美甲套装']
const meijiaArrid = [144, 148, 153, 540, 146, 150, 547]
const xiangshuiArr = ['香水香氛分类', '精油', '香水', '香膏', '香体']
const xiangshuiArrid = [544, 534, 537, 538]
const meizhuanggongjuArr = ['美妆工具分类', '化妆镜', '粉扑', '化妆包', '化妆海绵', '化妆刷', '睫毛夹', '假睫毛', '假睫毛胶水', '双眼皮贴', '清洗工具']
const meizhuanggongjuArrid = [589, 161, 539, 163, 159, 165, 541, 555, 166, 552]
const taozhuangArr = ['套装/礼盒分类', '彩妆套装']
const taozhuangArrid = [546]
const mianbuhuArr = ['面部护理分类', '面部护理分类', '贴片式面膜', '精油', '精华', '面霜', '水乳', '涂抹式面膜', '洁面乳/膏/粉', '洁面皂', '洁面啫喱/摩丝', '防晒霜', '晒后修复', '防晒乳液/喷雾', '卸妆乳', '卸妆膏', '卸妆油', '卸妆液', '套装', '面部去角质', '卸妆湿巾']
const mianbuhuArrid = [224, 592, 236, 235, 234, 226, 189, 563, 190, 263, 267, 265, 204, 206, 201, 208, 237, 191, 209]
const yanbuhuArr = ['眼部护理分类', '眼霜', '眼膜', '眼部精华', '护理眼罩']
const yanbuhuArrid = [241, 244, 243, 560]
const chunbuhuArr = ['唇部护理分类', '润唇膏', '润唇油', '唇膜', '唇部去角质']
const chunbuhuArrid = [254, 256, 258, 564]
const kouqianghuArr = ['口腔护理分类', '牙膏/牙粉', '牙刷', '漱口水', '牙齿美容']
const kouqianghuArrid = [302, 303, 305, 307]
const shentihuArr = ['身体护理分类', '沐浴露', '身体乳', '香皂', '手/足护理', '身体去角质', '脱毛', '纤体霜/啫喱']
const shentihuArrid = [283, 292, 285, 294, 286, 296, 325]
const meifahuArr = ['美发护发分类', '洗发/护发', '染发', '发蜡/发胶', '美发工具']
const meifahuArrid = [281, 318, 319, 321]
const nanshihuArr = ['男士护理分类', '男士面膜', '男士洁面', '剃须用品', '男士水/乳/霜', '男士防晒', '男士眼霜', '男士香水']
const nanshihuArrid = [598, 271, 565, 273, 566, 275, 535]
const nvxingweiArr = ['女性卫生分类', '卫生巾', '卫生棉条', '私密护理']
const nvxingweiArrid = [330, 332, 334]
const xihuArr = ['洗护工具分类', '洁面仪', '洁面工具', '吸油纸', '化妆棉', '沐浴工具', '镊子/剪刀/针', '美容仪']
const xihuArrid = [310, 311, 542, 551, 312, 168, 559]
const qitahuArr = ['其他护理分类', '眼药水', '防过敏喷雾', '口罩', '祛痘产品', '止汗产品', '软膏']
const qitahuArrid = [557, 558, 581, 591, 584, 562]
const xiuxianArr = ['休闲食品分类', '熟食腊味', '休闲零食', '糖果', '巧克力', '饼干糕点', '坚果炒货', '肉干肉松', '蜜饯果铺', '地方特产']
const xiuxianArrid = [590, 344, 345, 347, 348, 349, 350, 351, 567]
const yinliaoArr = ['饮料酒水分类', '茶类', '饮料', '咖啡', '酒类', '冲调饮品']
const yinliaoArrid = [372, 374, 375, 377, 379]
const naileiArr = ['奶类制品分类', '牛奶', '奶粉', '酸奶', '其他奶制品']
const naileiArrid = [386, 388, 389, 391]
const liangyouArr = ['粮油调味分类', '有机食品', '米面杂粮', '食用油', '调味品', '方便食品']
const liangyouArrid = [366, 358, 360, 361, 365]
const shengxianArr = ['生鲜食品分类', '水果', '海鲜水产', '鲜肉禽蛋', '冷冻冷藏', '蔬菜']
const shengxianArrid = [421, 422, 424, 426, 428]
const jieriArr = ['节日食品分类', '月饼', '粽子']
const jieriArrid = [393, 394]
const baojianArr = ['保健食品分类', '基础健康', '综合营养', '美体美颜', '滋润调养', '植物营养素']
const baojianArrid = [408, 410, 412, 414, 416]
const shenghuoyongArr = ['生活用品分类', '收纳用品', '伞具雨具', '浴室用品', '净化除味', '安全健康', '杯具', '火机烟具', '香薰', '保暖防护', '扇']
const shenghuoyongArrid = [476, 477, 478, 479, 480, 481, 482, 577, 578, 583, 585]
const jiajuArr = ['家居清洁分类', '纸巾湿巾', '衣物清洁', '清洁工具', '驱虫用品', '日常护理']
const jiajuArrid = [484, 485, 486, 487, 488]
const jiajushiArr = ['家居饰品分类', '墙贴', '装饰字画', '花瓶花器', '仿真植物', '相框相架', '家居摆件', '其他装饰']
const jiajushiArrid = [455, 457, 458, 459, 460, 461, 462]
const zhuzhaiArr = ['住宅家具分类', '客厅家具', '书房家具', '卧室家具', '阳台户外', '餐厅家具']
const zhuzhaiArrid = [464, 465, 466, 467, 468]
const jiafangArr = ['家纺布艺分类', '床上用品', '布艺绣品', '窗帘配件', '毯类', '面料布料']
const jiafangArrid = [470, 471, 472, 473, 474]
const chufangArr = ['厨房用具分类', '烹饪锅具', '刀剪砧板', '收纳保鲜', '酒具', '茶具', '烘焙用具', '咖啡用品', '餐具']
const chufangArrid = [490, 491, 492, 493, 494, 495, 496, 497]
const dengjuArr = ['灯具灯饰分类', '壁灯', '台灯', '落地灯', '装饰灯', '顶灯', '节能灯', '小夜灯', '灯具配件']
const dengjuArrid = [595, 437, 439, 440, 442, 444, 446, 447]
const chongwuArr = ['宠物用品分类', '食品', '玩具', '服饰', '出行装备', '医护美容', '家居日用']
const chongwuArrid = [502, 503, 504, 505, 507, 509]
const wanmoArr = ['玩模乐器', '乐器', '玩具', '模型', '动漫周边']
const wanmoArrid = [516, 518, 519, 521]
const yuanyiArr = ['园艺用品分类', '多肉', '绿植', '藻类', '花器', '工具']
const yuanyiArrid = [525, 526, 528, 529, 531]
const jieqingArr = ['节庆礼品分类', '婚庆用品', '节日用品']
const jieqingArrid = [499, 500]
const shoujiArr = ['手机周边分类', '电池移动电源', '手机饰品', '充电设备', '手机壳', '手机电话', '车载配件', '拍照设备', '手机配件']
const shoujiArrid = [314, 316, 317, 320, 387, 322, 323, 573]
const diannaoArr = ['电脑周边分类', '存储设备', '网络设备', '数码收纳', '电脑配件', '数码支架', '电子书', '数码清洁', '键盘', '摄像头', '鼠标', '线材', '手写板/笔', '数码装饰', '鼠标垫', '电脑', '平板电脑']
const diannaoArrid = [337, 382, 338, 383, 339, 385, 340, 390, 341, 568, 569, 570, 574, 572, 586, 588]
const yingyinArr = ['影音娱乐分类', '耳机', '音频配件', '数码相框', '音箱', '便携投影', '智能盒子', '播放器']
const yingyinArrid = [346, 352, 353, 354, 511, 355, 356]
const sheyingArr = ['摄影摄像分类', '相机', '摄像机', '便携打印', '镜头', '相机配件', '冲印']
const sheyingArrid = [327, 329, 510, 331, 333, 335]
const youxiArr = ['游戏设备分类', '游戏周边', '遥控系列', '游戏机']
const youxiArrid = [376, 378, 380]
const zhinengArr = ['智能设备分类', '智能手环', '智能手表', '智能家居', '无人机', '智能穿戴', '智能玩具']
const zhinengArrid = [362, 364, 367, 368, 369, 371]
const wenjuArr = ['文具分类:', '笔', '手帐', '手账周边', '美术用品', '教具文具', '明信片/书签']
const wenjuArrid = [520, 517, 533, 532, 530, 596]
const richangArr = ['日常办公分类:', '桌椅', '办公收纳', '办公效率', '其它办公']
const richangArrid = [508, 522, 523, 513]
const nvbaoArr = ['女包分类:', '钱包', '手拿包', '单肩包', '双肩包', '手提包', '斜跨包', '卡包', '钥匙包']
const nvbaoArrid = [396, 397, 398, 399, 400, 402, 403, 404]
const nanbaoArr = ['男包分类:', '钱包', '手拿包', '商务公文包', '单肩/斜跨包', '双肩包', '卡包', '钥匙包']
const nanbaoArrid = [407, 409, 411, 413, 415, 417, 418]
const gongnengArr = ['功能箱包分类:', '旅行箱包', '休闲运动包', '旅行配件', '儿童包', '数码包']
const gongnengArrid = [423, 425, 427, 429, 430]
const nvxieArr = ['女鞋分类:', '高跟鞋', '平底鞋', '中跟鞋', '坡跟鞋', '女拖', '配件', '休闲运动鞋', '凉鞋', '靴']
const nvxieArrid = [432, 433, 435, 436, 438, 441, 443, 445, 587]
const nanxieArr = ['男鞋分类:', '商务鞋', '休闲鞋', '男靴', '凉鞋', '男拖', '休闲运动鞋']
const nanxieArrid = [449, 450, 452, 453, 454, 456]
const shenghuodianArr = ['生活电器分类:', '智能马桶盖', '取暖', '风扇', '加湿除湿', '净化器', '饮水机', '净水设备', '插座', '电吹风', '电视机']
const shenghuodianArrid = [597, 287, 288, 289, 291, 293, 295, 297, 298, 594]
const chufangdianArr = ['厨房电器分类:', '冰激凌机', '豆浆机', '榨汁机', '电饭煲', '锅', '面包机', '咖啡工具', '微波炉', '烤箱', '电磁炉', '电饼铛', '煮蛋器', '酸奶机', '面条机', '热水壶', '其它厨房电器']
const chufangdianArrid = [246, 247, 249, 250, 251, 252, 253, 255, 257, 259, 260, 262, 264, 266, 268, 269]
const gehujianArr = ['个护健康分类:', '剃须除毛', '口腔护理', '美容器材', '美发器材', '按摩保健', '血压仪', '电子秤', '血糖测量']
const gehujianArrid = [272, 274, 276, 277, 278, 280, 282, 284]
const jiatingArr = ['家庭清洁分类:', '吸尘器', '扫地机器人', '洗衣设备', '熨衣干衣', '洗碗机', '家庭清洁']
const jiatingArrid = [300, 301, 304, 306, 308, 576]
const qiuleiArr = ['足球分类:', '足球鞋', '篮球鞋', '羽毛球鞋', '网球鞋']
const qiuleiArrid = [156, 157, 158, 160]
const jianshenArr = ['健身分类', '跑鞋', '跑步器械', '瑜伽舞蹈', '健身器械', '健身服', '训练鞋', '运动护具']
const jianshenArrid = [154, 169, 174, 170, 138, 155, 167]
const huwaiArr = ['户外分类:', '冲锋衣', '防晒衣', '速干衣物', '功能衣裤', '滑板车', '平衡车', '专业户外鞋', '登山用品', '滑雪用品', '野营用品', '救援用品', '户外工具', '户外照明', '其它户外']
const huwaiArrid = [134, 133, 135, 137, 172, 171, 162, 151, 173, 147, 149, 145, 143, 152]
const yundongfuArr = ['运动服饰分类:', '运动内衣', '运动饰品', '运动手表', '运动袜', '泳衣']
const yundongfuArrid = [136, 139, 140, 164, 575]
const tushuzaArr = ['图片杂志分类:', '文化艺术', '经济管理', '科学技术', '流行娱乐', '期刊杂志', '漫画', '工具书']
const tushuzaArrid = [176, 178, 180, 182, 183, 184, 185]
const shuziArr = ['数字音像分类:', '光盘', '电子书刊']
const shuziArrid = [186, 187]
const nvzhuangArr = ['女装分类', '短袖', '裙子', '短裤', '内衣', '长袖', '外套', '长裤', '家居服']
const nvzhuangArrid = [62, 63, 64, 67, 61, 59, 60, 579]
const nanzhuangArr = ['男装分类', '短袖', '短裤', '内衣', '外套', '长裤', '长袖', '家居服']
const nanzhuangArrid = [55, 56, 58, 52, 53, 54, 580]
const peishiArr = ['配饰分类', '腰带', '眼镜', '帽子', '手表', '围巾', '袜子', '手套', '饰品']
const peishiArrid = [593, 80, 82, 78, 81, 79, 84, 83]
const bothmeizhuangArr = [mianbuArr, yanbuArr, meibuArr, chunbuArr, meijiaArr, xiangshuiArr, meizhuanggongjuArr, taozhuangArr]
const bothmeizhuangArrid = [mianbuArrid, yanbuArrid, meibuArrid, chunbuArrid, meijiaArrid, xiangshuiArrid, meizhuanggongjuArrid, taozhuangArrid]
const bothgehuArr = [mianbuhuArr, yanbuhuArr, chunbuhuArr, kouqianghuArr, shentihuArr, meifahuArr, nanshihuArr, nvxingweiArr, xihuArr, qitahuArr]
const bothgehuArrid = [mianbuhuArrid, yanbuhuArrid, chunbuhuArrid, kouqianghuArrid, shentihuArrid, meifahuArrid, nanshihuArrid, nvxingweiArrid, xihuArrid, qitahuArrid]
const bothshipinArr = [xiuxianArr, yinliaoArr, naileiArr, liangyouArr, shengxianArr, jieriArr, baojianArr]
const bothshipinArrid = [xiuxianArrid, yinliaoArrid, naileiArrid, liangyouArrid, shengxianArrid, jieriArrid, baojianArrid]
const bothshenghuoArr = [shenghuoyongArr, jiajuArr, jiajushiArr, zhuzhaiArr, jiafangArr, chufangArr, dengjuArr, chongwuArr, wanmoArr, yuanyiArr, jieqingArr]
const bothshenghuoArrid = [shenghuoyongArrid, jiajuArrid, jiajushiArrid, zhuzhaiArrid, jiafangArrid, chufangArrid, dengjuArrid, chongwuArrid, wanmoArrid, yuanyiArrid, jieqingArrid]
const bothshumaArr = [shoujiArr, diannaoArr, yingyinArr, sheyingArr, youxiArr, zhinengArr]
const bothshumaArrid = [shoujiArrid, diannaoArrid, yingyinArrid, sheyingArrid, youxiArrid, zhinengArrid]
const bothbangongArr = [wenjuArr, richangArr]
const bothbangongArrid = [wenjuArrid, richangArrid]
const bothxiebaoArr = [nvbaoArr, nanbaoArr, gongnengArr, nvxieArr, nanxieArr]
const bothxiebaoArrid = [nvbaoArrid, nanbaoArrid, gongnengArrid, nvxieArrid, nanxieArrid]
const bothjiadianArr = [shenghuodianArr, chufangdianArr, gehujianArr, jiatingArr]
const bothjiadianArrid = [shenghuodianArrid, chufangdianArrid, gehujianArrid, jiatingArrid]
const bothyundongArr = [qiuleiArr, jianshenArr, huwaiArr, yundongfuArr]
const bothyundongArrid = [qiuleiArrid, jianshenArrid, huwaiArrid, yundongfuArrid]
const bothtushuArr = [tushuzaArr, shuziArr]
const bothtushuArrid = [tushuzaArrid, shuziArrid]
const bothdapeiArr = [nvzhuangArr, nanzhuangArr, peishiArr]
const bothdapeiArrid = [nvzhuangArrid, nanzhuangArrid, peishiArrid]
const bothsecArr = [bothmeizhuangArr, bothgehuArr, bothshipinArr, bothshenghuoArr, bothshumaArr, bothbangongArr, bothxiebaoArr, bothjiadianArr, bothyundongArr, bothtushuArr, bothdapeiArr]
const bothsecArrid = [bothmeizhuangArrid, bothgehuArrid, bothshipinArrid, bothshenghuoArrid, bothshumaArrid, bothbangongArrid, bothxiebaoArrid, bothjiadianArrid, bothyundongArrid, bothtushuArrid, bothdapeiArrid]
let secnameArr = meizhuangArr
let secnameArrid = meizhuangArrid
let bt = 14
let thinameArr = []
let thinameArrid = []
class Kinds extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      sort: 0,
      page: 0,
      ID: 14,
      pagesize: 20,
      method: 'getProductList'
    }
  }
  requestpx = (method, Id, sort, page, pagesize) => {
    fetch(`api/g/${method}?id=${Id}&sort=${sort}&page=${page}&pagesize=${pagesize}`, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        if (this.state.method === 'getProductList') {
          this.setState({
            data: response.data.product
          })
        } else if (this.state.method === 'getPostList') {
          this.setState({
            data: response.data.post
          })
        } else if (this.state.method === 'getTopicList') {
          this.setState({
            data: response.data.topic
          })
        }
      })
  }
  componentDidMount () {
    this.requestpx(this.state.method, this.state.ID, this.state.sort, this.state.page, this.state.pagesize)
  }
  changekindf = (id) => {
    fetch(`/api/g/getProductList?id=${id}&sort=0&load=1&page=0&pagesize = 20`, {
      method: 'GET'
    })
        .then(response => {
          return response.json()
        })
        .then(response => {
          this.setState({
            data: response.data.product,
            ID: id
          })
        })
  }
  changekinds = (id) => {
    fetch(`/api/g/getProductList?id=${id}&sort=0&page=0&pagesize=20`, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
        .then(response => {
          this.setState({
            data: response.data.product,
            ID: id
          })
        })
  }
  changekindt = (id) => {
    fetch(`/api/g/getProductList?id=${id}&sort=0&page=0&pagesize = 20`, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          data: response.data.product,
          ID: id
        })
      })
  }
  chooseKind = (name) => {
    for (let i = 0; i < fArrid.length; i++) {
      if (parseInt(name) === fArrid[i]) {
        bt = fArrid[i]
        secnameArrid = firbothArrid[i]
        secnameArr = firbothArr[i]
      }
    }
    thinameArr = []
    thinameArrid = []
  }
  changeIDf = (e) => {
    let name = e.target.getAttribute('name')
    this.changekindf(name)
    this.chooseKind(name)
  }
  changeIDs = (e) => {
    let name = e.target.getAttribute('name')
    this.changekinds(name)
    for (let j = 0; j < fArrid.length; j++) {
      if (bt === fArrid[j]) {
        for (let i = 0; i < secnameArrid.length; i++) {
          if (parseInt(name) === secnameArrid[i]) {
            thinameArr = bothsecArr[j][i]
            thinameArrid = bothsecArrid[j][i]
          }
        }
      }
    }
  }
  changeIDt = (e) => {
    let name = e.target.getAttribute('name')
    this.changekindt(name)
  }
  request = (method, ID, sort, page, pagesize) => {
    fetch(`/api/g/${method}?id=${ID}&sort=${sort}&page=${page}&pagesize=${pagesize}`, {
      method: 'GET'
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        if (this.state.method === 'getProductList') {
          this.setState({
            data: this.state.data.concat(response.data.product)
          })
        } else if (this.state.method === 'getPostList') {
          this.setState({
            data: this.state.data.concat(response.data.post)
          })
        } else {
          this.setState({
            data: this.state.data.concat(response.data.topic)
          })
        }
      })
  }

  changesort0 = () => {
    this.setState({
      sort: 0,
      page: 0
    }, function () {
      this.requestpx(this.state.method, this.state.ID, this.state.sort, this.state.page, this.state.pagesize)
    })
  }
  changesort1 = () => {
    this.setState({
      sort: 1,
      page: 0
    }, function () {
      this.requestpx(this.state.method, this.state.ID, this.state.sort, this.state.page, this.state.pagesize)
    })
  }
  changesort2 = () => {
    this.setState({
      sort: 2,
      page: 0
    }, function () {
      this.requestpx(this.state.method, this.state.ID, this.state.sort, this.state.page, this.state.pagesize)
    })
  }
  changesort3 = () => {
    this.setState({
      sort: 3,
      page: 0
    }, function () {
      this.requestpx(this.state.method, this.state.ID, this.state.sort, this.state.page, this.state.pagesize)
    })
  }
  changesort4 = () => {
    this.setState({
      sort: 4,
      page: 0
    }, function () {
      this.requestpx(this.state.method, this.state.ID, this.state.sort, this.state.page, this.state.pagesize)
    })
  }
  requestfl = (method, Id, sort, page) => {
    fetch(`api/g/${method}?id=${Id}&sort=${sort}&page=${page}&pagesize=20`, {
      method: 'GET'
    })
    .then(response => {
      return response.json()
    })
    .then(response => {
      if (method === 'getProductList') {
        this.setState({
          data: response.data.product
        })
      } else if (method === 'getPostList') {
        this.setState({
          data: response.data.post
        })
      } else if (method === 'getTopicList') {
        this.setState({
          data: response.data.topic
        })
      }
    })
  }
  goods = () => {
    this.setState({
      method: 'getProductList',
      pagesize: 20,
      data: []
    }, function () {
      this.requestfl(this.state.method, this.state.ID, this.state.sort, this.state.page)
    })
  }

  review = () => {
    this.setState({
      method: 'getPostList',
      pagesize: 20,
      data: []
    }, () => {
      this.requestfl(this.state.method, this.state.ID, this.state.sort, this.state.page)
    })
  }
  article = () => {
    this.setState({
      method: 'getTopicList',
      pagesize: 21,
      data: []
    }, function () {
      this.requestfl(this.state.method, this.state.ID, this.state.sort, this.state.page)
    })
  }
  addmore = () => {
    if (this.state.method === 'getTopicList') {
      this.setState({
        page: this.state.page + 1,
        pagesize: 21
      }, function () {
        this.request(this.state.method, this.state.ID, this.state.sort, this.state.page, this.state.pagesize)
      })
    } else {
      this.setState({
        page: this.state.page + 1,
        pagesize: 20
      }, function () {
        this.request(this.state.method, this.state.ID, this.state.sort, this.state.page, this.state.pagesize)
        console.log(this.state.data)
      })
    }
  }
  render () {
    let arr1 = []
    for (let i = 0; i < kindArr.length; i++) {
      arr1.push(<div onClick={this.changeIDf} name={fArrid[i]}>{kindArr[i]}</div>)
    }
    let arr2 = []
    arr2.push(<span className="kinds_second_level_topic" >{secnameArr[0] }</span>)
    for (let i = 1; i < secnameArr.length; i++) {
      arr2.push(<div name={secnameArrid[i - 1]}key={secnameArrid[i - 1]} onClick={this.changeIDs} >{secnameArr[i]}</div>)
    }
    let arr3 = []
    arr3.push(<span className="kinds_second_level_topic" key={thinameArr[0]}>{thinameArr[0]}</span>)
    for (let i = 1; i < thinameArr.length; i++) {
      arr3.push(<div name={thinameArrid[i - 1]}key={thinameArrid[i - 1]} onClick={this.changeIDt}>{thinameArr[i]}</div>)
    }
    let content = []
    let temp = this.state.data
    for (let i = 0; i < temp.length; i++) {
      if (this.state.data.length !== 0 && this.state.data[0].brand !== undefined) {
        content.push(<a href={`http://www.ibantang.com/product/${temp[i]['id']}`} target="_blank" className="things">
          <div className="imgDiv"><img src={temp[i]['pic']} className="pic" /></div>
          <div className="topic">{temp[i]['title']}</div>
          <div>
            <span className="price">￥{temp[i]['price']}</span>
            <img src={require('../../assets/images/goodlike.png')} className="like" />
            <span className="likes">{temp[i]['likes']}</span>
          </div>
        </a>)
      } else if (this.state.data.length !== 0 && this.state.data[0].dynamic !== undefined) {
        content.push(<a href={`${temp[i].share_url}`} target="_blank">
          <div className="shaidandiv">
            <div className="showDiv">
              <img src={temp[i].middle_pic_url} />
            </div>
            <div className="centerdiv">
              <img src={temp[i].user.avatar} className="peopleimg" />
              <span className="nickname">{temp[i].user.nickname}</span>
              <span className="likeNum">{temp[i].dynamic.likes}</span>
              <img src={require('../../assets/images/goodlike.png')} className="like2" />
            </div>
            <span className="showcontent">{temp[i].content}</span>
          </div>
        </a>)
      } else if (this.state.data.length !== 0 && this.state.data[0].pics !== undefined) {
        content.push(<a href={`http://www.ibantang.com/topic/${temp[i].id}`} target="_blank" >
          <div className="article_content">
            <div className="article_pic" >
              <img src={temp[i].pic} />
            </div>
            <span className="title">{temp[i].title}</span>
            <div>
              <img src={temp[i].user.avatar} className="peopleimg" />

              <span className="nickname">{temp[i].user.nickname}</span>
              <span className="likeNum">{temp[i].views}</span>
              <img src={require('../../assets/images/Z-views.png')} className="like2" />
              <span className="likeNum">{temp[i].likes}</span>
              <img src={require('../../assets/images/goodlike.png')} className="like2" />
            </div>
          </div>
        </a>)
      }
    }
    let arr4 = []
    if (this.state.method === 'getProductList') {
      arr4.push(<ul>
        <li className="rightpx" onClick={this.changesort0}>默认</li>
        <li className="rightpx" onClick={this.changesort1}>最受欢迎</li>
        <li className="rightpx" onClick={this.changesort3}>价格由低到高</li>
        <li className="rightpx" onClick={this.changesort4}>价格由高到低</li>
      </ul>)
    } else if (this.state.method === 'getPostList') {
      arr4.push(<ul>
        <li className="rightpx" onClick={this.changesort0}>默认</li>
        <li className="rightpx" onClick={this.changesort1} >最受欢迎</li>
        <li className="rightpx" onClick={this.changesort2} >最新</li>
      </ul>)
    } else {
      arr4 = []
    }

    return (
      <div>
        <div id="kinds_first_level">
          {arr1}
        </div>
        <div className="kinds_second_level">
          <div className="secondlevel">
            {arr2}
          </div>
        </div>
        <div className="kinds_second_level">
          <div className="secondlevel">
            {arr3}
          </div>
        </div>
        <div className="changemethod">
          <div className="methodleft">
            <div className="leftreview" onClick={this.goods} ><img src={require('../../assets/images/好物_选中.png')} className="smallpic" />好物</div>
            <div className="leftreview" onClick={this.review} ><img src={require('../../assets/images/评价晒单.png')} className="smallpic" />晒单</div>
            <div className="leftreview" onClick={this.article} ><img src={require('../../assets/images/照相机 (1).png')} className="smallpic" />文章</div>
          </div>
          <div className="methodright">
            {arr4}
          </div>
        </div>
        <div id="content">
          {content}
        </div>
        <div id="morethings" onClick={this.addmore}>
          点击查看更多精彩
        </div>
      </div>
    )
  }
}

export default Kinds