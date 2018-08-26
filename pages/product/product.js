// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar1: true,
    tabbar2: false,
    tabbar3: false,
    currentTab: 0,
    tabIndex: 0,
    products: [
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/product1.png', traintype: '1', text: '客车(动车组)', des: '车型概述' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/product2.png', traintype: '3', text: '机车', des: '车型概述' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/product3.png', traintype: '2', text: '地铁', des: '车型概述' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/product4.png', traintype: '4', text: '轻轨', des: '车型概述' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/product5.png', traintype: '5', text: '磁浮', des: '车型概述' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/product6.png', traintype: '6', text: '其他', des: '车型概述' }
    ],
    producttypes: [
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype1.png', url: '', text: '空气弹簧' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype2.png', url: '', text: '抗侧滚扭杆' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype3.png', url: '', text: '连杆组件' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype4.png', url: '', text: '牵引装置' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype5.png', url: '', text: '球铰关节' },
      { img: 'https://mlhdkj.com/weixin/sdFile/zc/producttype6.png', url: '', text: '锥形簧' },
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
    ]
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
  toProductSearch: function () {
    wx.navigateTo({
      url: '../productSearch/productSearch'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})