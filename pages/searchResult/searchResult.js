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
    productList: [],
    showForm: false,
    formType: null,
    productName: null,
    productType: null,
    conditionText: null,
    platform: null,
    sortAttr: 'productnum',
    orderType: 'asc'
  },
  orderChange(e) {
    let sortAttr = e.currentTarget.dataset.attr;
    let orderType = this.data.orderType;
    if (sortAttr == this.data.sortAttr) {
      if (orderType == 'asc') {
        orderType = 'desc';
      } else {
        orderType = 'asc';
      }
    } else {
      orderType = 'asc';
    }
    
    this.setData({
      sortAttr: sortAttr,
      orderType: orderType
    });

    this.loadData();
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
    var productType = options.productType == "null" ? "" : options.productType;
    var conditionText = options.conditionText;
    var platform = options.platform;
    if (platform) {
      var platforms = platform.split(",");
      if(platforms != null && platforms.length > 1) {
        this.setData({
          tabIndex: '00'
        });
      } else {
        this.setData({
          tabIndex: platform
        });
      }
    }

    this.setData({
      productName: productName,
      productType: productType,
      conditionText: conditionText,
      platform: platform
    })

    this.loadData();
  },

  loadData: function() {
    var that = this;
    wx.showLoading({
      title: "加载中"
    });
    wx.request({
      url: app.globalData.interfaceUrl + 'zc/list',
      data: {
        nameOrNum: that.data.productName,
        productType: that.data.productType,
        conditionText: that.data.conditionText,
        platform: that.data.platform,
        sort: that.data.sortAttr,
        order: that.data.orderType
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading();
        that.setData({
          typeList: res.data.data.typeList
        });
        if (res.data.data.typeList.length == 1) {
          that.setData({
            showForm: true,
            formType: res.data.data.typeList[0].producttype
          })
        }
        that.setData({
          productList: res.data.data.data,
          productListData: res.data.data.data
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