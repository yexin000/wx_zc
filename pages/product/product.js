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
      { img: '/pages/images/product01.png', traintype: '01', text: '动车组', des: '车型概述' },
      { img: '/pages/images/product11.png', traintype: '12', text: '客车',des:'车型概述'},
      { img: '/pages/images/product02.jpg', traintype: '02', text: '机车', des: '车型概述' },
      { img: '/pages/images/product03.png', traintype: '03', text: '地铁', des: '车型概述' },
      { img: '/pages/images/product12.png', traintype: '11', text: '货车', des: '车型概述'},
      { img: '/pages/images/product04.png', traintype: '04', text: 'LRV轻轨', des: '车型概述' },
      { img: '/pages/images/product05.jpg', traintype: '05', text: '磁悬浮', des: '车型概述' },
      { img: '/pages/images/product06.png', traintype: '06', text: '风电', des: '车型概述' },
      { img: '/pages/images/product07.png', traintype: '07', text: '轨道线路', des: '车型概述' },
      { img: '/pages/images/product08.png', traintype: '08', text: '桥建', des: '车型概述' },
      { img: '/pages/images/product09.png', traintype: '09', text: '其他', des: '车型概述' }
    ], 
    producttypes: [
      { img: '/pages/images/producttype1.png', producttype: '04', text: '空气弹簧' , parenttype: '01' },
      { img: '/pages/images/producttype2.png', producttype: '05', text: '抗侧滚扭杆', parenttype: '01' },
      { img: '/pages/images/producttype3.png', producttype: '06', text: '连杆组件', parenttype: '01' },
      { img: '/pages/images/producttype4.png', producttype: '07', text: '牵引装置', parenttype: '01' },
      { img: '/pages/images/producttype5.png', producttype: '01', text: '球铰关节', parenttype: '01' },
      { img: '/pages/images/producttype6.png', producttype: '09', text: '锥形簧', parenttype: '01' },
      { img: '/pages/images/producttype7.png', producttype: '08', text: '橡胶堆', parenttype: '01' },
      { img: '/pages/images/producttype8.png', producttype: '12', text: '沙漏簧', parenttype: '01' },
      { img: '/pages/images/producttype20.png', producttype: '22', text: '发电机弹性支撑', parenttype: '02' },
      { img: '/pages/images/producttype21.png', producttype: '13', text: '轨道减震器' , parenttype: '03' },
      { img: '/pages/images/producttype11.png', producttype: '19', text: '桥梁支座', parenttype: '04' },
      { img: '/pages/images/producttype12.png', producttype: '18', text: '橡胶支座', parenttype: '04' },
      { img: '/pages/images/producttype22.png', producttype: '02', text: '橡胶垫', parenttype: '01' },
      { img: '/pages/images/producttype14.png', producttype: '03', text: '止挡', parenttype: '01' },
      { img: '/pages/images/producttype15.png', producttype: '10', text: 'V形簧', parenttype: '01' },
      { img: '/pages/images/producttype33.png', producttype: '26', text: '检修产品', parenttype: '01' },
      { img: '/pages/images/producttype23.png', producttype: '11', text: '其他悬挂', parenttype: '01' },
      { img: '/pages/images/producttype24.png', producttype: '23', text: '叠簧式齿轮箱弹性支撑', parenttype: '02' },
      { img: '/pages/images/producttype25.png', producttype: '24', text: '轴瓦式齿轮箱弹性支撑', parenttype: '02' },
      { img: '/pages/images/producttype34.png', producttype: '27', text: '机舱罩弹性支撑', parenttype: '02' },
      { img: '/pages/images/producttype26.png', producttype: '25', text: '其他风电产品', parenttype: '02' },
      { img: '/pages/images/producttype27.png', producttype: '14', text: '道岔', parenttype: '03' },
      { img: '/pages/images/producttype28.png', producttype: '15', text: '安全装置', parenttype: '03' },
      { img: '/pages/images/producttype29.png', producttype: '16', text: '弹性垫板', parenttype: '03' },
      { img: '/pages/images/producttype30.png', producttype: '17', text: '套靴', parenttype: '03' },
      { img: '/pages/images/producttype31.png', producttype: '20', text: '阻尼器', parenttype: '04' },
      { img: '/pages/images/producttype32.png', producttype: '21', text: '止水产品', parenttype: '04' },
      { img: '/pages/images/producttype35.png', producttype: '28', text: '层压产品', parenttype: '05' },
      { img: '/pages/images/producttype36.png', producttype: '29', text: '轨枕', parenttype: '05' },
      { img: '/pages/images/producttype37.png', producttype: '30', text: '耐磨板', parenttype: '05' },
      { img: '/pages/images/producttype38.png', producttype: '31', text: '内装', parenttype: '05' },
      { img: '/pages/images/producttype39.png', producttype: '32', text: '挡板座', parenttype: '03' },
      { img: '/pages/images/producttype40.png', producttype: '33', text: '轨距块', parenttype: '03' },
      { img: '/pages/images/producttype41.png', producttype: '34', text: '轨距挡板', parenttype: '03' },
      { img: '/pages/images/producttype42.png', producttype: '35', text: '套管', parenttype: '03' },
      { img: '/pages/images/producttype43.png', producttype: '36', text: '调高垫板', parenttype: '03' }
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
  toProductSearch: function (e) {
    var producttype = e.currentTarget.dataset.producttype;
    wx.navigateTo({
      url: '../productSearch/productSearch?producttype=' + producttype
    })
  },
  toSearchPage: function () {
    wx.navigateTo({
      url: '../search/search'
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