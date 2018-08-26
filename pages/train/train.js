// pages/train/train.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    tabIndex: 0,
    traintypes: [
      { traintype: '1', text: '客车(动车组)', des: '车型概述' },
      { traintype: '3', text: '机车', des: '车型概述' },
      { traintype: '2', text: '地铁', des: '车型概述' },
      { traintype: '4', text: '轻轨', des: '车型概述' },
      { traintype: '5', text: '磁浮', des: '车型概述' },
      { traintype: '6', text: '其他', des: '车型概述' }
    ],
    trains: [
      { traintype: '1', trainId: '1', name: 'CRH380D' },
      { traintype: '1', trainId: '2', name: '车型名称' },
      { traintype: '1', trainId: '3', name: '车型名称' },
      { traintype: '2', trainId: '4', name: '车型名称' },
      { traintype: '2', trainId: '5', name: '车型名称' },
      { traintype: '2', trainId: '6', name: '车型名称' },
      { traintype: '3', trainId: '7', name: '车型名称' },
      { traintype: '3', trainId: '8', name: '车型名称' },
      { traintype: '3', trainId: '9', name: '车型名称' },
      { traintype: '4', trainId: '10', name: '车型名称' },
      { traintype: '4', trainId: '11', name: '车型名称' },
      { traintype: '4', trainId: '12', name: '车型名称' },
      { traintype: '5', trainId: '13', name: '车型名称' },
      { traintype: '5', trainId: '14', name: '车型名称' },
      { traintype: '5', trainId: '15', name: '车型名称' },
      { traintype: '6', trainId: '16', name: '车型名称' },
      { traintype: '6', trainId: '17', name: '车型名称' },
      { traintype: '6', trainId: '18', name: '车型名称' }
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

  toTrainProduct: function(e) {
    var trainId = e.currentTarget.dataset.trainid;
    var trainName = e.currentTarget.dataset.trainname;
    wx.navigateTo({
      url: '../trainProduct/trainProduct?trainId=' + trainId + '&trainName=' + trainName
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var traintype = options.traintype;
    this.setData({
      tabIndex: traintype
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