//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tabbar1: true,
    tabbar2: false,
    tabbar3: false,
    currentTab: 0,
    tabIndex: 0,
    background: [
      { url: '/pages/images/banner1.png' },
      { url: '/pages/images/banner2.png' }
    ],
    products: [
      { img: '/pages/images/product1.png', url: '', text: '客车(动车组)',des:'车型概述'},
      { img: '/pages/images/product2.png', url: '', text: '机车', des: '车型概述'},
      { img: '/pages/images/product3.png', url: '', text: '地铁', des: '车型概述'},
      { img: '/pages/images/product4.png', url: '', text: '轻轨', des: '车型概述'},
      { img: '/pages/images/product5.png', url: '', text: '磁浮', des: '车型概述'},
      { img: '/pages/images/product6.png', url: '', text: '其他', des: '车型概述'}
    ], 
    producttypes: [
      { img: '/pages/images/producttype1.png', url: '', text: '空气弹簧'},
      { img: '/pages/images/producttype2.png', url: '', text: '抗侧滚扭杆'},
      { img: '/pages/images/producttype3.png', url: '', text: '连杆组件'},
      { img: '/pages/images/producttype4.png', url: '', text: '牵引装置'},
      { img: '/pages/images/producttype5.png', url: '', text: '球铰关节'},
      { img: '/pages/images/producttype6.png', url: '', text: '锥形簧'},
      { img: '/pages/images/producttype7.png', url: '', text: '橡胶堆' },
      { img: '/pages/images/producttype8.png', url: '', text: '沙漏簧' },
      { img: '/pages/images/producttype9.png', url: '', text: '风电产品' },
      { img: '/pages/images/producttype10.png', url: '', text: '线路产品' },
      { img: '/pages/images/producttype11.png', url: '', text: '桥建产品' },
      { img: '/pages/images/producttype12.png', url: '', text: '其他' }
    ],
    allproducttypes: [
      { img: '/pages/images/producttype1.png', url: '', text: '空气弹簧' },
      { img: '/pages/images/producttype2.png', url: '', text: '抗侧滚扭杆' },
      { img: '/pages/images/producttype3.png', url: '', text: '连杆组件' },
      { img: '/pages/images/producttype4.png', url: '', text: '牵引装置' },
      { img: '/pages/images/producttype5.png', url: '', text: '球铰关节' },
      { img: '/pages/images/producttype13.png', url: '', text: '橡胶垫' },
      { img: '/pages/images/producttype14.png', url: '', text: '止挡' },
      { img: '/pages/images/producttype7.png', url: '', text: '橡胶堆' },
      { img: '/pages/images/producttype6.png', url: '', text: '锥形簧' },
      { img: '/pages/images/producttype15.png', url: '', text: 'V形簧' },
      { img: '/pages/images/producttype8.png', url: '', text: '沙漏簧' },
      { img: '/pages/images/producttype10.png', url: '', text: '线路产品' },
      { img: '/pages/images/producttype16.png', url: '', text: '悬挂系列' },
      { img: '/pages/images/producttype11.png', url: '', text: '桥建产品' },
      { img: '/pages/images/producttype9.png', url: '', text: '风电产品' }
    ],
    awards: [
      { awardTitle: '国家级  2009-11-10', awardDesc: '一级安全生产标准化企业'},
      { awardTitle: '国家级  2009-01-11', awardDesc: '中国轨道交通促进联盟理事会专家理事单位' },
      { awardTitle: '国家级  2007-07-11', awardDesc: '国家高技术产业化示范工程' },
      { awardTitle: '国家级  2006-03-11', awardDesc: '国家认定企业技术中心' },
      { awardTitle: '国家级  2004-05-02', awardDesc: '国家火炬计划重点高新企业' },
      { awardTitle: '国家级  2003-12-03', awardDesc: '博士后科研工作站' },
      { awardTitle: '省级    2010-12-10', awardDesc: '湖南省2010届文明单位' },
      { awardTitle: '省级    2009-11-12', awardDesc: '湖南省科学技术进步二等奖' },
      { awardTitle: '省级    2009-05-17', awardDesc: '湖南省减震降噪材料工程技术研究中心' },
      { awardTitle: '省级    2008-12-20', awardDesc: '湖南省高新技术企业' },
      { awardTitle: '省级    2008-12-07', awardDesc: '湖南名牌' }
    ],
    phones: [
      { phonetype: '人资类', phonenum: '86-0731-22837728' },
      { phonetype: '市场类：铁路机车车辆', phonenum: '86-0731-22884741' },
      { phonetype: '市场类：高铁、普铁线路产品', phonenum: '86-0731-22837826' },
      { phonetype: '市场类：风电减振元件', phonenum: '86-0731-22837769' },
      { phonetype: '市场类：风电叶片', phonenum: '86-0731-22837948' },
      { phonetype: '市场类：桥梁建设', phonenum: '86-0731-22837719' },
      { phonetype: '市场类：城轨铁路减振产品', phonenum: '86-0731-28445038' },
      { phonetype: '市场类：橡塑元件市场', phonenum: '86-0731-28491684' },
      { phonetype: '市场类：工程塑料', phonenum: '86-0731-28445089' },
      { phonetype: '市场类：薄膜市场', phonenum: '86-0731-22534008' },
      { phonetype: '市场类：芳纶市场', phonenum: '86-0731-22837934' }
    ]
  },
  tapTabbar1: function (e) {
    this.setData({
      tabbar1: true,
      tabbar2: false,
      tabbar3: false
    });
  },
  tapTabbar2: function (e) {
    this.setData({
      tabbar1: false,
      tabbar2: true,
      tabbar3: false
    });
  },
  tapTabbar3: function (e) {
    this.setData({
      tabbar1: false,
      tabbar2: false,
      tabbar3: true
    });
  },
  tapTabsDefault(e) {
    let id = e.currentTarget.dataset.id;
    this.setData({
      tabIndex: id
    });
  },
  tapTabs(e) {
    let id = e.currentTarget.dataset.id;
    this.setData({
      currentTab: id
    });
  },
  changeSwiper: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
