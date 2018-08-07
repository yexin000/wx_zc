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
    ]
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
