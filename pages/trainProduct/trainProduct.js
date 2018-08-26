// pages/trainProduct/trainProduct.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    producttypes: [
      { productTypeId: "1", productTypeName: "空气弹簧" },
      { productTypeId: "2", productTypeName: "抗侧滚扭杆" },
      { productTypeId: "3", productTypeName: "球绞关节" },
      { productTypeId: "4", productTypeName: "橡胶垫" }
    ],
    productlist: [
      { productId: "1", productTypeId: "1", productName: "530B空气弹簧", productNum: "2000074"},
      { productId: "2", productTypeId: "2", productName: "1010040扭杆", productNum: "1010040"},
      { productId: "3", productTypeId: "3", productName: "电机球绞", productNum: "0010334"},
      { productId: "4", productTypeId: "3", productName: "牵引球绞", productNum: "0000743" },
      { productId: "5", productTypeId: "3", productName: "转臂球绞", productNum: "0000744" },
      { productId: "6", productTypeId: "4", productName: "电机减震垫", productNum: "0051496"},
      { productId: "7", productTypeId: "4", productName: "一系橡胶垫", productNum: "0051337" },
      { productId: "8", productTypeId: "4", productName: "橡胶减震垫一", productNum: "0051442" },
      { productId: "9", productTypeId: "4", productName: "橡胶减震垫二", productNum: "0051443" },
      { productId: "10", productTypeId: "4", productName: "橡胶减震垫三", productNum: "0051492" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var title = options.trainName;
    wx.setNavigationBarTitle({
      title: title//页面标题为路由参数
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