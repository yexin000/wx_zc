// pages/searchResult/searchResult.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: '00',
    tabIndex: '00',
    typeList: [],
    productListData: [],
    productList: []
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
  filterResult: function(e) {
    var filterValue = e.detail.value;
    if (filterValue != null && filterValue != "") {
      if (this.data.productListData.length > 0) {
        var list = []
        for(var i = 0; i < this.data.productListData.length; i ++) {
          if (this.data.productListData[i].productname.indexOf(filterValue) >= 0) {
            list.push(this.data.productListData[i])
          }
        }
        this.setData({
          productList: list
        });
      }
    } else {
      this.setData({
        productList: this.data.productListData
      });
    }
  },
  toProductDetail: function(e) {
    let productId = e.currentTarget.dataset.productid;
    wx.navigateTo({
      url: '../productDetail/productDetail?productId=' + productId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var productName = options.productName;
    var productType = options.productType;
    var conditionText = options.conditionText;
    var platform = options.platform;
    if (platform) {
      this.setData({
        tabIndex: platform
      });
    }

    wx.showLoading({
      title: "加载中"
    });
    wx.request({
      url: app.globalData.interfaceUrl + 'zc/list',
      data: {
        productName: productName,
        productType: productType,
        conditionText: conditionText
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading();
        that.setData({
          typeList: res.data.data.typeList
        });
        that.setData({
          productList: res.data.data.data,
          productListData: res.data.data.data
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})