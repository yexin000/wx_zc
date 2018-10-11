// pages/productDetail/productDetail.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    productInfo: null,
    realpic: '/pages/images/no-image.jpg',
    snapshot: '/pages/images/no-image.jpg',
    productName: '轴箱拉杆橡胶关节(Axle Box Rod Budshing)'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var productId = options.productId;
    wx.showLoading({
      title: "加载中"
    });
    wx.request({
      url: app.globalData.interfaceUrl + 'zc/getById',
      data: {
        productId: productId
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading();
        that.setData({
          productInfo: res.data.data.productInfo
        });
        
        that.setData({
          realpic: res.data.data.productInfo.realpic ? res.data.data.productInfo.realpic : '/pages/images/no-image.jpg',
          snapshot: res.data.data.productInfo.snapshot ? res.data.data.productInfo.snapshot : '/pages/images/no-image.jpg'
        });
      },
      complete: function () {
        wx.hideLoading();
      }
    })
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