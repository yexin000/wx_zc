// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyList : [
      { id: "1", productName: "空气弹簧"},
      { id: "2", productName: "止挡" },
      { id: "3", productName: "橡胶堆" }
    ],
    traintypes : [
      { traintype: "1", traintypeName: "客车(动车组)", isCheck: "1" },
      { traintype: "2", traintypeName: "地铁", isCheck: "0" },
      { traintype: "3", traintypeName: "机车", isCheck: "0" },
      { traintype: "4", traintypeName: "轻轨", isCheck: "0" },
      { traintype: "5", traintypeName: "其他", isCheck: "0" }
    ]
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