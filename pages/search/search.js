// pages/search/search.js
const app = getApp()

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
    productTypes : [],
    productIndex : 0,
    productType : null,
    searchText : '',
    zdwj: null,
    zxwj: null,
    zdbzgd: null,
    zxbzgd: null,
    zdlgjzdjj: null,
    zxlgjzdjj: null,
    zdzczjj: null,
    zxzczjj: null,
    zdngbcd: null,
    zxngbcd: null,
    zdlgzxj: null,
    zxlgzxj: null,
    zdgtqtwj: null,
    zxgtqtwj: null,
    zdzongxgd: null,
    zxzongxgd: null,
    zdjxgd: null,
    zxjxgd: null,
    zdgd: null,
    zxgd: null,
    zdgangd: null,
    zxgangd: null,
    zdzyg: null,
    zxzyg: null,
    zdzhouxgd: null,
    zxzhouxgd: null,
    zdcxgd: null,
    zxcxgd: null,
    zdvxjd: null,
    zxvxjd: null,
    zdcd: null,
    zxcd: null,
    zdkd: null,
    zxkd: null,
    checkedTrainType : ""
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
    this.setData({
      searchText: productName
    })
    this.toSearchResult()
  },
  toSearchResult: function () {
    if (this.data.searchText || this.data.productType) {
      try {
        var value = wx.getStorageSync('historyList')
        if (value) {
          var historyList = value.split(",");
          var isInHistory = false;
          for (var i = 0; i < historyList.length; i++) {
            if (this.data.searchText == historyList[i]) {
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
      var conditionText = "";
      if (null != this.data.productType && '' != this.data.productType) {
        if (this.data.productType == '04') {
          conditionText += "wj" + "#" + this.data.zxwj + "#" + this.data.zdwj + "|"
          conditionText += "bzgd" + "#" + this.data.zxbzgd + "#" + this.data.zdbzgd + "|"
        } else if (this.data.productType == '05') {
          conditionText += "lgjzdjj" + "#" + this.data.zxlgjzdjj + "#" + this.data.zdlgjzdjj + "|"
          conditionText += "zczjj" + "#" + this.data.zxzczjj + "#" + this.data.zdzczjj + "|"
          conditionText += "ngbcd" + "#" + this.data.zxngbcd + "#" + this.data.zdngbcd + "|"
        } else if (this.data.productType == '06') {
          conditionText += "lgzxj" + "#" + this.data.zxlgzxj + "#" + this.data.zdlgzxj + "|"
          conditionText += "gtqtwj" + "#" + this.data.zxgtqtwj + "#" + this.data.zdgtqtwj + "|"
        } else if (this.data.productType == '07') {
          conditionText += "zongxgd" + "#" + this.data.zxzongxgd + "#" + this.data.zdzongxgd + "|"
        } else if (this.data.productType == '01') {
          conditionText += "wj" + "#" + this.data.zxwj + "#" + this.data.zdwj + "|"
          conditionText += "jxgd" + "#" + this.data.zxjxgd + "#" + this.data.zdjxgd + "|"
        } else if (this.data.productType == '02') {
          conditionText += "gangd" + "#" + this.data.zxgangd + "#" + this.data.zdgangd + "|"
          conditionText += "gd" + "#" + this.data.zxgd + "#" + this.data.zdgd + "|"
        } else if (this.data.productType == '03') {
          conditionText += "zyg" + "#" + this.data.zxzyg + "#" + this.data.zdzyg + "|"
          conditionText += "zhouxgd" + "#" + this.data.zxzhouxgd + "#" + this.data.zdzhouxgd + "|"
        } else if (this.data.productType == '08') {
          conditionText += "gd" + "#" + this.data.zxgd + "#" + this.data.zdgd + "|"
          conditionText += "cxgd" + "#" + this.data.zxcxgd + "#" + this.data.zdcxgd + "|"
        } else if (this.data.productType == '09') {
          conditionText += "wj" + "#" + this.data.zxwj + "#" + this.data.zdwj + "|"
          conditionText += "gd" + "#" + this.data.zxgd + "#" + this.data.zdgd + "|"
          conditionText += "cxgd" + "#" + this.data.zxcxgd + "#" + this.data.zdcxgd + "|"
        } else if (this.data.productType == '10') {
          conditionText += "vxjd" + "#" + this.data.zxvxjd + "#" + this.data.zdvxjd + "|"
          conditionText += "cxgd" + "#" + this.data.zxcxgd + "#" + this.data.zdcxgd + "|"
        } else if (this.data.productType == '11') {
          conditionText += "cd" + "#" + this.data.zxcd + "#" + this.data.zdcd + "|"
          conditionText += "kd" + "#" + this.data.zxgkd + "#" + this.data.zdkd + "|"
          conditionText += "gd" + "#" + this.data.zxgd + "#" + this.data.zdgd + "|"
        }
      }
    
      if ("空簧" == this.data.searchText || "空气簧" == this.data.searchText) {
        this.setData({
          productType: "04",
          searchText: ""
        })
      } else if ("扭杆系统" == this.data.searchText) {
        this.setData({
          productType: "05",
          searchText: ""
        })
      } else if ("橡胶关节" == this.data.searchText || "弹性关节" == this.data.searchText || "弹性衬套" == this.data.searchText || "中心销套" == this.data.searchText || "弹性轴套" == this.data.searchText || "连接头" == this.data.searchText || "连杆上减震器" == this.data.searchText || "转臂节点" == this.data.searchText || "弹性活结" == this.data.searchText) {
        this.setData({
          productType: "01",
          searchText: ""
        })
      } else if ("一系垫" == this.data.searchText || "二系垫" == this.data.searchText || "减振垫" == this.data.searchText || "隔振垫" == this.data.searchText || "电机垫" == this.data.searchText || "牵引垫" == this.data.searchText || "支撑垫" == this.data.searchText || "叠层簧" == this.data.searchText) {
        this.setData({
          productType: "02",
          searchText: ""
        })
      } else if ("缓冲器" == this.data.searchText || "限位装置" == this.data.searchText) {
        this.setData({
          productType: "03",
          searchText: ""
        })
      } else if ("旁承" == this.data.searchText || "橡胶旁承" == this.data.searchText || "旁承体" == this.data.searchText || "二系橡胶弹簧" == this.data.searchText || "应急簧" == this.data.searchText || "旁承垫" == this.data.searchText) {
        this.setData({
          productType: "08",
          searchText: ""
        })
      } else if ("轴箱弹簧" == this.data.searchText || "锥形弹簧" == this.data.searchText || "一系橡胶弹簧" == this.data.searchText || "一系减震器" == this.data.searchText || "一系簧" == this.data.searchText || "一系动车簧" == this.data.searchText || "一系拖车簧" == this.data.searchText) {
        this.setData({
          productType: "09",
          searchText: ""
        })
      } else if ("人字簧" == this.data.searchText || "橡胶弹簧" == this.data.searchText || "V型弹簧" == this.data.searchText || "一系弹簧" == this.data.searchText) {
        this.setData({
          productType: "10",
          searchText: ""
        })
      } 

      for(var m = 0; m < this.data.productTypes.length; m ++) {
        if(this.data.productTypes[m].producttype == this.data.productType) {
          this.setData({
            productIndex: m
          })
          break;
        }
      }

      wx.navigateTo({
        url: '../searchResult/searchResult?productName=' + this.data.searchText + '&platform=' + this.data.checkedTrainType + '&productType=' + this.data.productType + '&conditionText=' + conditionText
      })
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
  bindChange: function (e) {
    this.setData({
      productIndex: e.detail.value
    })
    this.setData({
      productType: this.data.productTypes[e.detail.value].producttype
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadHistory();
    var that = this;
    // 查询产品类型
    wx.showLoading({
      title: "加载中"
    });
    wx.request({
      url: app.globalData.interfaceUrl + 'zc/getProductTypes',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading();
        var defaultType = { id: "0", producttype : 0, typename : "请选择"}
        res.data.data.unshift(defaultType)
        that.setData({
          productTypes: res.data.data
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

  zxwjInput: function (e) {
    this.setData({
      zxwj: e.detail.value
    })
  },

  zdwjInput: function (e) {
    this.setData({
      zdwj: e.detail.value
    })
  },

  zxbzgdInput: function (e) {
    this.setData({
      zxbzgd: e.detail.value
    })
  },

  zdbzgdInput: function (e) {
    this.setData({
      zdbzgd: e.detail.value
    })
  },

  zxlgjzdjjInput: function (e) {
    this.setData({
      zxlgjzdjj: e.detail.value
    })
  },

  zdlgjzdjjInput: function (e) {
    this.setData({
      zdlgjzdjj: e.detail.value
    })
  },

  zxzczjjInput: function (e) {
    this.setData({
      zxzczjj: e.detail.value
    })
  },

  zdzczjjInput: function (e) {
    this.setData({
      zdzczjj: e.detail.value
    })
  },

  zxngbcdInput: function (e) {
    this.setData({
      zxngbcd: e.detail.value
    })
  },

  zdngbcdInput: function (e) {
    this.setData({
      zdngbcd: e.detail.value
    })
  },

  zxlgzxjInput: function (e) {
    this.setData({
      zxlgzxj: e.detail.value
    })
  },

  zdlgzxjInput: function (e) {
    this.setData({
      zdlgzxj: e.detail.value
    })
  },

  zxgtqtwjInput: function (e) {
    this.setData({
      zxgtqtwj: e.detail.value
    })
  },

  zdgtqtwjInput: function (e) {
    this.setData({
      zdgtqtwj: e.detail.value
    })
  },

  zxzongxgdInput: function (e) {
    this.setData({
      zxzongxgd: e.detail.value
    })
  },

  zdzongxgdInput: function (e) {
    this.setData({
      zdzongxgd: e.detail.value
    })
  },

  zxcdInput: function (e) {
    this.setData({
      zxcd: e.detail.value
    })
  },

  zdcdInput: function (e) {
    this.setData({
      zdcd: e.detail.value
    })
  },

  zxkdInput: function (e) {
    this.setData({
      zxkd: e.detail.value
    })
  },

  zdkdInput: function (e) {
    this.setData({
      zdkd: e.detail.value
    })
  },

  zxgdInput: function (e) {
    this.setData({
      zxgd: e.detail.value
    })
  },

  zdgdInput: function (e) {
    this.setData({
      zdgd: e.detail.value
    })
  },

  zxgangdInput: function (e) {
    this.setData({
      zxgangd: e.detail.value
    })
  },

  zdgangdInput: function (e) {
    this.setData({
      zdgangd: e.detail.value
    })
  },

  zxzygInput: function (e) {
    this.setData({
      zxzyg: e.detail.value
    })
  },

  zdzygInput: function (e) {
    this.setData({
      zdzyg: e.detail.value
    })
  },

  zxzhouxgdInput: function (e) {
    this.setData({
      zxzhouxgd: e.detail.value
    })
  },

  zdzhouxgdInput: function (e) {
    this.setData({
      zdzhouxgd: e.detail.value
    })
  },

  zxcxgdInput: function (e) {
    this.setData({
      zxcxgd: e.detail.value
    })
  },

  zdcxgdInput: function (e) {
    this.setData({
      zdcxgd: e.detail.value
    })
  },

  zxvxjdInput: function (e) {
    this.setData({
      zxvxjd: e.detail.value
    })
  },

  zdvxjdInput: function (e) {
    this.setData({
      zdvxjd: e.detail.value
    })
  },

  zxjxgdInput: function (e) {
    this.setData({
      zxjxgd: e.detail.value
    })
  },

  zdjxgdInput: function (e) {
    this.setData({
      zdjxgd: e.detail.value
    })
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