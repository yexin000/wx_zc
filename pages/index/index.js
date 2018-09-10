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
      { url: '/pages/images/banner1.png'},
      { url: '/pages/images/banner2.png' },
      { url: '/pages/images/banner3.png' }
    ],
    products: [
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/product01.png', traintype: '01', text: '客车(动车组)',des:'车型概述'},
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/product02.png', traintype: '02', text: '机车', des: '车型概述'},
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/product03.png', traintype: '03', text: '地铁', des: '车型概述'},
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/product04.png', traintype: '04', text: 'LRV轻轨', des: '车型概述'},
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/product05.png', traintype: '05', text: '磁悬浮', des: '车型概述'},
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/product06.png', traintype: '06', text: '风电', des: '车型概述' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/product07.png', traintype: '07', text: '轨道线路', des: '车型概述' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/product08.png', traintype: '08', text: '桥建', des: '车型概述' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/product09.png', traintype: '09', text: '其他', des: '车型概述'}
    ], 
    producttypes: [
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype1.png', url: '', text: '空气弹簧'},
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype2.png', url: '', text: '抗侧滚扭杆'},
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype3.png', url: '', text: '连杆组件'},
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype4.png', url: '', text: '牵引装置'},
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype5.png', url: '', text: '球铰关节'},
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype6.png', url: '', text: '锥形簧'},
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype7.png', url: '', text: '橡胶堆' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype8.png', url: '', text: '沙漏簧' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype20.png', url: '', text: '发电机弹性支撑' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype21.png', url: '', text: '轨道减震器' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype11.png', url: '', text: '桥梁支座' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype12.png', url: '', text: '橡胶支座' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype22.png', url: '', text: '橡胶垫' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype14.png', url: '', text: '止挡' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype15.png', url: '', text: 'V形簧' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype23.png', url: '', text: '其他悬挂' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype24.png', url: '', text: '叠簧式齿轮箱弹性支撑' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype25.png', url: '', text: '轴瓦式齿轮箱弹性支撑' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype26.png', url: '', text: '风电产品' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype27.png', url: '', text: '道岔' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype28.png', url: '', text: '安全装置' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype29.png', url: '', text: '弹性垫板' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype30.png', url: '', text: '套靴' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype31.png', url: '', text: '阻尼器' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype32.png', url: '', text: '止水产品' }
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
  toSearchPage: function() {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  toProductSearch: function () {
    wx.navigateTo({
      url: '../productSearch/productSearch'
    })
  },
  toTrainSearch: function(e) {
    var traintype = e.currentTarget.dataset.traintype;
    wx.navigateTo({
      url: '../train/train?traintype=' + traintype
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
