// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyList : [],
    traintypes : [
      { traintype: "01", traintypeName: "客车(动车组)"},
      { traintype: "02", traintypeName: "机车"},
      { traintype: "03", traintypeName: "地铁"},
      { traintype: "04", traintypeName: "LRV轻轨"},
      { traintype: "05", traintypeName: "磁悬浮"},
      { traintype: "06", traintypeName: "风电"},
      { traintype: "07", traintypeName: "轨道线路"},
      { traintype: "08", traintypeName: "桥建"},
      { traintype: "09", traintypeName: "其他"}
    ],
    searchText : '',
    checkedTrainType : "01"
  },
  checkTrainType: function(e) {
    var traintype = e.currentTarget.dataset.traintype;
    if (this.data.checkedTrainType == traintype) {
      this.setData({
        checkedTrainType: ""
      })
    } else {
      this.setData({
        checkedTrainType: traintype
      })
    }
    
  },
  bindKeyInput: function (e) {
    this.setData({
      searchText: e.detail.value
    })
  },
  clearHistory: function(e) {
    wx.clearStorageSync();
    this.setData({
      historyList: []
    })
  },
  selectToSearchResult: function (e) {
    var productName = e.currentTarget.dataset.productname;
    wx.navigateTo({
      url: '../searchResult/searchResult?productName=' + productName + '&platform='
    })
  },
  toSearchResult: function () {
    if (this.data.searchText) {
      wx.navigateTo({
        url: '../searchResult/searchResult?productName=' + this.data.searchText + '&platform=' + this.data.checkedTrainType
      })
    }
    try {
      var value = wx.getStorageSync('historyList')
      if (value) {
        var historyList = value.split(",");
        var isInHistory = false;
        for (var i = 0; i < historyList.length; i++) {
          if (value == historyList[i]) {
            isInHistory = true;
            break;
          }
        }
        if (!isInHistory) {
          historyList.push(this.data.searchText);
          wx.setStorageSync('historyList', historyList.join(","));
        }
      } else {
        var historyList = [];
        historyList.push(this.data.searchText);
        wx.setStorageSync('historyList', historyList.join(","));
      }
    } catch (e) {
      // Do something when catch error
    }
    
  },
  loadHistory: function() {
    try {
      var value = wx.getStorageSync('historyList')
      var list = value.split(",");
      var historyList = [];
      for (var i = 0; i < list.length; i++) {
        var history = {};
        history.productName = list[i];
        historyList.push(history);
      }
      this.setData({
        historyList: historyList
      })
    } catch (e) {
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadHistory();
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
    this.loadHistory();
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