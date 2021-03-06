// pages/trainProduct/trainProduct.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    producttypes: [],
    productlist: []
  },
  toSearchPage: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  toProductDetail: function (e) {
    let productId = e.currentTarget.dataset.productid;
    wx.navigateTo({
      url: '../productDetail/productDetail?productId=' + productId
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var title = options.trainName;
    var trainType = options.trainId;
    var that = this;
    wx.setNavigationBarTitle({
      title: title//页面标题为路由参数
    })

    wx.showLoading({
      title: "加载中"
    });
    wx.request({
      url: app.globalData.interfaceUrl + 'zc/listByTrainType?trainType=' + trainType,
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading();
        that.setData({
          producttypes: res.data.data.typeList
        });
        that.setData({
          productlist: res.data.data.data
        });
        console.log(res.data)
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
    console.log("reachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})