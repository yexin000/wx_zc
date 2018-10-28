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
    tabIndex: '01',
    background: [
      { url: 'https://guidaogouwuche.com/wx/storage/fetch/banner1.jpg'},
      { url: 'https://guidaogouwuche.com/wx/storage/fetch/banner2.jpg' },
      { url: 'https://guidaogouwuche.com/wx/storage/fetch/banner3.jpg' }
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
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype1.png', producttype: '04', text: '空气弹簧', parenttype: '01' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype2.png', producttype: '05', text: '抗侧滚扭杆', parenttype: '01' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype3.png', producttype: '06', text: '连杆组件', parenttype: '01' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype4.png', producttype: '07', text: '牵引装置', parenttype: '01' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype5.png', producttype: '01', text: '球铰关节', parenttype: '01' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype6.png', producttype: '09', text: '锥形簧', parenttype: '01' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype7.png', producttype: '08', text: '橡胶堆', parenttype: '01' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype8.png', producttype: '00', text: '沙漏簧', parenttype: '01' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype20.png', producttype: '00', text: '发电机弹性支撑', parenttype: '02' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype21.png', producttype: '00', text: '轨道减震器', parenttype: '03' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype11.png', producttype: '00', text: '桥梁支座', parenttype: '04' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype12.png', producttype: '00', text: '橡胶支座', parenttype: '04' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype22.png', producttype: '02', text: '橡胶垫', parenttype: '01' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype14.png', producttype: '03', text: '止挡', parenttype: '01' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype15.png', producttype: '10', text: 'V形簧', parenttype: '01' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype23.png', producttype: '11', text: '其他悬挂', parenttype: '01' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype24.png', producttype: '00', text: '叠簧式齿轮箱弹性支撑', parenttype: '02' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype25.png', producttype: '00', text: '轴瓦式齿轮箱弹性支撑', parenttype: '02' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype26.png', producttype: '00', text: '其他风电产品', parenttype: '02' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype27.png', producttype: '00', text: '道岔', parenttype: '03' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype28.png', producttype: '00', text: '安全装置', parenttype: '03' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype29.png', producttype: '00', text: '弹性垫板', parenttype: '03' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype30.png', producttype: '00', text: '套靴', parenttype: '03' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype31.png', producttype: '00', text: '阻尼器', parenttype: '04' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype32.png', producttype: '00', text: '止水产品', parenttype: '04' }
    ]
  },
  tapTabsDefault(e) {
    let id = e.currentTarget.dataset.id;
    this.setData({
      tabIndex: id
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
  toProductSearch: function (e) {
    var producttype = e.currentTarget.dataset.producttype;
    wx.navigateTo({
      url: '../productSearch/productSearch?producttype=' + producttype
    })
  },
  toTrainSearch: function(e) {
    var traintype = e.currentTarget.dataset.traintype;
    wx.navigateTo({
      url: '../train/train?traintype=' + traintype
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
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
