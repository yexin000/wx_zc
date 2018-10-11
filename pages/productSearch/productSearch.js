// pages/productSearch/productSearch.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,  //对应样式变化
    scrollTop: 0,  //用作跳转后右侧视图回到顶部
    allproducttypes: [
      { producttype: '04', productname: '空气弹簧' },
      { producttype: '05', productname: '抗侧滚扭杆' },
      { producttype: '06', productname: '连杆组件' },
      { producttype: '07', productname: '牵引装置' },
      { producttype: '01', productname: '球铰关节' },
      { producttype: '02', productname: '橡胶垫' },
      { producttype: '03', productname: '止挡' },
      { producttype: '08', productname: '橡胶堆' },
      { producttype: '09', productname: '锥形簧' },
      { producttype: '10', productname: 'V形簧' },
      { producttype: '11', productname: '其他' },
      { producttype: '12', productname: '沙漏簧' },
      { producttype: '13', productname: '线路产品' },
      { producttype: '14', productname: '悬挂系列' },
      { producttype: '15', productname: '桥建产品' },
      { producttype: '16', productname: '风电产品' }
    ], //左侧导航栏内容
    producttype: "",  //后台查询需要的字段
    productPropList: [] //右侧内容
  },
  toSearchPage: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  navbarTap: function (e) {
    var that = this;
    this.setData({
      currentTab: e.currentTarget.dataset.producttype,   //按钮CSS变化
      producttype: e.currentTarget.dataset.producttype,
      scrollTop: 0,   //切换导航后，控制右侧滚动视图回到顶部
    })
    //刷新右侧内容的数据
    this.getProductList(e.currentTarget.dataset.producttype);
  },
  toProductDetail: function (e) {
    let productId = e.currentTarget.dataset.productid;
    wx.navigateTo({
      url: '../productDetail/productDetail?productId=' + productId
    })
  },
  getProductList: function (producttype) {
    var that = this;
    wx.showLoading({
      title: "加载中"
    });
    wx.request({
      url: app.globalData.interfaceUrl + 'zc/listByProductType?productType=' + producttype,
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading();
        that.setData({
          productPropList: res.data.data.productPropList
        });
        console.log(res.data)
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var producttype = options.producttype;
    this.getProductList(producttype);
    this.setData({
      currentTab: producttype
    });
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